import "./Product.css";
import Back from "../../img/back.png";
import productPicture from "../../img/jetti.svg";
const Product = () => {
  return (
    <div className="ProductInfoWrap">
      <img src={Back} className="back" />
      <div className="WrapTitle">상세페이지</div>
      <div className="productPicture">
        <img src={productPicture} />
      </div>
      <div className="productInfo">
        <div className="productTitle">제티 2박스</div>
      </div>
    </div>
  );
};

export default Product;
