import UserProfile from "../../img/profile.png";
import "../../styles/EditUser.css";
const EditUser = () => {
  return (
    <div className="EditUserWrap">
      <div className="UserPicture">
        <img src={UserProfile} className="userImage" />
        <button type="button" className="chagneImage">
          사진 변경
        </button>
      </div>
      <div className="EditInfo">
        <input type="text" placeholder="이름입력" />
        <input type="text" placeholder="학년입력" />
        <input type="text" placeholder="학반입력" />
        <button type="submit">저장</button>
      </div>
    </div>
  );
};

export default EditUser;
