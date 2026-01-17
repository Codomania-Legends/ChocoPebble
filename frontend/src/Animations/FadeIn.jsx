import gsap from 'gsap'
import React, { useEffect } from 'react'

function FadeIn( reference ) {
    if( !reference ) return null
    useEffect( () => {
        const ctx = gsap.context( () => {
            gsap.fromTo( 
                reference.current,
                { opacity : 0 },
                {
                    opacity : 1,
                    ease : "power3.in",
                    duration : 1
                }
            )
        } , reference.current )
        return () => ctx.revert()
    } , [reference.current] )
}

export default FadeIn