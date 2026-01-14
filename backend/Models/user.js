import { model, Schema } from "mongoose";

const SCHEMA = new Schema({
    username : String,
    password : String,
    email : String,
    userId : String,
    anotherAccount : [ {username : String, email : String , userId : String} ]
})

const USER = new model("user" , SCHEMA)

export default USER
