import MainLogo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="topNav">
        <img src={MainLogo} alt="09's MainLogo" className="logo" />
        <div className="inputWrap">
          <input type="text" className="searchInput"/>
        </div>
      </div>
    </>
  );
};

export default MainPage;
