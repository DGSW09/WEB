import logo from "../../img/logo.png";
import product from "../../img/jetti.png";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  return (
    <div className="productInfoWrap">
      <img src={logo} alt="" />
      <input type="text" className="input" />
      <div className="userMenu">
        <FontAwesomeIcon icon={faUser} className="profile" />
        <FontAwesomeIcon icon={faBars} className="menubar" />
      </div>
      <h6 className="recentProductTitle">최근 본 상품</h6>
      <div className="recProduct">
        <div className="pd">
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
          <div className="member">1/2</div>
        </div>
        <div className="pd">
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
          <div className="member">1/2</div>
        </div>
        <div className="pd">
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
          <div className="member">1/2</div>
        </div>
        <div className="pd">
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
          <div className="member">1/2</div>
        </div>
        <div className="nextmenu">
          <div className="num"></div>
          <div className="num"></div>
          <div className="num"></div>
          <div className="num"></div>
          <div className="num"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
