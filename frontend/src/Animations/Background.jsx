import React from 'react'
import gsap from "gsap"

export default function BackgroundStart( target , timeLine ){
    timeLine ?? gsap.to( target , {
        "--p" : "#fff",
        ease : "power.in",
        duration : 1
    } )
}
