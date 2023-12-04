import "../../../styles/profile.css";
import Back from "../../../img/back.png";
import profile from "../../../img/profile.png";
import { useNavigate } from "react-router";
import * as S from "./profile.style";
import "./ProductData";
// import { Productcontent } from "./productContent";

const Profile = ({ productData }) => {
  const navigator = useNavigate();
  const BackMain = () => {
    navigator("/");
  };

  const LoadToEditProfile = () => {
    window.location.replace("/profile/edit");
  };

  const LoadToProduct = () => {
    navigator("/proudct");
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
        {productData.map((key) => (
          <div>
            <img src={key.img} />
            <div>{key.title}</div>
            <div>{key.price}</div>
            <div>{key.divprice}</div>
            <div>{key.member}</div>
          </div>
        ))}
      </S.UploadProduct>
    </S.ProfileWrap>
  );
};

export default Profile;
