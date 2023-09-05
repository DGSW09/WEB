import MainLogo from "../logo.svg";
import profile from "../profile.svg";
import Menu from "../menu.svg";
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
    </>
  );
};

export default MainPage;
