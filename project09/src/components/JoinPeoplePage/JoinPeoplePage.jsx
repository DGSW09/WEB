import React from "react";
import "../../styles/pageJoinPeople.css";
import getOutImg from "../../img/getOut.svg";
import back from "../../img/back.png";

const JoinPeoplePage = () => {
  const BackMain = () => {
    window.location.replace("/asdt");
  };

  // const Out = () => {
  //   const Del = document.getElementsByClassName("del");
  // };
  return (
    <>
      <div className="Back">
        <img src={back} alt="error" onClick={BackMain} />
        <div className="join">참여 인원</div>
      </div>
      <div className="all">
        <div className="background">
          <div className="text">
            1302 김은진
            <button className="outImg">
              <img src={getOutImg} alt="error" className="getoutimg" />
            </button>
          </div>
          <div className="text">
            1318 전민찬
            <button className="outImg">
              <img src={getOutImg} alt="error" className="getoutimg" />
            </button>
          </div>
          <div className="text">
            1308 김동찬
            <button className="outImg">
              <img src={getOutImg} alt="error" className="getoutimg" />
            </button>
          </div>
          <div className="text">
            1404 이다경
            <button className="outImg">
              <img src={getOutImg} alt="error" className="getoutimg" />
            </button>{" "}
          </div>
          <div className="text">
            1406 이학
            <button className="outImg">
              <img src={getOutImg} alt="error" className="getoutimg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinPeoplePage;
