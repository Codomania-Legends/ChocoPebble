import gsap from 'gsap'
import React, { useEffect } from 'react'

function FadeIn( reference , long ) {
    if( !reference ) return null
    useEffect( () => {
        const ctx = gsap.context( () => {
            gsap.fromTo( 
                reference.current,
                { opacity : 0, background : "#fff" },
                {
                    opacity : 1,
                    ease : "power3.in",
                    duration : (long) ? 1.5 : 1,
                    background : "#D6C0B3"
                }
            )
        } , reference.current )
        return () => ctx.revert()
    } , [] )
}

export default FadeIn