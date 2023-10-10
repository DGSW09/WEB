import React from "react";
import "../../styles/SignUp.css";
import logo from "../../img/logo.png";

const SignUpWithGoogle = () => {
  window.location.replace("https://account.google.com");
};

const Login = () => {
  return (
    <div className="width">
      <img src={logo} alt="09's logo" className="logo" />
      <button className="signupBtn" onClick={SignUpWithGoogle}>
        회원가입
      </button>
    </div>
  );
};

export default Login;
