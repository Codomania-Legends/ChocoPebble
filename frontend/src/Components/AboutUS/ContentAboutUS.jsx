import React, { useEffect, useState, useRef } from 'react';
import "./aboutus.css";
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function ContentAboutUS({ details }) {
  const [show, setShow] = useState(false);
  
  // 1. Create Refs to target elements safely
  const containerRef = useRef(null);
  const hoverBackRef = useRef(null);
  
  // 2. Use gsap.context for easy cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // -- Initial Load Animations --
      
      // Image Pop-in
      gsap.fromTo(".image-profile-aboutus", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
      });

      // SplitText Animation
      // Check if element exists first to avoid errors
      const descElement = document.querySelector(".description-aboutus");
      if(descElement) {
        const split = new SplitText(".description-aboutus", { type: "words" });
        gsap.from(split.words, {
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          duration: 0.7,
          ease: "back",
          stagger: 0.005
        });
      }

      // Contact Buttons Fade In
      gsap.fromTo(".contact-aboutus", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 3,
      });

    }, containerRef); // Scope selector to this component

    return () => ctx.revert(); // Clean up all GSAP animations automatically
  }, []);


  // 3. Move Hover Logic to Handler Functions
  const hoverTweenRef = useRef(null);

  const handleMouseEnter = (color) => {
    if (!hoverBackRef.current) return;

    // kill any previous tween
    if (hoverTweenRef.current) {
      hoverTweenRef.current.kill();
    }

    hoverTweenRef.current = gsap.to(hoverBackRef.current, {
      scale: 1.3,
      opacity: 0,
      duration: 1,
      ease: "circ.out",
      repeat: -1,
      background : color
    });
  };

  const handleMouseLeave = () => {
    if (hoverTweenRef.current) {
      hoverTweenRef.current.kill();
      hoverTweenRef.current = null;
    }

    // reset to initial state
    gsap.set(hoverBackRef.current, { scale: 1, opacity: 1,background:"transparent" });
  };

  // Helper for dynamic classes
  const isVidhi = details.name === "Vidhi";

  return (
    <div className="contentAboutUS flex" ref={containerRef}>
      
      {/* Profile Picture Section */}
      <div 
        className={`profilePic-aboutus flex ${isVidhi ? "VidhiBG" : "AnshulBG"}`}
        onMouseEnter={() => handleMouseEnter(`${isVidhi ? "white" : "#2a1303"}`)}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={isVidhi ? "/vidhi.jpeg" : "/anshul.jpg"} 
          alt={details.name} 
          className="image-profile-aboutus" 
        />
        {/* Attached ref here to animate this specific div */}
        <div ref={hoverBackRef} className='ImageBackHover'></div>
      </div>

      {/* Description Section */}
      <div className={`description-aboutus ${isVidhi ? "Vidhi" : "Anshul"}`}>
        {details.description}
      </div>

      {/* Contact Section */}
      <div className="contact-aboutus">
        <button 
          id={show ? "show-minus" : null} 
          onClick={() => setShow(!show)} 
          className={`Button-aboutus ${isVidhi ? "VidhiBG" : "AnshulBG"}`}
        >
          {show ? <i className="fa-solid fa-minus"></i> : "Contact us"}
        </button>

        {/* Icons */}
        <i id={`${!show ? "hide-me-contactus" : ""}`}className={` ${isVidhi ? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-brands fa-github`}></i>
        <i id={`${!show ? "hide-me-contactus" : ""}`}className={` ${isVidhi ? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-brands fa-linkedin`}></i>
        <i 
          id={`${!show ? "hide-me-contactus" : ""}`}className={` ${isVidhi ? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-brands fa-whatsapp`} 
          onClick={() => window.location.href = "https://wa.me/919165872964"}
        ></i>
        <i id={`${!show ? "hide-me-contactus" : ""}`}className={` ${isVidhi ? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-solid fa-envelope`}></i>
      </div>
    </div>
  );
}

export default ContentAboutUS;
