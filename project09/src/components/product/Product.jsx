import "../../styles/Product.css";
import Back from "../../img/back.png";
import ProductImage from "../../img/jetti.svg";
import { Children } from "react";
let toggle;
const Product = () => {
  const JoinComplete = () => {
    const BankAccount = document.getElementById("Join");
    if (toggle) {
      BankAccount.innerText = "참여하기";
      toggle = false;
    } else {
      BankAccount.innerText = "7777023773096 카카오뱅크";
      toggle = true;
    }
  };

  const BackMain = () => {
    window.location.replace("/");
  };

  const handleLinkTab = async () => {
    let content = document.getElementById("Link").innerText;
    try {
      await navigator.clipboard.writeText(content);
      alert("클립보드에 링크가 복사되었습니다.");
      window.open();
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <div className="ProdcutWrap">
      <div className="PageInfo">
        <img src={Back} className="back" onClick={BackMain} />
        <div className="PageTitle">상세페이지</div>
      </div>
      <div className="ProductInfo">
        <img src={ProductImage} className="productImage" />
        <div className="ProductInfo2">
          <div className="ProductTitle">제티 2박스</div>
          <div>
            <a
              className="ProductLink"
              onClick={() => {
                handleLinkTab(Children);
              }}
              id="Link"
            >
              https://wowjety?-many.com/angrybird/
            </a>
          </div>
          <div className="ProductPrice">₩ 9,920</div>
          <div className="nProductPrice">1/N : ₩ 4,960</div>
          <div className="ProductContent">
            아침에 먹는 우유 같이 제티 타서 먹을 사람....................
          </div>
          <div className="member">1/10</div>
          <div className="ProductJoin">
            <button id="Join" className="join" onClick={JoinComplete}>
              공구 참가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
