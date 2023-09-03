import { useState } from "react";
import MainLogo from "../logo.svg";
import "./SignUp.css";

const SignUp = () => {
  const [id, setId] = useState("");

  return (
    <>
      <div className="logo">
        <img src={MainLogo} alt="09's logo" />
      </div>
      <form method="get">
        <div className="InputId">
          <input
            type="text"
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
            value={id}
            maxLength="8"
          />
          <button type="submit" onClick={() => alert("중복확인")}>
            {" "}
            중복확인{" "}
          </button>
        </div>
      </form>
      <form method="post">
        <div className="InputPw">
          <input type="password" placeholder="비밀번호" maxLength="12" />
          <br />
          <input type="password" placeholder="비밀번호 확인" maxLength="12" />
        </div>
        <div className="InputEmail">
          <input type="text" placeholder="이메일" /> &nbsp;&nbsp; @ &nbsp;&nbsp;
          <select id="domain-list">
            <option value="default" selected>
              선택
            </option>
            <option value="naver">naver.com</option>
            <option value="gmail">gmail.com</option>
            <option value="hanmail">hanmail.com</option>
          </select>
        </div>
        <div className="InputPhoneNumber">
          <input type="text" placeholder="휴대폰 번호" />
          <button type="submit">인증번호 받기</button>
        </div>
        <div className="ConfirmSignUp">
          <button type="submit" onClick={() => alert("회원가입")}>
            회원가입
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
