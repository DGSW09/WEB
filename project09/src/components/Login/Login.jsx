import { useState } from "react";
// import logo from "../Logo/logo.png";
import logo from "../../img/logo.png";
import "../../styles/Login.css";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Grade, setGrade] = useState("");
  const [Class, setClass] = useState("");
  return (
    <>
      <div className="width">
        <div className="logo">
          <img src={logo} alt="09's logo" />
          {/* gonggu */}
        </div>
        <form method="get">
          <div className="InputName">
            <input
              type="text"
              placeholder="     Your Name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
              maxLength="4"
            />
          </div>
          <div className="InputGrade">
            <input
              type="number"
              placeholder="     Your Grade"
              onChange={(e) => setGrade(e.target.value)}
              value={Grade}
              maxLength="1"
              min="1"
            />
          </div>
          <div className="InputClass">
            <input
              type="number"
              placeholder="     Your Class"
              onChange={(e) => setClass(e.target.value)}
              value={Class}
              maxLength="2"
              min="1"
            />
          </div>
          <div className="start">
            <button type="submit" onClick={() => alert("회원가입")}>
              시작하기!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;
