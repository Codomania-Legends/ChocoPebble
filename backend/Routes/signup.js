import express from "express"
import { HandleSignupUser } from "../Controllers/user.js"

const SignupRouter = express.Router()

SignupRouter.post( "/signup" , HandleSignupUser )

export default SignupRouter
