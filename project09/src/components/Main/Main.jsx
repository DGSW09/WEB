import "../../styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import profile from "../../img/profile.png";
import { useEffect, useState } from "react";
import axios from "axios";
import SERVERURL from "../GitHide/ServerAdress";

const Main = () => {
  const [recentProductData, setRecentProductData] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const AllProductData = [{ allProductData }];
  const RecentProductData = [{ recentProductData }];
  useEffect(() => {
    axios
      .get(SERVERURL + "/get-recent-products")
      .then((response) => {
        setRecentProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recent products:", error);
      });

    axios
      .get(SERVERURL + "get-all-products")
      .then((response) => {
        setAllProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all products:", error);
      });
  }, []);

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
    window.location.replace("/search");
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="MainWrap">
      <div className="TopNav">
        <h1 className="title" onClick={ReloadPage}>
          GONGGU
        </h1>
        <input type="text" className="search" id="search" onKeyDown={handleOnKeyDown} />
        <img src={profile} className="profile" onClick={LoadToProfile} alt="" />
        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} onClick={LoadToUpload} className="upload" />
      </div>
      <div className="recentProductTitle">최근에 본 상품</div>
      <div className="recentProdcut">
        <FontAwesomeIcon icon={faChevronLeft} className="left" style={{ marginLeft: "1%" }} />
        {RecentProductData.map((data) => (
          <div className="pd" onClick={LoadToProduct}>
            <div className="productTitle">{data.productTitle}</div>
            <div className="productPrice">{data.productPrice}</div>
            <div className="productN">
              <div className="divPrice">{data.divPrice}</div>
              <div className="member">{data.member}</div>
            </div>
          </div>
        ))}
        <FontAwesomeIcon icon={faChevronRight} className="right" />
      </div>
      <h6 className="nowProductTitle">현재 추천 상품</h6>
      <div className="nowProduct">
        {AllProductData.map((data) => (
          <div className="pd" onClick={LoadToProduct}>
            <div className="productTitle">{data.productTitle}</div>
            <div className="productPrice">{data.productPrice}</div>
            <div className="productN">
              <div className="divPrice">{data.divPrice}</div>
              <div className="member">{data.member}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
