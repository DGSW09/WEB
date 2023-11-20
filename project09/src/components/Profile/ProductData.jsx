import Profile from "./profile";
import productImage from "../../img/jetti.svg";

const data = [
  {
    id: 1,
    img: `${productImage}`,
    title: "제티 2박스",
    pirce: "₩ 9,920",
    divprice: "1/N : ₩4,960",
    member: "1/2",
  },
  {
    id: 2,
    img: `${productImage}`,
    title: "제티 2박스",
    pirce: "₩ 9,920",
    divprice: "1/N : ₩4,960",
    member: "1/2",
  },
];

const ProductData = () => {
  return (
    <>
      <Profile productData={data} />
    </>
  );
};

export default ProductData;
