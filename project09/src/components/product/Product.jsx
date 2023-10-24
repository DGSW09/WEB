import "../../styles/Product.css";
import Back from "../../img/back.png";
import ProductImage from "../../img/jetti.svg";
import { Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
let toggle;
const Product = () => {
  const HandleJoinComplete = () => {
    const JoinComplete = document.getElementById("Join");
    if (toggle) {
      //Click Event
      JoinComplete.innerText = "참여 하기";
      JoinComplete.style.backgroundColor = "#8277FF";
      JoinComplete.style.border = "none";
      JoinComplete.style.color = "#FFF";
      toggle = false;
    } else {
      //Click to Click
      JoinComplete.innerText = "참여 취소";
      JoinComplete.style.backgroundColor = "#fff";
      JoinComplete.style.border = "3px solid #8277FF";
      JoinComplete.style.color = "#585858";
      //mouse Hover
      JoinComplete.addEventListener("mouseover", function () {
        JoinComplete.style.border = "3px solid #5849FF";
        JoinComplete.style.color = "#000";
      });
      //mouse Hover End
      JoinComplete.addEventListener("mouseleave", function () {
        JoinComplete.innerText = "참여 취소";
        JoinComplete.style.backgroundColor = "#fff";
        JoinComplete.style.border = "3px solid #8277FF";
        JoinComplete.style.color = "#585858";
      });
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
      window.open(content);
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <div className='ProdcutWrap'>
      <div className='PageInfo'>
        <img src={Back} className='back' onClick={BackMain} alt=""/>
        <div className='PageTitle'>상세페이지</div>
      </div>
      <div className='ProductInfo'>
        <img src={ProductImage} className='productImage' alt=""/>
        <div className='ProductCommu'>
          <div className='member'>현재 참여 인원 : 1/10</div>
          <FontAwesomeIcon icon={faComments} className='comment' />
        </div>
        <div className='ProductInfo2'>
          <div className='ProductTitle'>제티 2박스</div>
          <div className='ProductContent'>아침에 먹는 우유 같이 제티 타서 먹을 사람....................</div>
          <div
            onClick={() => {
              handleLinkTab(Children);
            }}
            className='ProductLink'
            id='Link'
          >
            https://wowjety?-many.com/angrybird/
          </div>
          <div className='ProductPrice'>₩ 9,920</div>
          <div className='nProductPrice'>1/N : ₩ 4,960</div>
          <div className='WriterName'>1303 이윤선</div>
          <button id='Join' className='join' onClick={HandleJoinComplete}>
            참여 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
