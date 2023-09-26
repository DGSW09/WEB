import { useState } from "react";
import logo from "../../img/logo.png";
import "../../styles/Login.css";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Grade, setGrade] = useState("");
  const [Class, setClass] = useState("");

  return (
    <div className="LoginWrap">
      <div className="logo">
        <img src={logo} alt="09's logo" />
      </div>
      <form method="get" className="InputWrap">
        <input
          type="text"
          placeholder="이름을 입력하세요."
          onChange={(e) => setName(e.target.value)}
          value={Name}
          maxLength="4"
          className="InputName"
        />
        <input
          type="number"
          placeholder="학년을 입력하세요"
          onChange={(e) => setGrade(e.target.value)}
          value={Grade}
          min="1"
          className="InputGrade"
        />
        <input
          type="number"
          placeholder="학반을 입력하세요"
          onChange={(e) => setClass(e.target.value)}
          value={Class}
          max="99"
          min="1"
          className="InputClass"
        />
        <div>
          <button
            type="submit"
            onClick={() => alert("회원가입")}
            className="start"
          >
            시작하기!
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
