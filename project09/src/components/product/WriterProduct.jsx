import "../../styles/WriterProduct.css";
import Back from "../../img/back.png";
import productPicture from "../../img/jetti.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const WriterProduct = () => {
  return (
    <div className="ProductInfoWrap">
      <img src={Back} className="back" alt="" />
      <div className="WrapTitle">상세페이지</div>
      <div className="productPicture">
        <img src={productPicture} alt="" />
      </div>
      <div className="productInfo">
        <div className="productTitle">제티 2박스</div>
        <FontAwesomeIcon icon={faPenToSquare} className="editIcon"/>
        <div className="productPrice">₩ 9,920</div>
        <div className="nPrice">1/N : ₩4,960</div>
        <div className="productLink">
          <a href="#">https://wowjety?-many.com/angrybird/</a>
        </div>
        <div className="nMember">1/10</div>
        <button type="submit" id="Join">
          참여하기
        </button>
      </div>
    </div>
  );
};

export default WriterProduct;
