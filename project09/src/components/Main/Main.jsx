import logo from "../../img/logo.png";
import search from "../../img/search.png";
import "../../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  return (
    <div className="productInfoWrap">
      <div className="TopNav">
        <img src={logo} alt="" className="logo" />
        <input type="text" className="input" />
        <img src={search} className="searchIcon" />
        <div className="userMenu">
          <FontAwesomeIcon icon={faCircleUser} className="profile" />
          <FontAwesomeIcon icon={faBars} className="menubar" />
        </div>
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
      <h6 className="nowProductTitle">현재 추천 상품</h6>
      <div className="nowProduct">
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
