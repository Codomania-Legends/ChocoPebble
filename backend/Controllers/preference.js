import PREFERENCE from "../Models/preference.js"

export async function HandleLikedProducts(req, res) {
    try {
        const { userID, productID, username } = req.body;

        let preference = await PREFERENCE.findOne({ userID, username });

        if (!preference) {
            preference = await PREFERENCE.create({
                userID,
                username,
                liked: [{ productID }]
            });
        } else {
            preference = await PREFERENCE.findOneAndUpdate(
                { userID, username },
                { $addToSet: { liked: { productID } } },
                { new: true } 
            );
        }

        res.json({
            msg: "Product Added to Liked Section 💖",
            product: preference
        });

    } catch (error) {
        res.status(500).json({
            msg: "Something Happened",
            err: error.message
        });
    }
}

export async function RemoveLikedProducts(req, res) {
    try {
        const { userID, productID, username } = req.body;

        const preference = await PREFERENCE.findOneAndUpdate(
            { userID, username },
            { $pull: { liked: { productID } } }, 
            { new: true } 
        );

        res.json({
            msg: "Product Removed from Liked Section 💔",
            product: preference
        });

    } catch (error) {
        res.status(500).json({
            msg: "Something Happened",
            err: error.message
        });
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

export async function RemoveCartProducts(req, res) {
    try {
        const { userID, productID, username } = req.body;

        const preference = await PREFERENCE.findOneAndUpdate(
            { userID, username },
            { $pull: { cart: { productID } } }, 
            { new: true } 
        );

        res.json({
            msg: "Product Removed from Cart Section 🛒",
            product: preference
        });

    } catch (error) {
        res.status(500).json({
            msg: "Something Happened",
            err: error.message
        });
    }
}