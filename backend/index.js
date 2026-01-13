import "dotenv/config"
import express from "express"

const app = express()
const PORT = process.env.PORT ?? 5000

// MiddleWares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// MiddleWares

// ------------------------------------------------------ //

// Routes
app.get("/" , (req , res) => {
    res.send("Hello")
})
// Routes


app.listen( 
    PORT,
    () => console.log(`Server Started at https://localhost:${PORT}/`)
)
