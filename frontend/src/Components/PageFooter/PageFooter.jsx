import React from 'react'
import "./PageFooter.css"
import splash from "/footerSplash.png"
import facebook from "/facebook.png"
import instagram from "/instagram.png"
import twitter from "/twitter.png"
import linkedinlogo from "/linkedin-logo.png"
import github from "/github.png"
import google from "/google.png"
function PageFooter() {
  return (
    <div className='page-footer flex'>
        <img src={splash} className="splashing" />
        <div className="web-name flex">
          <div className="extra-info flex">
            <div className="extra-head">
              <h1>Choco-Pebble</h1>
            </div>
            <div className="extra-info-span">
              <span>Indulge in a world of handcrafted chocolates and creamy ice creams, all under one delicious roof.</span>
            </div>
            <div className="website-icons flex">
              <div className="facebook icon-ka-baksa">
                <img src={facebook} className='facebook icon' />
              </div>
              <div className="instagram icon-ka-baksa">
                <img src={instagram} className='instagram icon' />
              </div>
              <div className="twitter icon-ka-baksa" >
                <img src={twitter} className='twitter icon' />
              </div>
              <div className="linkedin icon-ka-baksa">
                <img src={linkedinlogo} className='linkedinlogo icon' />
              </div>
              <div className="github icon-ka-baksa"> 
                <img src={github} className='github icon' />
              </div>
              <div className="google icon-ka-baksa"> 
                <img src={google} className='google icon' />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-support flex">
          <div className="naming-section flex">
            <div className="copyright flex">
              <span>@CopyRight By Anshul and Vidhi </span>
            </div>
            <div className="anshul flex">
              <span>@Anshul_Vishwakarma</span>
            </div>
            <div className="vidhi flex">
              <span>@Vidhi_Agrawal</span>
            </div>
          </div>
          <div className="policy-section flex">
            <div className="privacy flex">
              <span>Privacy Policy</span>
            </div>
            <div className="termsandcondition flex">
              <span>Terms and Conditions </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageFooter