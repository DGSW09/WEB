import "../../styles/profile.css";
import Back from "../../img/back.png";
import profile from "../../img/profile.png";
import productImage from "../../img/jetti.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
import { Productcontent } from "./productContent";

// const Productcontent = ({ img, title, price, divprice, member }) => {
//   return (
//     <>
//       <S.Product>
//         {/* <S.ProductImage src={img} /> */}
//         <div className='productTitle'>{title}</div>
//         <div className='productPrice'>{price}</div>
//         <div className='One_In_N'>
//           <div className='productN'>{divprice}</div>
//           <div className='productMember'>{member}</div>
//         </div>
//       </S.Product>
//       <div className='deleteProduct'>
//         <div>
//           <FontAwesomeIcon icon={faPenToSquare} color='#ff000000' />
//           <button> 삭제</button>
//         </div>
//       </div>
//     </>
//   );
// };

const Profile = () => {
  const data = [
    { img: `${productImage}`, title: "제티 2박스", pirce: "₩ 9,920", divprice: "1/N : ₩4,960", member: "1/2" },
    { img: `${productImage}`, title: "제티 2박스", pirce: "₩ 9,920", divprice: "1/N : ₩4,960", member: "1/2" },
  ];

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
        <S.Back src={Back} onClick={BackMain} alt='' />
        <S.PageTitle>내 프로필</S.PageTitle>
      </S.TopNav>
      <S.UserInfo>
        <S.userImage src={profile} alt='' />
        <S.schoolInfo>
          <S.UserName>이윤선</S.UserName>
          <S.UserGradeAndClass>1학년 3반</S.UserGradeAndClass>
          <S.EditProfile onClick={LoadToEditProfile}>프로필 수정</S.EditProfile>
        </S.schoolInfo>
      </S.UserInfo>
      <S.UploadProductTitle>게시한 상품</S.UploadProductTitle>
      <S.UploadProduct>
        {data.map((el) => {
          <Productcontent img={el.img} title={el.title} price={el.pirce} divprice={el.divprice} member={el.member} />;
        })}
      </S.UploadProduct>
    </S.ProfileWrap>
  );
  // <div className='ProfileWrap'>

  // <div className='TopNav'>
  //   <img src={Back} className='back' onClick={BackMain} alt='' />
  //   <div className='PageTitle'>내 프로필</div>
  // </div>
  // <div className='UserInfo'>
  //   <img src={profile} className='userImage' alt='' />
  //   <div className='schoolInfo'>
  //     <div className='UserName'>이윤선</div>
  //     <div className='UserGradeAndClass'>1학년 3반</div>
  //     <button className='EditProfile' onClick={LoadToEditProfile}>
  //       프로필 수정
  //     </button>
  //   </div>
  // </div>
  // <div className='UploadProductTitle'>게시한 상품</div>
  // <div className='UploadProduct'>
  //   {data.map((el) => {
  //     <Productcontent title={el.title} price={el.pirce} divprice={el.divprice} member={el.member} />;
  //   })}
  {
    /* <div className='pd' onClick={LoadToProduct}>
          <img src={productImage} className='productImage' />
          <div className='productTitle'>제티 2박스</div>
          <div className='productPrice'>₩ 9,920</div>
          <div className='One_In_N'>
            <div className='productN'>1/N : ₩4,960</div>
            <div className='productMember'>1/2</div>
          </div>
        </div>
        <div className='deleteProduct'>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} color='#ff000000' />
            <button> 삭제</button>
          </div>
        </div>
        <div className='pd' onClick={LoadToProduct}>
          <img src={productImage} className='productImage' />
          <div className='productTitle'>제티 2박스</div>
          <div className='productPrice'>₩ 9,920</div>
          <div className='One_In_N'>
            <div className='productN'>1/N : ₩4,960</div>
            <div className='productMember'>1/2</div>
          </div>
        </div>
        <div className='deleteProduct'>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} color='#ff000000' />
            <button> 삭제</button>
          </div>
        </div> */
  }
  // </div>
  {
    /*<div className='JoinProductTitle'>참여 중인 상품</div>
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
      </div> */
  }
  // </div>
  // );
};

export default Profile;
