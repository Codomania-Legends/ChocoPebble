import express from "express"
import { HandleCartProducts, HandleLikedProducts } from "../Controllers/preference.js"

const PREFERENCE_Router = express.Router()

PREFERENCE_Router.post( "/like" , HandleLikedProducts )
PREFERENCE_Router.post( "/cart" , HandleCartProducts )

export default PREFERENCE_Router