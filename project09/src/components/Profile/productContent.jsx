import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const Productcontent = ({ img, title, price, divprice, member }) => {
  return (
    <>
      <S.Product>
        <S.ProductImage src={img} />
        <div className='productTitle'>{title}</div>
        <div className='productPrice'>{price}</div>
        <div className='One_In_N'>
          <div className='productN'>{divprice}</div>
          <div className='productMember'>{member}</div>
        </div>
      </S.Product>
      <div className='deleteProduct'>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} color='#ff000000' />
          <button>삭제</button>
        </div>
      </div>
    </>
  );
};
