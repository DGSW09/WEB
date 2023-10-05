import React from "react";
import "../../styles/SignUp.css";
import logo from "../../img/logo.png";

const Login = () => {
  return (
    <div className="width">
      <img src={logo} alt="09's logo" className="logo" />
      <button className="signupBtn">회원가입</button>
    </div>
  );
};

export default Login;
