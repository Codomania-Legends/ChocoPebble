import USER from "../Models/user.js";
import { GetAllUsers_EmailID, GetSingleSpecificUser } from "../Services/user.js";
import bcrypt from "bcrypt"

export async function HandleLoginUser(req , res){
    try {
        const {username , email , password} = req.body
        const user = await GetSingleSpecificUser(username, email, password)
        console.log(user);
        
        if(!user) throw(new Error("User Not Found"))
        res.json({msg:"User Logged in"})
    } catch (error) {
        res.json({msg : "Some Error Occured" , error:error.message })
    }
}

export async function HandleSignupUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const alreadyUser = await GetSingleSpecificUser(username, email, password);

        if (alreadyUser) throw new Error("User Already exists");

        const anotherAcc = await GetAllUsers_EmailID(email);

        const allLinkedAccounts = anotherAcc.map(account => ({
            username: account.username,
            email: account.email
        }));

        await USER.updateMany(
            { email: email }, 
            { 
                $addToSet: { 
                    anotherAccount: { 
                        username: username, 
                        email: email 
                    } 
                } 
            }
        );

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password , salt)

        const newUser = await USER.create({
            email,
            username,
            password : hashedPass,
            anotherAccount: allLinkedAccounts
        });

        if (!newUser) throw new Error("Internal Error");

        res.json({msg : "User Created"});

    } catch (error) {
        res.json({msg : error.message , error});
    }
}
