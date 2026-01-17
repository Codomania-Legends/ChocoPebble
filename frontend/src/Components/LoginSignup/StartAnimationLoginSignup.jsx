import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
import React, { useEffect } from 'react'

gsap.registerPlugin(SplitText)
function StartAnimationLoginSignup({ref}) {
    useEffect(() => {
        const ctx = gsap.context(() => {

            const split = new SplitText("h1", { type: "chars" });

            // Text Animation
            gsap.from(
                split.chars,{
                y: -100,
                opacity: 0,
                delay : 1,
                rotation: "random(-80, 80)",
                duration: 0.7, 
                ease: "back",
                stagger: 0.15,
                }
            );
            gsap.fromTo(
                split.chars,
                {
                    x: 0,
                    delay : 2
                },
                {
                    delay : 2,
                    x: -5,
                    yoyo: true,
                    repeat: -1,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "bounce.inOut",
                }
            )
    
            gsap.from( "input" , {opacity : 0 , width : 0 , duration : 2} )
            gsap.from( ".signup" , {opacity : 0 , y : -50 , delay : 1.5 , duration : 1,ease:"power3.in"} )
            gsap.from( ".forgotPassword" , {opacity : 0 , y : -50 , delay : 1.5 , duration : 1,ease:"power3.in"} )
            gsap.fromTo( 
                ".submitting-sign" , 
                { opacity : 0 , y : -25 },
                { opacity : 1 , y : 0, delay : 1.7 , duration : 0.5,ease:"power3.in" }
            )
            gsap.fromTo( 
                ".submitting-login" , 
                { opacity : 0 , y : -25 },
                { opacity : 1 , y : 0, delay : 1.7 , duration : 0.5,ease:"power3.in" }
            )
            gsap.from( ".span" , {y : 50,duration : 0.5,delay:1.5,opacity:0} )
            gsap.from( ".logo-img" , {
                x : 500,
                y : 200,
                rotate : 720,
                duration : 5,
                scale : 0.5,
                opacity : 0,
                ease : "bounce.inOut"
            } )
        
        }, ref);

        return () => ctx.revert();
    }, [ref]);
}

export default StartAnimationLoginSignup