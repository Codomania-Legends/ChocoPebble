import {nanoid} from "nanoid"
import PRODUCT from "../Models/product.js"

export async function HandleCreateProduct(req , res) {
    try {
        const {
            productName,
            price,
            productImage,
            inStock,
            discount
        } = req.body
        const productID = nanoid(20)
        
        const product = await PRODUCT.create({
            productImage,
            productID,
            price,
            inStock,
            productName,
            sold : 0,
            recommended : false,
            discount
        })
        if( !product ) throw(new Error("Product not created"))
        res.json( {msg : "Product Added in Collection✔️"} )
    } catch (error) {
        res.json({msg : "Error Occured", err : error.message})
    }
}

export async function HandleGetSpecificProduct(req , res) {
    try {
        const { productID } = req.params
        const product = await PRODUCT.findOne({productID})
        if( !product ) throw(new Error("Product Not Found"))
        res.json({
            product,
            msg : "Got Product"
        })
    } catch (error) {
        res.json({
            product : undefined,
            msg : "Error Occured", 
            err : error.message
        })
    }
}

export async function SetRecommended_Products( req, res ) {
    try {
        const { ids } = req.body
        // ids = [{id : "" , recommended : true | false}]
        ids.map( async prod => {
            await PRODUCT.findOneAndUpdate( {productID : prod.id} , {$set:{recommended : prod.recommended}} )
        } )
        res.json({msg : "Done" , updatedProducts : ids})

    } catch (error) {
        res.json({msg : "Can't Set Recommended" , err : error.message })
    }
}

export async function SetDiscount_Product( req , res ) {
    try {
        const {id , discount} = req.body
        const prod = await PRODUCT.findOneAndUpdate({productID : id} , { $set:{ discount } })
        res.json({
            msg : "Done",
            updatedProducts : prod
        })
    } catch (error) {
        res.json({msg : "Can't Set Discount" , err : error.message })
    }
}

export async function RemoveProduct_from_Collection(req , res) {
    try {
        const {productID} = req.params
        await PRODUCT.findOneAndDelete({productID : id})
        res.json({
            msg : "Done"
        })
    } catch (error) {
        res.json({msg : "Can't Delete Product" , err : error.message })
    }
}
