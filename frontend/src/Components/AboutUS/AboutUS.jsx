import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import MainContentAboutUs from './MainContentAboutUs.jsx'
import layer from "./Vector.svg"
import "../../index.css"

function AboutUS() {
  return (
    <>
    <main className="main-aboutus">
        <div className="layer-aboutus">
            <img src={layer} className='image-layer-aboutus' />
        </div>
        <Navbar aboutus={true} />
        <MainContentAboutUs />
    </main>
    </>
  )
}

export default AboutUS
