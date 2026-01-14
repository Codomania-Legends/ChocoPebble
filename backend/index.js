import "dotenv/config"
import express from "express"
import Connect_MongoDB from "./connect.js"
import USER_ROUTER from "./Routes/user.js"
import PRODUCT_ROUTER from "./Routes/product.js"

const app = express()
const PORT = process.env.PORT ?? 5000

// ------------------------------------------------------ //

// MiddleWares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// MiddleWares

// ------------------------------------------------------ //

// MongoDB Connection
Connect_MongoDB
.then( (res) => console.log(res))
.catch( (rej) => console.log(rej))
// MongoDB Connection

// ------------------------------------------------------ //

// Routes
app.use("/user" , USER_ROUTER)
app.use("/product" , PRODUCT_ROUTER)

// Routes


// ------------------------------------------------------ //

app.listen( 
    PORT,
    () => console.log(`Server Started at https://localhost:${PORT}/`)
)
