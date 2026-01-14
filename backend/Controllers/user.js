import USER from "../Models/user.js";
import { GetAllUsers_EmailID, GetSingleSpecificUser } from "../Services/user.js";
import bcrypt from "bcrypt"

function HandleLoginUser(req , res){
    
}

export async function HandleSignupUser(req, res) {
    try {
        let { username, email, password } = req.body;

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

        res.send("User Created");
        console.log("pass : " ,password);

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}
