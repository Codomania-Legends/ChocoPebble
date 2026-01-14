import express from "express"
import { HandleLoginUser, HandleSignupUser } from "../Controllers/user.js"

const USER_ROUTER = express.Router()

USER_ROUTER.post( "/login" , HandleLoginUser )
USER_ROUTER.post( "/signup" , HandleSignupUser )

export default USER_ROUTER
