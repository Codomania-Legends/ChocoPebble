import { model, Schema } from "mongoose";

const SCHEMA = new Schema({
    userID : String,
    username : String,
    liked : [{productID : String , _id : false}],
    cart : [{productID : String , _id : false}]
})

const PREFERENCE = new model("preference" , SCHEMA)

export default PREFERENCE
