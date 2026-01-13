import USER from "../Models/user.js";

export async function GetAllUsers() {
    try {
        const allUsers = await USER.find()
        return allUsers
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function GetSingleSpecificUser(username , email) {
    try {
        const user = await USER.findOne({"username":username,"email":email})
        return user
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
