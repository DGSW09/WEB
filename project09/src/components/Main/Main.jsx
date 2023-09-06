import logo from "../../img/logo.png";
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
        <FontAwesomeIcon
          icon={faUser}
          className="profile"
          style={{ width: "25px", position: "relative" }}
        />
        <FontAwesomeIcon
          icon={faBars}
          className="menubar"
          style={{ width: "25px", position: "relative" }}
        />
      </div>
      <div className="recProduct">
        <div className="pd">1</div>
        <div className="pd">2</div>
        <div className="pd">3</div>
        <div className="pd">4</div>
      </div>
    </div>
  );
};

export default Main;
