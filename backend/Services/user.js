import USER from "../Models/user.js";
import bcrypt from "bcrypt"

export async function GetAllUsers() {
    try {
        const allUsers = await USER.find()
        return allUsers
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function GetSingleSpecificUser(username, email, password) {
    try {
        const user = await USER.findOne({"username":username,"email":email})
        
        const isMatch = await bcrypt.compare(password , user.password)

        return isMatch ? user : undefined

    } catch (error) {
        console.log(error);
        return undefined
    }
}

export async function GetAllUsers_EmailID(email) {
    try {
        const users = await USER.find({"email" : email})
        return users
    } catch (error) {
        console.log(error);
        return []
    }
}
