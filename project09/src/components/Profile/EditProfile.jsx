import UserProfile from "../../img/profile.png";
import Back from "../../img/back.png";
import "../../styles/EditProfile.css";
import { useEffect, useRef, useState } from "react";

const DummyUser = {
  UserName: "전민찬",
  UserGrade: 1,
  UserClass: 3,
};

const EditProfile = () => {
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

    // console.log(file);
  };

  const HandleName = (e) => {
    setName(e.target.value);
    if (Name.length === 2) {
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
    if (
      Name === DummyUser.UserName &&
      Grade === DummyUser.UserGrade &&
      Class === DummyUser.UserClass
    ) {
      alert("현재의 프로필과 정보가 같습니다.");
    } else {
      alert("정보가 성공적으로 변경되었습니다.");
      window.location.replace("/profile");
    }
  };

  return (
    <div className="EditProfileWrap">
      <div className="PageInfo">
        <img src={Back} className="back" onClick={BackMain} alt="" />
        <div className="PageTitle">프로필 수정</div>
      </div>
      <div className="UserPicture">
        <img src={selectedImage} className="userImage" alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          ref={selectFile}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="changeImage"
          onClick={() => selectFile.current.click()}
        >
          사진 변경
        </button>
      </div>
      <div className="EditInfo">
        <input
          type="text"
          placeholder="이름입력"
          onChange={HandleName}
          onKeyPress={HandleInputChange}
          value={Name}
          className="EditName"
        />
        <div className="ErrorMessageWrap">
          {!NameValid && <div>이름을 정확히 입력해주십시오.</div>}
        </div>
        <input
          type="text"
          placeholder="학년입력"
          onChange={HandleGrade}
          value={Grade}
          className="EditGrade"
        />
        <div className="ErrorMessageWrap">
          {!GradeValid && <div>학년 정보를 정확히 입력해주십시오.</div>}
        </div>
        <input
          type="text"
          placeholder="학반입력"
          onChange={HandleClass}
          value={Class}
          className="EditClass"
        />
        <div className="ErrorMessageWrap">
          {!ClassValid && <div>반 정보를 정확히 입력해주십시오.</div>}
        </div>
        <button
          type="submit"
          onClick={onClickConfirmButton}
          disabled={NotAllow}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
