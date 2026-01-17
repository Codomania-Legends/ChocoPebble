import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useNavigate } from "react-router-dom";

// 🔌 Register the plugin
gsap.registerPlugin(SplitText);

const WelcomeAnimation = ({route}) => {
  const containerRef = useRef(null);
    const navigate = useNavigate()

  useEffect(() => {
    if( !route ) return null

    let ctx = gsap.context(() => {
      
      const split = new SplitText(".welcome-text", { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        
        x: () => gsap.utils.random(-100, 100), 
        y: () => gsap.utils.random(-100, 100),
        
        rotation: () => gsap.utils.random(-360, 360), 
        
        stagger: 0.05,
        duration: 1.5,
        ease: "back.out(1.7)", // "Back" ease makes it shoot past slightly then settle
      });

      gsap.to( split.chars , {
        opacity : 0,
        stagger : 0.02,
        delay : 3,
        ease : "bounce.out",
        onComplete :    gsap.to( ".welcomePage" , {
                            opacity : 0,
                            delay : 4,
                            ease : "circ.out",
                            onComplete : () => navigate(route)
                        } )
      } )

    }, containerRef); // 🔍 Scope

    return () => ctx.revert(); 
    
  }, [route]); 

  return (
    <div ref={containerRef} className="welcomePage">
      <h1 className="welcome-text">Welcome Chocolate Lover 🍫</h1>
    </div>
  );
};

export default WelcomeAnimation;