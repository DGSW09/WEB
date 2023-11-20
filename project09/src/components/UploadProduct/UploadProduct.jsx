import "../../styles/UploadProduct.css";
import Back from "../../img/back.png";
import { useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import SERVERURL from "../GitHide/ServerAdress";
const UploadProduct = () => {
  const FileSelect = useRef("");

  const navigate = useNavigate();

  const BackMain = () => {
    navigate("/");
  };

  const Upload = async () => {
    const Title = document.getElementById("title");
    const Link = document.getElementById("link");
    const Price = document.getElementById("price");
    const Member = document.getElementById("member");
    const Content = document.getElementById("content");
    const Account = document.getElementById("account");

    try {
      await axios.post(
        SERVERURL,
        {
          title: `${Title.innerText}`,
          link: `${Link.innerText}`,
          price: `${Price.innerText}`,
          member: `${Member.innerText}`,
          content: `${Content.innerText}`,
          account: `${Account.innerText}`,
        },
        {
          headers: null,
        },
      );
    } catch (error) {
      console.log("Post Failed", error);
    }
    alert("작성되었습니다.");
  };

  return (
    <div className="UploadProductWrap">
      <div className="PageInfo">
        <img src={Back} className="Back" onClick={BackMain} />
        <div className="title">게시물 올리기</div>
      </div>
      <div className="InputWrap">
        <input type="file" style={{ display: "none" }} ref={FileSelect} className="InputImage" />
        <button className="SelectImgae" onClick={() => FileSelect.current.click()}>
          사진 첨부하기
        </button>
        <input type="text" className="InputTitle" placeholder="제목을 입력하세요" id="title" />
        <input type="text" className="InputLink" placeholder="링크를 입력하세요" id="link" />
        <input type="text" className="InputPrice" placeholder="가격을 입력하세요" id="price" />
        <input type="text" className="InputMember" placeholder="참여 인원을 입력하세요" id="member" />
        <input type="text" className="InputContent" placeholder="내용을 입력하세요" id="content" />
        <input type="text" className="InputAccount" placeholder="계좌번호를 입력하세요" id="account" />
        <button className="UploadCompelte" type="submit" onClick={Upload}>
          게시물 작성
        </button>
      </div>
    </div>
  );
};

export default UploadProduct;
