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
      <div className="InputId">
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <button type="submit" onClick={() => alert("중복확인")}> 중복확인 </button>
      </div>
      <div className="InputPw">
        <input type="password" placeholder="비밀번호" />
        <br />
        <input type="password" placeholder="비밀번호 확인" />
      </div>
      <div className="InputEmail">
        <input type="text" placeholder="이메일" /> &nbsp;&nbsp;@&nbsp;&nbsp;
        <select>
          <option value="selec" selected>
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
      <div className="RememberInfo">
        <input type="checkbox" /> 로그인 정보 저장
      </div>
      <div className="ConfirmSignUp">
        <button type="submit">회원가입</button>
      </div>
    </>
  );
};

export default SignUp;
