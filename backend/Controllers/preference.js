import PREFERENCE from "../Models/preference"

 export async function HandleLikedProducts( req ,res ) {
    try {
        const {userID, productID, username} = req.body
        const preference = await PREFERENCE.findOne({
            userID, productID, username
        })
        if( !preference ) {
            await PREFERENCE.create({
                userID, username, liked : [{productID}]
            })
        } else {
            await PREFERENCE.findOneAndUpdate({
                userID, productID, username
            } , {
                $addToSet : { liked : {productID} }
            })
        }
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
        const preference = await PREFERENCE.findOne({
            userID, productID, username
        })
        if( !preference ) {
            await PREFERENCE.create({
                userID, username, cart : [{productID}]
            })
        } else {
            await PREFERENCE.findOneAndUpdate({
                userID, productID, username
            } , {
                $addToSet : { cart : {productID} }
            })
        }
    } catch (error) {
        res.json({
            msg : "Something Happened",
            err : error.message
        })
    }
}

