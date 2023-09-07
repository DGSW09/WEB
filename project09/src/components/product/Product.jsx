import "./Product.css";
import Back from "../../img/back.png";
import productPicture from "../../img/jetti.svg";

let toggle;

const Product = () => {
  const JoinComplete = () => {
    const BankAccount = document.getElementById("Join");
    if (!toggle) {
      BankAccount.innerText = "참여하기";
      console.log("clicked 참여하기");
      toggle = true;
    } else {
      BankAccount.innerText = "7777023773096 카카오뱅크";
      console.log("clicked 카뱅");
      toggle = false;
    }
  };

  return (
    <div className="ProductInfoWrap">
      <img src={Back} className="back" />
      <div className="WrapTitle">상세페이지</div>
      <div className="productPicture">
        <img src={productPicture} />
      </div>
      <div className="productInfo">
        <div className="productTitle">제티 2박스</div>
        <div className="productPrice">₩ 9,920</div>
        <div className="nPrice">1/N : ₩4,960</div>
        <div className="productLink">
          <a href="#">https://wowjety?-many.com/angrybird/</a>
        </div>
        <div className="nMember">1/10</div>
        <button type="submit" id="Join" onClick={JoinComplete}>
          참여하기
        </button>
      </div>
    </div>
  );
};

export default Product;
