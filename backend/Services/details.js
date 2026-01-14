import PREFERENCE from "../Models/preference.js"
import PRODUCT from "../Models/product.js"

export async function GetAllDetails( req , res ) {
    try {
        const products = await PRODUCT.find({})
        const preference = await PREFERENCE.find({})
        res.json( {
            products,
            preference,
            msg : "Got all the details Safely"
        } )
        
    } catch (error) {
        res.json({
            msg : "Oops! Something Happened",
            err : error.message
        })
    }
}