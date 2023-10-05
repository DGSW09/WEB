import "../../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
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
    window.location.replace("/upload");
  };

  return (
    <div className="MainWrap">
      <div className="TopNav">
        <img src={logo} alt="09" id="Logo" onClick={ReloadPage} />
        <input type="text" className="search" />
        <img src={profile} className="profile" onClick={LoadToProfile} />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="upload"
          onClick={LoadToUpload}
        />
      </div>
      <div className="recentProductTitle">최근에 본 상품</div>
      <div className="recentProdcut">
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
