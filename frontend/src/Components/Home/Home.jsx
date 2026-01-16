import React, { useEffect, useRef } from 'react';
import './Home.css';
import BackgroundStart from '../../Animations/background'; 
import chocobar from '/chocoBar.svg';
import HC from '../HorizontalComponent/HC';
import Chocobar from '../../Animations/Chocobar'; 
import chocochip from '/chocoChip.svg';
import chocolatesplashleft from '/barBackSplashLeft.svg';
import chocolatesplashright from '/barBackSplashRight.svg';
import Menu from '../MenuHighlight/Menu';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Buy from '../BuyChocolate_Icecream/Buy';
import Discript from '../Discription/Discript';
import PageFooter from '../PageFooter/PageFooter';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

// Register plugins
gsap.registerPlugin(SplitText);

function Home() {
  const textRef = useRef();
  const HR_ref = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP Context ensures animations are cleaned up when component unmounts
    let ctx = gsap.context(() => {
      const timeLine = gsap.timeline();

      // 1. Run Background Animation
      if (typeof BackgroundStart === 'function') {
         BackgroundStart('.background-gr', timeLine);
      }

      // 2. Run Chocobar Animation
      // We pass the timeline, but Chocobar.js also handles its own internal sequencing
      if (typeof Chocobar === 'function') {
        Chocobar(timeLine);
      }

      // 3. Text Animation
      const split = SplitText.create(textRef.current, { type: 'chars' });
      gsap.set(split.chars, {
        x: () => Math.random() * 300 - 150,
        y: () => Math.random() * 200 - 100,
        rotation: () => Math.random() * 720 - 360,
        fontFamily: "Aboreto",
        opacity: 0,
      });

      gsap.to(split.chars, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.05,
        delay: 3
      });

      // 4. Button Animation
      gsap.fromTo(".gsap-button",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, delay: 4, ease: "back.out(1.7)" }
      );

    }, containerRef); // Scope everything to containerRef

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <>
      <Outlet />
      {/* Main Container: Full viewport height, relative positioning */}
      <main ref={containerRef} className="home background-gr position-relative w-100 vh-100 overflow-hidden d-flex flex-column">
        
        <Navbar />

        {/* Text Layer: Centered and above the bars */}
        <div className="textHomeChocoPebble d-flex justify-content-center align-items-center w-100 h-100 position-absolute top-0 start-0" style={{ zIndex: 10, pointerEvents: 'none',}}>
          <span ref={textRef} className="textSpan fs-3 text-center">Choco-Pebble</span>
        </div>

        {/* Chocolate Animation Container */}
        {/* We use 'd-flex justify-content-center' to ensure bars stay centered */}
        <div className="chocobars position-absolute w-100 h-100 top-0 start-0 d-flex justify-content-center">
          
          <div className="bar1 bars">
            <img style={{height : "100%"}} src={chocobar} className="bar-img1 bar-img" alt="Bar 1" />
          </div>
          <div className="bar2 bars">
            <img style={{height : "100%"}} src={chocobar} className="bar-img2 bar-img" alt="Bar 2" />
          </div>
          <div className="bar3 bars">
            <img style={{height : "100%"}} src={chocobar} className="bar-img3 bar-img" alt="Bar 3" />
          </div>

          {/* Splash Elements */}
          <div className="chocolate-splash-left splash">
            <img src={chocolatesplashleft} className="splash-left img-fluid" alt="Splash Left" />
          </div>
          <div className="chocolate-splash-right splash">
            <img src={chocolatesplashright} className="splash-right img-fluid" alt="Splash Right" />
          </div>

          {/* Chips */}
          <div className="chocochips">
            <img src={chocochip} className="choco-chip1 chippy" alt="chip" />
            <img src={chocochip} className="choco-chip2 chippy" alt="chip" />
            <img src={chocochip} className="choco-chip3 chippy" alt="chip" />
            <img src={chocochip} className="choco-chip4 chippy" alt="chip" />
            <img src={chocochip} className="choco-chip5 chippy" alt="chip" />
          </div>
        </div>

        {/* Button Container: Pushed to bottom */}
        <div className="home-button d-flex justify-content-center align-items-end pb-5 mt-auto position-relative" style={{ zIndex: 20 }}>
          <button 
            onClick={() => {
              if (HR_ref.current) HR_ref.current.scrollIntoView({ behavior: "smooth" });
            }} 
            style={{
              background : "red",
              fontSize : "0.85rem",
              backgroundColor: "#834719",
              color: "#ED9742",
              borderRadius: "0.5em",
            }}
            className="btn d-flex justify-content-between align-items-center gsap-button"
          >
            <span>Scroll Down</span>
            <i className="fa-solid fa-angles-down ms-2"></i>
          </button>
        </div>
      </main>

      <HC HR_ref={HR_ref} />
      <Menu />
      <Buy heading={"Crafted for Chocolate Lovers"} what={"chocolate"} />
      <Buy heading={"Taste the Frozen Delight"} what={"icecream"} />
      <Discript />
      <PageFooter />
    </>
  );
}

export default Home;