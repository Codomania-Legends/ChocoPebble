import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LS.css";
import LoginSignupBG from "/LoginSignupBG.png";
import logo2 from "/logo2.png";

function Login() {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("")

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    if (loginUser.trim() === "" || loginPassword.trim() === "" || loginEmail.trim() === "") {
      alert("Please fill in both Username and Password!");
      return;
    }

    // After successful validation
    navigate("/home");
  };

  return (
    <>
      <div className="main-div-log flex">
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

              <div className="signup" onClick={() => navigate("/")}>
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
