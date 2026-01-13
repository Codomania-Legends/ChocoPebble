import React, { useState } from 'react'; // Added useState
import './Cart.css';
import LikedBG from '/LikedBG.png';

function Cart() {
    // 1. Initialize state for the product count
    const [count, setCount] = useState(2); 
    const basePrice = 256.3;

    // 2. Handler functions
    const handleIncrement = () => {
        setCount(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (count > 1) { // Prevents count from going below 1
            setCount(prev => prev - 1);
        }
    };

    return (
        <main className="main-div-cart flex">
            <img src={LikedBG} alt="background" className='cartbg-img-div'/>

            <div className="content-layer-cart">
                <h1 className="cart-title">Cart</h1>
                
                <div className="cart-container">
                    <div className="cart-header grid-layout">
                        <span>Product Image</span>
                        <span>Product Name</span>
                        <span>Price</span>
                        <span>Product Count</span>
                        <span>Total</span>
                        <span>Instructions</span>
                    </div>

                    <div className="cart-item grid-layout">
                        <div className="cart-img-box">
                            <img src="/cadbury.png" alt="Dairy Milk" />
                        </div>
                        
                        <span className="p-name">Dairy Milk Iced Latte</span>
                        
                        <span className="p-price">₹{basePrice}</span>
                        
                        {/* 3. Logic applied to buttons */}
                        <div className="counter-box">
                            <button onClick={handleDecrement}>-</button>
                            <span>{count}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        
                        {/* 4. Total updates dynamically */}
                        <span className="p-total">₹{(basePrice * count).toFixed(1)}</span>
                        
                        <div className="instructions-box">
                            <input type="text" placeholder="Write Instructions here" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;