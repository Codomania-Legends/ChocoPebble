import PREFERENCE from "../Models/preference.js"

 export async function HandleLikedProducts( req ,res ) {
    try {
        const {userID, productID, username} = req.body
        let preference = await PREFERENCE.findOne({
            userID, username
        })
        if( !preference ) {
            preference = await PREFERENCE.create({
                userID, username, liked : [{productID}]
            })
        } else {
            preference = await PREFERENCE.findOneAndUpdate({
                userID, username
            } , {
                $addToSet : { liked : {productID} }
            })
        }
        res.json({
            msg : "Product Added in Liked Section",
            product : preference
        })
    } catch (error) {
        res.json({
            msg : "Something Happened",
            err : error.message
        })
    }
}

export async function HandleCartProducts( req ,res ) {
    try {
        const {userID, productID, username} = req.body
        let preference = await PREFERENCE.findOne({
            userID, username
        })
        if( !preference ) {
            preference = await PREFERENCE.create({
                userID, username, cart : [{productID}]
            })
        } else {
            preference = await PREFERENCE.findOneAndUpdate({
                userID, username
            } , {
                $addToSet : { cart : {productID} }
            })
        }
        res.json({
            msg : "Product Added in Cart Section",
            product : preference
        })
    } catch (error) {
        res.json({
            msg : "Something Happened",
            err : error.message
        })
    }
}

