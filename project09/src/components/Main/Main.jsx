import "../../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../img/logo.png";
import profile from "../../img/profile.png";

const Main = () => {
  const ReloadPage = () => {
    window.location.reload();
  };

  const LoadToProduct = () => {
    window.location.replace("/product");
  };

  const LoadToProfile = () => {
    window.location.replace("/profile");
  };

  const LoadToUpload = () => {
    window.location.replace("/product/upload");
  };

  const handleOnClick = () => {
    window.location.replace("/main/search");
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="MainWrap">
      <div className="TopNav">
        <img src={logo} alt="09" id="Logo" onClick={ReloadPage} />
        <input type="text" className="search" id="search" onKeyDown={handleOnKeyDown} />
        <img src={profile} className="profile" onClick={LoadToProfile} alt="" />
        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} onClick={LoadToUpload} className="upload" />
      </div>
      <div className="recentProductTitle">최근에 본 상품</div>
      <div className="recentProdcut">
        <FontAwesomeIcon icon={faChevronLeft} className="left" />
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="right" />
      </div>
      {/* ------------------------------------------------------------- */}
      <h6 className="nowProductTitle">현재 추천 상품</h6>
      <div className="nowProduct">
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
        <div className="pd" onClick={LoadToProduct}>
          <div className="productTitle">제티 2박스</div>
          <div className="productPrice">₩ 9,920</div>
          <div className="productN">1/N : ₩4,960</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
