import "../../../styles/UploadProduct.css";
import { useState } from "react";
import Back from "../../../img/back.png";
import { useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import SERVERURL from "../GitHide/ServerAdress";
import cliendId from "../GitHide/ClientID";
import * as S from "./UploadProduct.style";
const UploadProduct = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [member, setMember] = useState("");
  const [account, setAccount] = useState("");
  const [date, setDate] = useState("");

  const FileSelect = useRef("");

  const navigate = useNavigate();

  const BackMain = () => {
    navigate("/");
  };

  const Upload = async () => {
    const formData = new FormData();
    console.log(image);
    formData.append("image", image[1]);
    formData.append(
      "data",
      new Blob(
        [
          JSON.stringify({
            title: title,
            content: content,
            link: link,
            price: price,
            maxPeople: member,
            account: account,
            finishTime: date,
          }),
        ],
        {
          type: "application/json",
        },
      ),
    );
    try {
      await axios.post(SERVERURL + "gonggu/goods/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          charset: "utf-8",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      alert("asldnt");
    } catch (error) {
      alert(error || "error");
    }
    alert("정상적으로 등록되었습니다.");
    navigate("/");
  };

  const onChangeImgaeInput = (e) => {
    setImage([image, e.target.files[0]]);
  };

  return (
    <S.UploadProdcutWrap>
      <S.PageInfo>
        <S.Back src={Back} />
        <S.Title>게시물 올리기</S.Title>
      </S.PageInfo>
      <S.InputWrap>
        <input
          type="file"
          style={{ display: "none" }}
          ref={FileSelect}
          className="InputImage"
          onChange={onChangeImgaeInput}
        />
        <button
          className="SelectImgae"
          onClick={() => FileSelect.current.click()}
          style={{ width: "40%", height: "150px" }}
        >
          사진 첨부하기
        </button>
        <S.Input type="text" placeholder="제목을 입력하세요" onChange={(e) => setTitle(e.target.value)} />
        <S.Input type="text" placeholder="링크를 입력하세요" onChange={(e) => setLink(e.target.value)} />
        <S.Input type="text" placeholder="가격을 입력하세요" onChange={(e) => setPrice(e.target.value)} />
        <S.Input type="text" placeholder="참여 인원을 입력하세요" onChange={(e) => setMember(e.target.value)} />
        <S.Input type="text" placeholder="내용을 입력하세요" onChange={(e) => setContent(e.target.value)} />
        <S.Input type="text" placeholder="계좌번호를 입력하세요" onChange={(e) => setAccount(e.target.value)} />
        <S.Input type="date" placeholder="만료일자를 입력하세요" onChange={(e) => setDate(e.target.value)} />
        <S.UploadComplete type="submit" onClick={Upload}>
          게시물 작성
        </S.UploadComplete>
      </S.InputWrap>
    </S.UploadProdcutWrap>
  );
};

export default UploadProduct;
