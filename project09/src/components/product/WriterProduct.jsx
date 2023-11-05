import "../../styles/WriterProduct.css";
import Back from "../../img/back.png";
import ProductImage from "../../img/jetti.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const writerProduct = () => {
  const BackMain = () => {
    window.location.replace("/");
  };

  const LoadToEdit = () => {
    window.location.replace("/product/edit");
  };

  return (
    <div className='ProdcutWrap'>
      <div className='PageInfo'>
        <img src={Back} className='back' onClick={BackMain} alt='' />
        <div className='PageTitle'>상세페이지</div>
      </div>
      <div className='ProductInfo'>
        <img src={ProductImage} className='productImage' alt='' />
        <div className='ProductInfo2'>
          <div className='ProductTitle'>제티 2박스</div>
          <FontAwesomeIcon icon={faPenToSquare} className='editIcon' onClick={LoadToEdit} />
          <div>
            <a className='ProductLink' id='Link' href='?'>
              https://wowjety?-many.com/angrybird/
            </a>
          </div>
          <div className='ProductPrice'>₩ 9,920</div>
          <div className='nProductPrice'>1/N : ₩ 4,960</div>
          <div className='ProductContent'>아침에 먹는 우유 같이 제티 타서 먹을 사람....................</div>
          <div className='member'>1/10</div>
          <div className='ProductJoin'>
            <button id='Join' className='join'>
              공구 참가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default writerProduct;
