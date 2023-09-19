import React from "react";
import "../../styles/profile.css";
import logo from "../Logo/logo.png";

const Login = () => {
  return (
    <>
      <div className="width height">
        <div className="logo">
          <img src={logo} alt="09's logo" />
        </div>
        <button className="signup">회원가입</button>
      </div>
    </>
  );
};

export default Login;
