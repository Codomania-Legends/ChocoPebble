import React, { useEffect, useRef, useState } from "react";
import "./LS.css"
import { useNavigate } from "react-router-dom";
import "./LS.css";
import LoginSignupBG from "/LoginSignupBG.png";
import logo2 from "/logo2.png";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Welcome from "./Welcome.jsx";
import FadeIn from "../../Animations/FadeIn.jsx";
import StartAnimationLoginSignup from "./StartAnimationLoginSignup.jsx";
import axios from "axios";

gsap.registerPlugin(SplitText)

function Login() {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("")

  const [showWelcome , setShowWelcome] = useState([false , undefined])

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    if (loginUser.trim() === "" || loginPassword.trim() === "" || loginEmail.trim() === "") {
      alert("Please fill in the Details!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        username : loginUser,
        password : loginPassword,
        email : loginEmail
      })
      alert(response.data.msg)
      if( response.data.error ) return
    } catch (error) {
      console.warn(error)
    }
    // After successful validation
    setShowWelcome([true , "/"])
  };

  const containerRef = useRef(null)
  FadeIn(containerRef)
  StartAnimationLoginSignup(containerRef)

  return (
    <>
      { showWelcome[0] ? <Welcome route={showWelcome[1]} /> : null}
      <div ref={containerRef} className="main-div-log flex">
        <img src={LoginSignupBG} alt="background" className="log-bg-img" />

        <section className="login-section flex">
          <section className="sub-head-sec flex">
            <h1>Login</h1>
          </section>

          {/* ✅ only form submit will handle submit */}
          <form className="sub-detail-signup flex" onSubmit={handleSubmitBtn}>
            <div className="login-username flex">
              <span className="span">Username</span>
              <input
                type="text"
                placeholder="Enter Username"
                className="loginusername"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                />
            </div>
            <div className="login-email flex">
              <span className="span">Email</span>
              <input
                type="text"
                placeholder="Enter Email"
                className="loginemail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                />
            </div>

            <div className="login-password flex">
            <span className="span">Password</span>
              <input
                type="password"
                placeholder="Enter Password"
                className="loginpassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <div className="forgotPasswordSignup">
              <div className="forgotPassword">
                Forgot Password{" "}
                <i className="fa-solid fa-question questionMark"></i>
              </div>

              <div className="signup" onClick={() => {
                // navigate("/signup")
                setShowWelcome([true , "/signup"])
              }}>
                Signup
              </div>
            </div>

            <div className="submission flex">
              {/* ✅ removed onClick (no double submit now) */}
              <button className="submitting-login" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="right-sec-image flex">
            <img src={logo2} alt="background" className="logo-img" />
        </section>
      </div>
    </>
  );
}

export default Login;
