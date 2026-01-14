import { model, Schema } from "mongoose";

const SCHEMA = new Schema({
    userID : String,
    username : String,
    liked : [{productID : String}],
    cart : [{productID : String}]
})

const PREFERENCE = new model("preference" , SCHEMA)

export default PREFERENCE
