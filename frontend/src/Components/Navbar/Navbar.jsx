import React, { useRef, useEffect } from 'react';
import "./Navbar.css";
import logo from "/logo.png";
import gsap from 'gsap';
import { Link, useNavigate } from "react-router-dom"; // Corrected import

function Navbar({ aboutus }) {
    const navRef = useRef(null); // A single ref for the whole navbar
    const navigate = useNavigate()
    // Use refs for the specific animation targets
    const heartRef = useRef(null);
    const heart1Ref = useRef(null);
    const heart2Ref = useRef(null);
    const cartRef = useRef(null);
    const cloudRef = useRef(null);

    // Animate the nav links on mount
    // useEffect(() => {
    //     // Use a single GSAP call with stagger for a cleaner animation
    //     const ctx = gsap.context(() => {
    //         // gsap.from(".gsap", {
    //         //     y: -100,
    //         //     opacity: 0,
    //         //     x: -50,
    //         //     duration: 0.5,
    //         //     stagger: 0.1, // Stagger the animation for each element with this class
    //         // });
    //     }, navRef); // Scope the animation to the navbar
    //     return () => ctx.revert();
    // }, []);

    // --- Animation Event Handlers ---
    const handleHeartEnter = () => {
        gsap.to(heart1Ref.current, { y: -10, x: 5, scale: 0.5, rotate: 30, opacity: 1, duration: 1 });
        gsap.to(heart2Ref.current, { y: -12, x: -5, scale: 0.7, rotate: -30, opacity: 1, duration: 1 });
    };

    const handleHeartLeave = () => {
        gsap.to([heart1Ref.current, heart2Ref.current], { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0, duration: 1 });
    };
    
    const handleCartEnter = () => {
        gsap.to(cartRef.current, { x: 7, duration: 1 });
        gsap.to(cloudRef.current, { x: -8, opacity: 1, fontSize: "smaller", duration: 1 });
    };

    const handleCartLeave = () => {
        gsap.to(cartRef.current, { x: 0, duration: 1 });
        gsap.to(cloudRef.current, { x: 0, opacity: 0, duration: 1 });
    };

    return (
        <nav ref={navRef} className="nav-main flex">
            <section className="nav-main-left flex">
                <div className="logo flex gsap">
                    <img src={logo} className='Choco-Pebble-logo shadow' />
                </div>
            </section>
            <section className="nav-main-center flex">
                <div className="home-text shadow gsap">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="about-us-text shadow gsap">
                    <Link to="/aboutus">About Us</Link>
                </div>
                <div className={`products shadow gsap ${(aboutus) ? "aboutus-navbar" : null}`}>
                    <span>Products</span>
                </div>
                <div className={`login-signup shadow gsap ${(aboutus) ? "aboutus-navbar" : null}`}>
                    <span>Login/SignUp</span>
                </div>
            </section>
            <section className="nav-main-right flex gsap">
                <div 
                    className="shadow home-like flex"
                    onMouseEnter={handleHeartEnter}
                    onMouseLeave={handleHeartLeave}
                    onClick={ () => navigate('/liked') }
                >
                    <i ref={heartRef} className="fa-solid fa-heart heart"></i>
                    <i ref={heart1Ref} className="fa-solid fa-heart heart1"></i>
                    <i ref={heart2Ref} className="fa-solid fa-heart heart2"></i>
                </div>
                <div 
                    className="shadow home-cart gsap"
                    onMouseEnter={handleCartEnter}
                    onMouseLeave={handleCartLeave}
                    onClick={ () => navigate('/cart') }
                >
                    <i ref={cartRef} className="fa-brands fa-opencart cart"></i>
                    <i ref={cloudRef} className="fa-brands fa-cloudversify cloud"></i>
                </div>
                <div className={`shadow home-dot-menu gsap ${(aboutus) ? "aboutus-navbar" : null}`}>
                    <span><i className="fa-solid fa-ellipsis-vertical" ></i></span>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;

// .............................................................
