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

gsap.registerPlugin(SplitText);

function Home() {
  const textRef = useRef();
  const HR_ref = useRef()

  useEffect(() => {
    const timeLine = gsap.timeline()
    BackgroundStart('.background-gr' , timeLine);
    Chocobar(timeLine);

    // Split the text into characters
    const split = SplitText.create(textRef.current, { type: 'chars' });

    // // Animate each character
    gsap.set(split.chars, {
      x: () => Math.random() * 300 - 150,
      y: () => Math.random() * 200 - 100,
      rotation: () => Math.random() * 720 - 360,
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
      delay : 3
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".gsap-button",
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, delay: 4 }
    );
  }, []);

  return (
    <>
      <main className="home background-gr flex">
        <Navbar />
        <div className="textHomeChocoPebble flex">
          <span ref={textRef} className="textSpan">Choco-Pebble</span>
        </div>

        <div className="chocobars flex">
          <div className="bar1 bars">
            <img src={chocobar} className="bar-img1 bar-img" />
          </div>
          <div className="bar2 bars">
            <img src={chocobar} className="bar-img2 bar-img" />
          </div>
          <div className="bar3 bars">
            <img src={chocobar} className="bar-img3 bar-img" />
          </div>

          {/* splash */}
          <div className="chocolate-splash-left splash">
            <img src={chocolatesplashleft} className="splash-left" />
          </div>
          <div className="chocolate-splash-right splash">
            <img src={chocolatesplashright} className="splash-right" />
          </div>

          {/* chocochip */}
          <div className="chocochips">
            <img src={chocochip} className="choco-chip1 chippy" />
            <img src={chocochip} className="choco-chip2 chippy" />
            <img src={chocochip} className="choco-chip3 chippy" />
            <img src={chocochip} className="choco-chip4 chippy" />
            <img src={chocochip} className="choco-chip5 chippy" />
          </div>
        </div>

        <div className="home-button flex">
          <button onClick={() => {
            if(HR_ref.current){
              HR_ref.current.scrollIntoView({behavior:"smooth"})
            }
          }} className="btn flex gsap-button">
            Scroll Down
            <i class="fa-solid fa-angles-down"></i>
          </button>
        </div>
      </main>

      <HC HR_ref={HR_ref} />
      <Menu />
      <Buy heading={"Crafted for Chocolate Lovers"} what={"chocolate"} />
      <Buy heading={"Taste the Frozen Delight"} what={"icecream"} />
      <Discript/>
      <PageFooter/>
    </>
  );
}

export default Home;
