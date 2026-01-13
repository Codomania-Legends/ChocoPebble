import React, { useLayoutEffect } from 'react'; // Changed to useLayoutEffect
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import './HC.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

function HC({ HR_ref }) {
  // Logic to prepare text strings
  const text = "A World Full _ Chocolate Wonders _ Where every bite feels like _"
    .replaceAll(" ", "^$^")
    .split("^");

  useLayoutEffect(() => { // 1. Use useLayoutEffect prevents layout thrashing
    
    // Safety check to ensure ref exists before animating
    if (!HR_ref.current) return;

    const ctx = gsap.context(() => {
      
      // 2. Use the REF (HR_ref.current) as the trigger, not the class name
      // This ensures we target THIS specific component instance
      const triggerElement = HR_ref.current;

      // Horizontal Scroll
      gsap.to(".slider-hc", {
        x: "-200vw", // Ensure your CSS width supports this
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement, // Using Ref
          pin: true,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculates on resize
        }
      });

      // Split text (Scoped automatically by gsap.context)
      const split1 = SplitText.create(".First", { type: "words" });
      const split2 = SplitText.create(".Second", { type: "words" });
      const split3 = SplitText.create(".Third", { type: "chars,words" });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement, // Using Ref
          start: "top 75%",
          end: "+=3500",
          scrub: 1, // Add scrub here if you want these animations to sync with scroll
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
      tl.from(split3.chars, { scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back", stagger: 0.02 });
      tl.from(".img7-hc", { x: -200, opacity: 0, duration: 0.3 });
      tl.from(".image-hc-love", { rotate: -20, scale: 0.8, opacity: 0, y: 100, ease: "bounce.in" });
      tl.from(".img8-hc", { x: -200, opacity: 0, duration: 0.3 });

    }, HR_ref); // Scope the context to the Ref

    return () => {
      ctx.revert(); // This cleans up SplitText, Tweens, and Pins
      // 3. Removed globalTimeline.clear() - it was too aggressive
    };
  }, [HR_ref]);

  return (
    <>
      {/* Ensure HR_ref is attached here */}
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
