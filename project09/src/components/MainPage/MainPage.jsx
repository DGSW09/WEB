import MainLogo from "../logo.svg";
import profile from "../profile.svg";
import Menu from "../menu.svg";
import Prodct from "../product.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";
import { useState } from "react";

const MainPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="topNav">
        <img src={MainLogo} alt="09's MainLogo" className="logo" />
        <div className="inputWrap">
          <input
            type="text"
            className="searchInput"
            onChange={handleSearch}
            value={search}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </div>
        <div className="navMenu">
          <img src={profile} className="profile" alt="" />
          <img src={Menu} className="menubar" alt="" />
        </div>
      </div>
      <div className="product">
        <div className="recentProduct">
          <div className="product">최근에 본 상품</div> <br />
          <div className="previewProduct">
            <img src={Prodct} alt="" />
            <div className="productInfo">
              <div className="productName">존나존나 많은 앵그리버드</div> <br />
              <div className="proudctPrice">가격 측정 불가요 1/10</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
