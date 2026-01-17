import React, { useRef, useEffect, useState } from 'react';
import "./Navbar.css"; // Keep this for animations/fonts only
import logo from "/logo.png";
import gsap from 'gsap';
import { Link, useNavigate } from "react-router-dom";

function Navbar({ aboutus }) {
    const navRef = useRef(null);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    // Refs for animations
    const heartRef = useRef(null);
    const heart1Ref = useRef(null);
    const heart2Ref = useRef(null);
    const cartRef = useRef(null);
    const cloudRef = useRef(null);

    // GSAP Animation on Mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".gsap", { opacity: 0, y: -100, x: -50 }, 
            { y: 0, x: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.5, clearProps: "all" });
        }, navRef);
        return () => ctx.revert();
    }, []);

    // Animation Handlers
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
        // BOOTSTRAP: navbar-expand-lg handles responsiveness. 'fixed-top' or 'sticky-top' can be added if needed.
        <nav ref={navRef} className="navbar navbar-expand-lg w-75 mx-auto" style={{ height: '10vh', minHeight: '80px', zIndex: 1000 }}>
            <div className="container-fluid p-0">
                
                {/* --- LOGO (Left) --- */}
                {/* col-lg-2 equivalent width */}
                <Link to="/" className="navbar-brand d-flex align-items-center justify-content-center" style={{ width: '15%' }}>
                    <div className="logo gsap" id="hoverScale">
                        <img src={logo} alt="Logo" className='img-fluid' style={{ maxHeight: '60px' }} />
                    </div>
                </Link>

                {/* --- TOGGLER (Mobile) --- */}
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* --- COLLAPSIBLE MENU --- */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    
                    {/* --- LINKS (Center) --- */}
                    {/* mx-auto pushes it to center, d-flex aligns items */}
                    <ul className="navbar-nav mx-auto d-flex align-items-center justify-content-evenly gap-4 w-50">
                        <li className="nav-item gsap" id="hoverScale">
                            <Link style={{fontSize : "0.85rem"}} className="nav-link text-brown" to="/">Home</Link>
                        </li>
                        <li className="nav-item gsap" id="hoverScale">
                            <Link style={{fontSize : "0.85rem"}} className="nav-link text-brown" to="/aboutus">About Us</Link>
                        </li>
                        <li id="hoverScale" className={`nav-item gsap ${(aboutus) ? "text-white" : "text-brown"}`}>
                            <Link style={{fontSize : "0.85rem",cursor: 'pointer'}} className="nav-link" >Products</Link>
                        </li>
                        <li id="hoverScale" className={`nav-item gsap  ${(aboutus) ? "text-white" : "text-brown"}`}>
                            <Link to="/signup" style={{fontSize : "0.85rem",cursor: 'pointer'}} className="nav-link" >Login/SignUp</Link>
                        </li>
                    </ul>

                    {/* --- ICONS (Right) --- */}
                    {/* d-flex matches desktop layout, mt-3 adds space on mobile */}
                    <div className="d-flex align-items-center justify-content-between mt-3 mt-lg-0" style={{ width: '10%', fontSize : "0.85rem" }}>
                        
                        {/* Heart Icon Container */}
                        <div className="position-relative d-flex align-items-center justify-content-center gsap" 
                             style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                             onMouseEnter={handleHeartEnter} onMouseLeave={handleHeartLeave} onClick={() => navigate('/home/liked')}>
                            <i ref={heartRef} className="fa-solid fa-heart text-brown z-2"></i>
                            <i ref={heart1Ref} className="fa-solid fa-heart text-brown position-absolute"></i>
                            <i ref={heart2Ref} className="fa-solid fa-heart text-brown position-absolute"></i>
                        </div>

                        {/* Cart Icon Container */}
                        <div className="position-relative d-flex align-items-center justify-content-center gsap" 
                             id="hoverScale"
                             style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                             onMouseEnter={handleCartEnter} onMouseLeave={handleCartLeave} onClick={() => navigate('/home/cart')}>
                            <i ref={cartRef} className="fa-brands fa-opencart text-brown z-3"></i>
                            <i ref={cloudRef} className="fa-brands fa-cloudversify text-brown position-absolute" style={{ opacity: 0 }}></i>
                        </div>

                        {/* Menu Dot */}
                        <div id="hoverScale" className={`d-flex align-items-center justify-content-center gsap ${(aboutus) ? "text-white" : "text-brown"}`}
                             style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;