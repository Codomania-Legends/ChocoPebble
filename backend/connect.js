import "dotenv/config"
import { connect } from "mongoose";

const Connect_MongoDB = new Promise( async(resolve , reject) => {
    await connect(`${process.env.MongoURL}${process.env.MongoDB}`)
    .then( resolve("MongoDB Connected") )
    .catch(() => reject("Some Error Occured in Connection"))
} )

export default Connect_MongoDB
