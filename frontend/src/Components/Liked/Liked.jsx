import React, { useState } from 'react';
import './Liked.css';
import LikedBG from '/LikedBG.png';

function Liked() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <main className="main-div">
            <img src={LikedBG} alt="background" className='likebg-img-div'/>

            <div className="content-layer">
                <h1 className="wishlist-title">Wish-List</h1>
                
                {/* Product Card */}
                <div className="product-card flex">
                    <div className="img-section flex">
                        <img src="/cadbury.png" alt="Cadbury Twirl" className="product-img" />
                    </div>
                    
                    <div className="info-section">
                        <div className="title-row flex">
                            <h2>Dairy Milk Iced Latte</h2>
                            {/* Toggle Heart Icon */}
                            <div onClick={() => setIsLiked(!isLiked)} className="heart-toggle">
                                {isLiked ? (
                                    <i className="fa-solid fa-heart filled"></i>
                                ) : (
                                    <i className="fa-regular fa-heart hollow"></i>
                                )}
                            </div>
                        </div>
                        
                        <p className="brand">Cadbury</p>
                        
                        <div className="price-row flex">
                            <span className="weight">122.5Gm</span>
                            <span className="price">₹256.3</span>
                        </div>
                    </div>

                    <div className="btn-section flex">
                        <button className="add-btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Liked;