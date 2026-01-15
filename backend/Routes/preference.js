import express from "express"
import { HandleCartProducts, HandleLikedProducts, RemoveCartProducts, RemoveLikedProducts } from "../Controllers/preference.js"

const PREFERENCE_Router = express.Router()

PREFERENCE_Router.post( "/like" , HandleLikedProducts )
PREFERENCE_Router.delete( "/like" , RemoveLikedProducts )

PREFERENCE_Router.post( "/cart" , HandleCartProducts )
PREFERENCE_Router.delete( "/cart" , RemoveCartProducts )

export default PREFERENCE_Router