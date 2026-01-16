import React, { useEffect, useRef } from 'react';
import BackgroundStart from '../../Animations/background';
import "./Menu.css";
import doorleft from "/dooleft.png";
import doorright from "/doorright.png";
import aamchi from "/aamchi_mango.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function Menu() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- REMOVED THE SNAPPING BLOCK HERE --- 
      // (The code that forced the scroll is now gone)

      // 1. Background Animation
      if (typeof BackgroundStart === 'function') BackgroundStart(".background-gr");

      // 2. Chocolate Drop Animation
      gsap.to(".chocolateDrop", {
        height: "75%",
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".menu-high",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        }
      });

      // 3. DOOR ANIMATION LOGIC
      const animateDoorsOpen = (leftDoor, rightDoor) => {
        gsap.to(leftDoor, { left: "-28%", rotateY: -90, duration: 1, ease: "power2.inOut" });
        gsap.to(rightDoor, { right: "-28%", rotateY: 90, duration: 1, ease: "power2.inOut" });
      };

      const animateDoorsClose = (leftDoor, rightDoor) => {
        gsap.to(leftDoor, { left: 0, rotateY: 0, duration: 1, ease: "power2.inOut" });
        gsap.to(rightDoor, { right: "-3%", rotateY: 0, duration: 1, ease: "power2.inOut" });
      };

      // Loop through boxes to attach listeners safely
      [1, 2, 3].forEach(num => {
        const box = document.querySelector(`.menuBox${num}`);
        if (box) {
          box.addEventListener('mouseenter', () => animateDoorsOpen(`.doorleft${num}`, `.doorright${num}`));
          box.addEventListener('mouseleave', () => animateDoorsClose(`.doorleft${num}`, `.doorright${num}`));
          box.addEventListener('click', () => animateDoorsOpen(`.doorleft${num}`, `.doorright${num}`));
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reusable Card Component
  const MenuBox = ({ num }) => (
    <div className={`menuBox${num} baksa position-relative d-flex flex-column align-items-center mb-4 mb-lg-0`}>
      <div className="menu-content-box1 d-flex flex-column align-items-center h-100 w-100">
        <div className="aamchi-img d-flex justify-content-center align-items-center">
          <img src={aamchi} alt="Mango" className="aamchi-mango-img img-fluid" />
        </div>
        <div className="content-describe d-flex flex-column justify-content-evenly w-100 text-center">
          <div className="content-name"><h3>Aamchi Mango</h3></div>
          <div className="content-msg text-muted small"><span>A refreshing mango-flavored delight.</span></div>
          <div className="price-name-gm d-flex justify-content-between align-items-center mt-2 px-2">
            <div className="gm-name text-start">
              <div className="namingg fw-bold"><span>Hocco</span></div>
              <div className="gm small"><span>120Gm</span></div>
            </div>
            <div className="price fw-bold text-end"><span>₹150</span></div>
          </div>
        </div>
      </div>
      <img src={doorleft} className={`doorleft${num} door`} alt="left door" />
      <img src={doorright} className={`doorright${num} door`} alt="right door" />
    </div>
  );

  return (
    <div ref={containerRef} className='menu-high position-relative'>
      <div className="mainBuyChocolateDiv background-gr d-flex flex-column align-items-center">
        <h1 className='heading-menu text-center mt-5'>Menu Highlights</h1>
        <img src='/chocolateDrop.png' className='chocolateDrop' alt="drip" />
        
        {/* Menu Boxes Container */}
        <div className="menu-boxes w-100 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-evenly align-items-center h-100 pt-5">
          <MenuBox num={1} />
          <MenuBox num={2} />
          <MenuBox num={3} />
        </div>
      </div>
    </div>
  );
}

export default Menu;