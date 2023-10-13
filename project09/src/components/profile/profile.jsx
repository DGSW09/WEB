import "../../styles/profile.css";
import Back from "../../img/back.png";
import profile from "../../img/profile.png";

const Profile = () => {
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
    <div className='ProfileWrap'>
      <div className='TopNav'>
        <img src={Back} className='back' onClick={BackMain} alt='' />
        <div className='PageTitle'>내 프로필</div>
      </div>
      <div className='UserInfo'>
        <img src={profile} className='userImage' alt='' />
        <div className='schoolInfo'>
          <div className='UserName'>이윤선</div>
          <div className='UserGradeAndClass'>1학년 3반</div>
          <button className='EditProfile' onClick={LoadToEditProfile}>
            프로필 수정
          </button>
        </div>
      </div>
      <div className='UploadProductTitle'>올린 상품</div>
      <div className='UploadProduct'>
        <div className='pd' onClick={LoadToProduct}>
          <div className='productTitle'>제티 2박스</div>
          <div className='productPrice'>₩ 9,920</div>
          <div className='productN'>1/N : ₩4,960</div>
        </div>
        <div className='pd' onClick={LoadToProduct}>
          <div className='productTitle'>제티 2박스</div>
          <div className='productPrice'>₩ 9,920</div>
          <div className='productN'>1/N : ₩4,960</div>
        </div>
      </div>
      <div className='JoinProductTitle'>참여 중인 상품</div>
      <div className='JoinProduct'>
        <div className='pd' onClick={LoadToProduct}>
          <div className='productTitle'>제티 2박스</div>
          <div className='productPrice'>₩ 9,920</div>
          <div className='productN'>1/N : ₩4,960</div>
        </div>
        <div className='pd' onClick={LoadToProduct}>
          <div className='productTitle'>제티 2박스</div>
          <div className='productPrice'>₩ 9,920</div>
          <div className='productN'>1/N : ₩4,960</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
