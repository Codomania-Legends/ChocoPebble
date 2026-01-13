 import React, { useEffect } from 'react'
import BackgroundStart from '../../Animations/background'
import Door from '../../Animations/Door'
import "./Menu.css"
import doorleft from "/dooleft.png"
import doorright from "/doorright.png"
import aamchi from "/aamchi_mango.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
function Menu() {
  useEffect( () => {
    gsap.to( ".menu-high" , {
      scrollTrigger : {
        trigger : ".menu-high",
        snap: {
          snapTo: 1 / 2, 
          duration: 0.3,
          ease: "power1.inOut"
        }
      }
    } )
      BackgroundStart(".background-gr")
      Door()
      gsap.to(".chocolateDrop", {
        height: "75%",
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".menu-high",
          start: "top bottom", // when .menu-high top enters viewport bottom
          end: "bottom top",   // when .menu-high bottom leaves viewport top
          toggleActions: "play reverse play reverse",
        }
      })
  }, [] )
  return (
    <div className='menu-high flex'>
      <div className="mainBuyChocolateDiv background-gr flex">
      <h1 className='heading-menu'>Menu Highlights</h1>
        <img src='/chocolateDrop.png' className='chocolateDrop' />
      </div>
      <div className="menu-boxes flex">

        <div className="menuBox1 baksa flex">

          <div className="menu-content-box1 flex">
            <div className="aamchi-img flex">
              <img src={aamchi} alt="" className="aamchi-mango-img" />
            </div>
            <div className="content-describe flex">
              <div className="content-name flex"><h3>Aamchi Mango Ice Cream</h3></div>
              <div className="content-msg flex"><span>a refreshing mango-flavored ice cream packed in a vibrant, colorful box.</span></div>
              <div className="price-name-gm flex">
                <div className="gm-name flex">
                  <div className="namingg flex"><span>Hocco</span></div>
                  <div className="gm flex"><span>120Gm</span></div>
                </div>
                <div className="price flex"><span>₹150</span></div>
              </div>
            </div>
          </div>

          <img src={doorleft}  className='doorleft1 door' />
          <img src={doorright} className='doorright1 door' />
        </div>
        <div className="menuBox2 baksa">

          <div className="menu-content-box1 flex">
            <div className="aamchi-img flex">
              <img src={aamchi} alt="" className="aamchi-mango-img" />
            </div>
            <div className="content-describe flex">
              <div className="content-name flex"><h3>Aamchi Mango Ice Cream</h3></div>
              <div className="content-msg flex"><span>a refreshing mango-flavored ice cream packed in a vibrant, colorful box.</span></div>
              <div className="price-name-gm flex">
                <div className="gm-name flex">
                  <div className="namingg flex"><span>Hocco</span></div>
                  <div className="gm flex"><span>120Gm</span></div>
                </div>
                <div className="price flex"><span>₹150</span></div>
              </div>
            </div>
          </div>

          <img src={doorleft}  className='doorleft2 door' />
          <img src={doorright} className='doorright2 door' />

        </div>
        <div className="menuBox3 baksa">
          
          <div className="menu-content-box1 flex">
            <div className="aamchi-img flex">
              <img src={aamchi} alt="" className="aamchi-mango-img" />
            </div>
            <div className="content-describe flex">
              <div className="content-name flex"><h3>Aamchi Mango Ice Cream</h3></div>
              <div className="content-msg flex"><span>a refreshing mango-flavored ice cream packed in a vibrant, colorful box.</span></div>
              <div className="price-name-gm flex">
                <div className="gm-name flex">
                  <div className="namingg flex"><span>Hocco</span></div>
                  <div className="gm flex"><span>120Gm</span></div>
                </div>
                <div className="price flex"><span>₹150</span></div>
              </div>
            </div>
          </div>

          <img src={doorleft}  className='doorleft3 door' />
          <img src={doorright} className='doorright3 door' />

        </div>
      </div>
    </div>
  )
}

export default Menu
