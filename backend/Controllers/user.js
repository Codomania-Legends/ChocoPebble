import USER from "../Models/user.js";
import { GetAllUsers_EmailID, GetSingleSpecificUser } from "../Services/user.js";
import bcrypt from "bcrypt"
import {nanoid} from "nanoid"

export async function HandleLoginUser(req , res){
    try {
        const {username , email , password} = req.body
        const user = await GetSingleSpecificUser(username, email, password)
        console.log(user);
        
        if(!user) throw(new Error("User Not Found"))
        res.json({
            msg:"User Logged in",
            detail : {
                username : user.username, 
                email : user.email, 
                userId : user.userId
            }
        })
    } catch (error) {
        res.json({msg : "Some Error Occured" , error:error.message })
    }
}

export async function HandleSignupUser(req, res) {
    try {
        const { username, email, password } = req.body;

        console.log(req.body)

        const alreadyUser = await GetSingleSpecificUser(username, email, password);

        if (alreadyUser) throw new Error("User Already exists");

        const anotherAcc = await GetAllUsers_EmailID(email);

        const userId = nanoid(10)

        const allLinkedAccounts = anotherAcc.map(account => ({
            username: account.username,
            email: account.email,
            userId : account.userId
        }));

        await USER.updateMany(
            { email: email }, 
            { 
                $addToSet: { 
                    anotherAccount: { 
                        username: username, 
                        email: email,
                        userId : userId
                    } 
                } 
            }
        );

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password , salt)

        const newUser = await USER.create({
            email,
            userId,
            username,
            password : hashedPass,
            anotherAccount: allLinkedAccounts
        });

        if (!newUser) throw new Error("Internal Error");

        res.json({
            msg : "User Created",
            detail : {
                username : newUser.username, 
                email : newUser.email, 
                userId : newUser.userId
            }});

    } catch (error) {
        res.json({msg : error.message , error});
    }
}
