import React from "react";
import "../../styles/SignUp.css";
import logo from "../../img/logo.png";
import styled from "styled-components";
const SignUpWithGoogle = () => {
  window.location.replace("https://account.google.com");
};

const Login = () => {
  return (
    <div className='SignUpWrap'>
      <div className='TopNav'></div>
      <img src={logo} alt="09's logo" className='logo' />
      <button className='signupBtn' onClick={SignUpWithGoogle}>
        회원가입
      </button>
    </div>
  );
};

export default Login;
