import React from 'react'
import "./Discript.css"
import chocoainfo from "/chocoaInfo.png"
import chocoadust from "/chocoaDust.png"
function Discript() {
  return (
    <div className="describe-box flex">
        <div className="describe-img-box flex">
            <img src={chocoainfo} className='chocoainfo' />
            <img src={chocoadust} className='chocoadust'/>
        </div>
        <div className="describe-text-box flex">
            <div className="heading flex">
                <h1>Crafted with Love, Designed for Delight</h1>
            </div>
            <div className="downspan flex">
                <span>Hey there! 👋 I'm a passionate creator 🎨 with a love for all things sweet 🍭 and indulgent 🍫. I started Choco-Pebble to turn my chocolate fantasies 💭 into reality — blending creativity ✨, flavor 😋, and fun 🎉 into every product. Whether it's designing the perfect dessert 🍨 or crafting an unforgettable chocolate treat 🍬, I put my heart ❤️ into every detail. This isn't just a website 🌐 — it's a piece of who I am 💖.</span>

            </div>
            
        </div>
    </div>
  )
}

export default Discript