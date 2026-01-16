import React, { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import './HC.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

function HC({ HR_ref }) {
  const text = "A World Full _ Chocolate Wonders _ Where every bite feels like _"
    .replaceAll(" ", "^$^")
    .split("^");

  useLayoutEffect(() => {
    if (!HR_ref.current) return;

    const ctx = gsap.context(() => {
      const triggerElement = HR_ref.current;

      // Horizontal Scroll Animation
      gsap.to(".slider-hc", {
        x: "-200vw", // Moves 2 sections to the left (Total 300vw)
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement,
          pin: true,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Split Text Setup
      const split1 = SplitText.create(".First", { type: "words" });
      const split2 = SplitText.create(".Second", { type: "words" });
      const split3 = SplitText.create(".Third", { type: "chars,words" });

      // Element Animations Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 75%",
          end: "+=3500",
          scrub: 1,
        }
      });

      tl.from(".slider-hc", { opacity: 0, duration: 0.2 });
      tl.from(".img1-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".img2-hc", { x: -200, opacity: 0, duration: 0.3 });
      
      // Animate Text Group 1
      tl.from(split1.words, { y: 100, autoAlpha: 0, stagger: 0.05, duration: 0.5 });
      
      tl.from(".img3-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".image-hc-of", { opacity: 0, duration: 0.5 });
      tl.from(".img4-hc", { x: -200, opacity: 0, duration: 0.3 });
      
      // Animate Text Group 2
      tl.from(split2.words, { y: -100, opacity: 0, rotation: "random(-80, 80)", ease: "back", stagger: 0.15 });
      
      tl.from(".img5-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".image-hc-comma", { opacity: 0, height: "5em", duration: 0.5 });
      tl.from(".img6-hc", { x: -200, opacity: 0, duration: 0.3 });
      
      // Animate Text Group 3
      tl.from(split3.chars, { scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back", stagger: 0.02 });
      
      tl.from(".img7-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".image-hc-love", { rotate: -20, scale: 0.8, opacity: 0, y: 100, ease: "bounce.in" });
      tl.from(".img8-hc", { x: -200, opacity: 0, duration: 0.3 });

    }, HR_ref);

    return () => ctx.revert();
  }, [HR_ref]);

  return (
    <>
      <div ref={HR_ref} className="container-hc">
        {/* d-flex align-items-center: Centers content vertically using Bootstrap */}
        <div className="slider-hc d-flex align-items-center">
          
          {/* Images */}
          <img src="/is.svg" className="img1-hc" alt="" />
          <img src="/chocoChip.svg" className="img2-hc" alt="" />
          <img src="/chocoBar.svg" className="img3-hc" alt="" />
          <img src="/chocoaSeed1.svg" className="img4-hc" alt="" />
          <img src="/lightening.svg" className="img5-hc" alt="" />
          <img src="/chocoaSeed2.svg" className="img6-hc" alt="" />
          <img src="/flowers.png" className="img7-hc" alt="" />
          <img src="/chocoaSeed3.svg" className="img8-hc" alt="" />

          {/* Text Section */}
          {/* w-100 justify-content-center: Spaces text evenly across the 300vw */}
          <div className="text-hc d-flex w-100 justify-content-center align-items-center flex-nowrap">
            {text.map((v, i) => {
              if (v === "_") {
                switch (i) {
                  case 6: return <img key={i} className="image-hc-of mx-3" src="/of.svg" alt="of" />;
                  case 12: return <img key={i} className="image-hc-comma mx-2" src="/comma.svg" alt="comma" />;
                  case 24: return <img key={i} className="image-hc-love mx-3" src="/love.svg" alt="love" />;
                  default: return null;
                }
              } else {
                return (
                  <span key={i} className={`text-text-hc ${i <= 6 ? "First" : i <= 12 ? "Second" : "Third"}`}>
                    {v === "$" ? <pre> </pre> : v}
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HC;