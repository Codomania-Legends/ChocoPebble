import USER from "../Models/user.js";
import { GetAllUsers_EmailID, GetSingleSpecificUser } from "../Services/user.js";

function HandleLoginUser(req , res){
    
}

export async function HandleSignupUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const alreadyUser = await GetSingleSpecificUser(username, email);
        console.log(alreadyUser);

        if (alreadyUser) throw new Error("User Already Logged IN");

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

        const newUser = await USER.create({
            email,
            username,
            password,
            anotherAccount: allLinkedAccounts
        });

        if (!newUser) throw new Error("Internal Error");

        res.send("User Created");

    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}
