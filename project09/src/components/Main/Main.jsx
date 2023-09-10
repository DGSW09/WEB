import logo from "../../img/logo.png";
import search from "../../img/search.png";
import "../../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  const NextSlde = (pSlde) => {
    const nSlde = document.querySelectorAll(".num");
    for (let i = 0; i < nSlde.length; i++) {
      nSlde[i].style.display = "none";
    }
    nSlde[pSlde - 1].style.display = "block";
  };

  return (
    <div className="productInfoWrap">
      <img src={logo} alt="" />
      <input type="text" className="input" />
      <img
        src={search}
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          top: "26px",
        }}
      />
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
          <div className="num" onClick={NextSlde}></div>
          <div className="num" onClick={NextSlde}></div>
          <div className="num" onClick={NextSlde}></div>
          <div className="num" onClick={NextSlde}></div>
          <div className="num" onClick={NextSlde}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
