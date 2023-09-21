import React from "react";
import "../../styles/SignUp.css";
// import logo from "../Logo/logo.png";
import logo from "../../img/logo.png";

const Login = () => {
  return (
    <div className="width height">
      <div className="logo">
        <img src={logo} alt="09's logo" className="logo" />
      </div>
      <button className="signupBtn">회원가입</button>
    </div>
  );
};

export default Login;
