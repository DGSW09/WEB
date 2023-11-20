import "../../styles/profile.css";
import Back from "../../img/back.png";
import profile from "../../img/profile.png";
// import productImage from "../../img/jetti.svg";
import * as S from "./profile.style";
// import { Productcontent } from "./productContent";

const Profile = (data) => {
  const BackMain = () => {
    window.location.replace("/");
  };

  const LoadToEditProfile = () => {
    window.location.replace("/profile/edit");
  };

  const LoadToProduct = () => {
    window.location.replace("/product");
  };

  return (
    <S.ProfileWrap>
      <S.TopNav>
        <S.Back src={Back} onClick={BackMain} alt="" />
        <S.PageTitle>내 프로필</S.PageTitle>
      </S.TopNav>
      <S.UserInfo>
        <S.userImage src={profile} alt="" />
        <S.schoolInfo>
          <S.UserName>이윤선</S.UserName>
          <S.UserGradeAndClass>1학년 3반</S.UserGradeAndClass>
          <S.EditProfile onClick={LoadToEditProfile}>프로필 수정</S.EditProfile>
        </S.schoolInfo>
      </S.UserInfo>
      <S.UploadProductTitle>게시한 상품</S.UploadProductTitle>
      <S.UploadProduct onClick={LoadToProduct}>
        {/* {data.map((key) => (
          <div>
            <div>{key.title}</div>
            <div>{key.price}</div>
            <div></div>
          </div>
        ))} */}
      </S.UploadProduct>
    </S.ProfileWrap>
  );
};

export default Profile;
