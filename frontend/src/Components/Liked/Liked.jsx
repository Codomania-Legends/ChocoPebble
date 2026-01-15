import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import './Liked.css';
import LikedBG from '/LikedBG.png';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

function Liked() {
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Slide in using X (transform) instead of 'left' to prevent layout shifting
        gsap.fromTo(".main-div-liked", 
            { x: "-100%" },
            { x: "0%", ease: "power3.out", duration: 1 }
        );
    }, []);

    const handleClose = () => {
        gsap.to(".main-div-liked", {
            x: "-100%",
            duration: 0.8,
            onComplete: () => navigate("/")
        });
    };

    return (
        <div className="main-div-liked">
            {/* Background restricted to this view only */}
            <img src={LikedBG} alt="background" className='liked-bg-img'/>
            
            <div className="liked-content-wrapper">
                <span onClick={handleClose} className="close-icon-liked">
                    <i className="fa-solid fa-xmark"></i>
                </span>

                    <h1 className="wishlist-title">Wish-List</h1>
                <Container className="content-container py-5 ">
                    
                    {/* Responsive Product Card */}
                    <div className="liked-product-card">
                        <div className="liked-img-box">
                            <img src="/cadbury.png" alt="Product" className="img-fluid" />
                        </div>
                        
                        <div className="liked-info">
                            <div className=" info-ka-dabba d-flex justify-content-between align-items-center mb-2">
                                <h2 className="liked-h2">Dairy Milk Iced Latte</h2>
                                <div onClick={() => setIsLiked(!isLiked)} className="heart-toggle">
                                    <i className={isLiked ? "fa-solid fa-heart filled" : "fa-regular fa-heart hollow"}></i>
                                </div>
                            </div>
                            
                            <p className="liked-brand">Cadbury</p>
                            
                            <div className="liked-price-row">
                                <span className="liked-weight">122.5Gm</span>
                                <span className="liked-price">₹256.3</span>
                            </div>
                        </div>

                        <div className="liked-btn-section">
                            <button className="liked-add-btn">Add to cart</button>
                        </div>
                    </div>
                    
                </Container>
            </div>
        </div>
    );
}

export default Liked;