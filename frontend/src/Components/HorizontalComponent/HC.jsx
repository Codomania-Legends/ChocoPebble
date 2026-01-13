import React from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useEffect } from 'react';
import gsap from 'gsap';
import './HC.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

function HC({HR_ref}) {
  const text = "A World Full _ Chocolate Wonders _ Where every bite feels like _"
    .replaceAll(" ", "^$^")
    .split("^");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll
      gsap.to(".slider-hc", {
        x: "-200vw",
        ease: "none",
        scrollTrigger: {
          trigger: ".container-hc",
          pin: true,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Split text
      const split1 = SplitText.create(".First", { type: "words" });
      const split2 = SplitText.create(".Second", { type: "words" });
      const split3 = SplitText.create(".Third", { type: "chars,words" });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container-hc",
          start: "top top",
          end: "+=3500",
        }
      });

      tl.from(".slider-hc", { opacity: 0, duration: 0.2 });
      tl.from(".img1-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".img2-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(split1.words, { y: 100, autoAlpha: 0, stagger: 0.05, duration: 0.5 });
      tl.from(".img3-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".image-hc-of", { opacity: 0, duration: 0.5 });
      tl.from(".img4-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(split2.words, { y: -100, opacity: 0, rotation: "random(-80, 80)", ease: "back", stagger: 0.15 });
      tl.from(".img5-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".image-hc-comma", { opacity: 0, height: "5em", duration: 0.5 });
      tl.from(".img6-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".img7-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(split3.chars, { scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back", stagger: 0.02 });
      tl.from(".image-hc-love", { rotate: -20, scale: 0.8, opacity: 0, y: 100, ease: "bounce.in" });
      tl.from(".img8-hc", { x: -200, opacity: 0, duration: 0.3 });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <>
      <div ref={HR_ref} className="container-hc flex">
        <div className="slider-hc flex">
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
          <div className="text-hc flex">
            {text.map((v, i) => {
              if (v === "_") {
                switch (i) {
                  case 6:
                    return <img key={i} className="image-hc-of" src="/of.svg" alt="of" />;
                  case 12:
                    return <img key={i} className="image-hc-comma" src="/comma.svg" alt="comma" />;
                  case 24:
                    return <img key={i} className="image-hc-love" src="/love.svg" alt="love" />;
                  default:
                    return null;
                }
              } else {
                return (
                  <span
                    key={i}
                    className={`text-text-hc shadow ${
                      i <= 6 ? "First" : i <= 12 ? "Second" : "Third"
                    }`}
                  >
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
