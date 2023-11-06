import logo from "../../img/logo.png";
import { useState, useEffect } from "react";
import "../../styles/Login.css";
// import * as H from "../Hooks/Login.Hooks";
const DummyUser = {
  UserName: "전민찬",
  UserGrade: 1,
  UserClass: 3,
};

const Login = () => {
  const [Name, setName] = useState("");
  const [Grade, setGrade] = useState("");
  const [Class, setClass] = useState("");

  const [NameValid, setNameValid] = useState(false);
  const [GradeValid, setGradeValid] = useState(false);
  const [ClassValid, setClassValid] = useState(false);
  const [NotAllow, setNotAllow] = useState(true);

  const HandleName = (e) => {
    setName(e.target.value);
    if (Name.length === 3) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const HandleGrade = (e) => {
    const inputValue = e.target.value;
    let newGrade;

    if (inputValue === "") {
      newGrade = "";
    } else {
      newGrade = parseInt(inputValue, 10) || "";
    }

    setGrade(newGrade);

    if (newGrade >= 1 && newGrade <= 3) {
      setGradeValid(true);
    } else {
      setGradeValid(false);
    }
  };

  const HandleClass = (e) => {
    const inputValue = e.target.value;
    let newClass;

    if (inputValue === "") {
      newClass = "";
    } else {
      newClass = parseInt(inputValue, 10) || "";
    }

    setClass(newClass);

    if (newClass >= 1 && newClass <= 15) {
      setClassValid(true);
    } else {
      setClassValid(false);
    }
  };

  const HandleInputChange = (e) => {
    const inputChar = e.key;
    const isKorean = isKoreanChar(inputChar);

    if (!isKorean) {
      e.preventDefault();
    }
  };

  const isKoreanChar = (char) => {
    const charCode = char.charCodeAt(0);
    return charCode >= 44032 && charCode <= 55203;
  };

  useEffect(() => {
    if (NameValid && GradeValid && ClassValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [NameValid, GradeValid, ClassValid]);

  const ConfirmLogin = () => {
    const NameInfo = document.getElementById("name");
    const GradeInfo = document.getElementById("grade");
    const ClassInfo = document.getElementById("class");
    if (Name === DummyUser.UserName && Grade === DummyUser.UserGrade && Class === DummyUser.UserClass) {
      alert("로그인 성공");
      window.location.replace("/");
    } else {
      NameInfo.value = null;
      GradeInfo.value = null;
      ClassInfo.value = null;
      alert("등록된 회원 정보가 없습니다.\n회원정보를 다시 확인하여 주십시오.");
    }
  };

  return (
    <div className="LoginWrap">
      <div className="TopNav"></div>
      <h1 className="title">GONGGU</h1>
      <div className="LoginInputWrap">
        <input
          type="text"
          placeholder="이름을 입력하세요."
          onChange={HandleName}
          onKeyPress={HandleInputChange}
          value={Name}
          className="InputName"
          id="name"
        />
        <div className="ErrorMessageWrap">
          {!NameValid && Name.length < 3 && <div>이름을 정확히 입력해주십시오.</div>}
        </div>
        <input
          type="text"
          placeholder="학년을 입력하세요"
          onChange={HandleGrade}
          value={Grade}
          className="InputGrade"
          id="grade"
        />
        <div className="ErrorMessageWrap">{!GradeValid && <div>학년 정보를 정확히 입력해주십시오.</div>}</div>
        {/*  */}
        <input
          type="text"
          placeholder="학반을 입력하세요"
          onChange={HandleClass}
          value={Class}
          className="InputClass"
          id="class"
        />
        <div className="ErrorMessageWrap">{!ClassValid && <div>반 정보를 정확히 입력해주십시오.</div>}</div>
        <div>
          <button type="submit" onClick={ConfirmLogin} disabled={NotAllow} className="start">
            시작하기!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
