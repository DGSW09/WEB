import UserProfile from "../../../img/profile.png";
import Back from "../../../img/back.png";
import "../../../styles/MoreInfoSignUp.css";
import { useEffect, useRef, useState } from "react";

const MoreInfoSignUp = () => {
  const BackMain = () => {
    window.location.replace("/");
  };

  const [Name, setName] = useState("");
  const [Grade, setGrade] = useState("");
  const [Class, setClass] = useState("");

  const [NameValid, setNameValid] = useState(false);
  const [GradeValid, setGradeValid] = useState(false);
  const [ClassValid, setClassValid] = useState(false);
  const [NotAllow, setNotAllow] = useState(true);

  const selectFile = useRef(null);
  const [selectedImage, setSeletedImage] = useState(UserProfile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSeletedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const HandleName = (e) => {
    setName(e.target.value);
    if (Name.length >= 2) {
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
      newGrade = parseInt(inputValue, 10) || 0;
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
      newClass = parseInt(inputValue, 10) || 0;
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
    return charCode >= 44032 && charCode <= 55300;
  };

  useEffect(() => {
    if (NameValid && GradeValid && ClassValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [NameValid, GradeValid, ClassValid]);

  const onClickConfirmButton = () => {
    const InputName = document.getElementById("EditName");
    const InputGrade = document.getElementById("EditGrade");
    const InputClass = document.getElementById("EditClass");

    if (!NameValid && !GradeValid && !ClassValid) {
      alert("정보를 정확히 입력해주십시오.");
      InputName.value = null;
      InputGrade.value = null;
      InputClass.value = null;
    } else {
      alert("정보 입펵 완료");
      window.location.replace("/login");
    }
  };

  return (
    <div className="EditProfileWrap">
      <div className="TopNav">
        <img src={Back} className="back" onClick={BackMain} alt="" />
        <div className="PageTitle">추가 정보</div>
      </div>
      <div className="Edit">
        <div className="UserPicture">
          <img src={selectedImage} className="userImage" alt="" />
          <input
            type="file"
            style={{ display: "none", borderRadius: "10px" }}
            ref={selectFile}
            onChange={handleImageChange}
            className="changedImage"
          />
          <button type="button" className="changeImage" onClick={() => selectFile.current.click()}>
            사진 추가
          </button>
        </div>
        <div className="EditInfo">
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={HandleName}
            onKeyPress={HandleInputChange}
            value={Name}
            className="EditName"
            id="EditName"
          />
          <div className="ErrorMessageWrap">{!NameValid && <div>이름을 정확히 입력해주십시오.</div>}</div>
          <input
            type="text"
            placeholder="학년을 입력해주세요"
            onChange={HandleGrade}
            value={Grade}
            className="EditGrade"
            id="EditGrade"
          />
          <div className="ErrorMessageWrap">{!GradeValid && <div>학년 정보를 정확히 입력해주십시오.</div>}</div>
          <input
            type="text"
            placeholder="학반을 입력해주세요"
            onChange={HandleClass}
            value={Class}
            className="EditClass"
            id="EditClass"
          />
          <div className="ErrorMessageWrap">{!ClassValid && <div>반 정보를 정확히 입력해주십시오.</div>}</div>
          <button type="submit" onClick={onClickConfirmButton} disabled={NotAllow}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoSignUp;
