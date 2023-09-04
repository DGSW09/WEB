import MainLogo from "../logo.svg";
import profile from "../profile.svg";
import Menu from "../menu.svg";
import L_Arrow from "../L_Arrow.svg";
import R_Arrow from "../R_Arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";
import { useState } from "react";

const MainPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
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
          <img src={profile} className="profile" />
          <img src={Menu} className="menubar" />
        </div>
      </div>
      <div className="adBanner">
        <img src={L_Arrow} alt="" className="L_Arrow" />
        <img src={R_Arrow} alt="" className="R_Arrow" />
      </div>
    </>
  );
};

export default MainPage;
