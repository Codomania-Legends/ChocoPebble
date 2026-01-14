import { model, Schema } from "mongoose";

const SCHEMA = new Schema({
    productName : String,
    productID : String,
    price : Number,
    productImage : String,
    inStock : Boolean,
    recommended : Boolean,
    sold : Number,
    discount : Number
})

const PRODUCT = new model( "product" , SCHEMA )

export default PRODUCT
