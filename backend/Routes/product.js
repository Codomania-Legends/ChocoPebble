import express from "express"
import { HandleCreateProduct, HandleGetSpecificProduct, RemoveProduct_from_Collection, SetDiscount_Product, SetRecommended_Products } from "../Controllers/product.js"

const PRODUCT_ROUTER  = express.Router()

// Create a Product
PRODUCT_ROUTER.post( "/create" , HandleCreateProduct )

// Get Specific Product
PRODUCT_ROUTER.get( "/prod/:productID" , HandleGetSpecificProduct )

// Set Recommended Product
PRODUCT_ROUTER.post( "/set/recommended" , SetRecommended_Products )

// Update or Set Discount
PRODUCT_ROUTER.patch( "/set/discount" , SetDiscount_Product )

// Delete Product
PRODUCT_ROUTER.delete( "/delete/:productID" , RemoveProduct_from_Collection )

export default PRODUCT_ROUTER
