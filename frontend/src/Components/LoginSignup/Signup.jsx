import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LS.css";
import LoginSignupBG from "/LoginSignupBG.png";
import logo2 from "/logo2.png";
import FadeIn from "../../Animations/FadeIn.jsx";
import StartAnimationLoginSignup from "./StartAnimationLoginSignup.jsx";
import WelcomeAnimation from "./Welcome.jsx";
import { CheckEmail, CheckPass, CheckUser } from "../../Services/Filter.js";
import axios from 'axios'

function Signup() {
  const navigate = useNavigate()

  const[signupUser, setsignupUser] = useState("")
  const [signupPass, setsignupPass] = useState("");
  const [signupEmail, setSignupEmail] = useState("")

  const [showWelcome , setShowWelcome] = useState([false , undefined])

  const currRef = useRef(null)

  FadeIn(currRef)

  StartAnimationLoginSignup(currRef)
  
  const handleSubmitBtn = async(e) => {
    e.preventDefault();

    if (signupUser.trim() === "" || signupPass.trim() === "" || signupEmail.trim() === "") {
      alert("Please fill details");
      return;
    }
    if( !CheckEmail(signupEmail) ) return;
    if( !CheckPass(signupPass) ) return;
    if( !CheckUser(signupUser) ) return;
    try {
      const response = await axios.post("http://localhost:5000/user/signup", {
        username : signupUser ,
        email : signupEmail,
        password : signupPass,
      })
      console.log(response)
    } catch (error) {
      console.warn(error)
    }
    setShowWelcome([true , "/"])
  };

    
  return (
    <>
      { showWelcome[0] ? <WelcomeAnimation route={showWelcome[1]} /> : null}
        <div ref={currRef} className="main-div-log flex">
            <img src={LoginSignupBG} alt="background" className="log-bg-img" />
            <section className="signup-section flex">
              <section className="sub-head-sec flex">
                <h1>Sign up</h1>
              </section>
              <form className="sub-detail-signup flex" onSubmit={handleSubmitBtn}>
                <div className="sign-username flex">
                  <span className="span">Username</span>
                  <input type="text" 
                  placeholder="Enter Username" 
                  className="signusername"
                  value={signupUser}
                  onChange={(e) => setsignupUser(e.target.value)}  />
                </div>
                <div className="sign-email flex">
                  <span className="span">Email</span>
                  <input type="text" 
                  placeholder="Enter Email" 
                  className="signemail"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}  />
                </div>
                <div className="sign-password flex">
                  <span className="span">Password</span>
                  <input type="password" 
                  placeholder="Enter Password" 
                  className="signpassword"
                  value={signupPass}
                  onChange={(e) => setsignupPass(e.target.value)} />
                </div>
                <div className="forgotPasswordSignup">
                  <div className="forgotPassword">Already a User <i class="fa-solid fa-question questionMark"></i></div>
                  <div className="signup" onClick={() => navigate("/login")}>Login</div>
                </div>
                <div className="submission flex">
                  <button className="submitting-sign" type="submit" onClick={handleSubmitBtn}>Submit</button>
                </div>
                
              </form>
            </section>
            <section className="right-sec-image flex">
              <img src={logo2} alt="background" className="logo-img" />
            </section>
        </div>
    </>
  )
}

export default Signup