import "../../styles/Product.css";
import BackPage from "../../img/back.png";
import ProductImage from "../../img/jetti.svg";
import * as S from "./product.style";
import { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Product = () => {
  const [isActive, setIsActive] = useState(false);
  const [clickComment, setClickComment] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const BackMain = () => {
    window.location.replace("/");
  };

  const handleLinkTab = async () => {
    let content = document.getElementById("Link").innerText;
    try {
      await navigator.clipboard.writeText(content);
      alert("클립보드에 링크가 복사되었습니다.");
      window.open(content);
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  const HandlePopUpComment = () => {
    if (!clickComment) {
      setClickComment(true);
    } else {
      setClickComment(false);
    }
  };

  return (
    <S.ProductWrap>
      <S.PageInfo>
        <S.Back src={BackPage} onClick={BackMain} />
        <S.PageTitle>상세페이지</S.PageTitle>
      </S.PageInfo>
      <S.ProductInfo>
        <S.ProductImage src={ProductImage} />
        <S.ProductCommu>
          <S.Member>현재 참여 인원 : 1/10</S.Member>
          <S.CommentBtn>
            <FontAwesomeIcon icon={faComments} onClick={HandlePopUpComment} />
          </S.CommentBtn>
        </S.ProductCommu>
        <S.ProductInfo2>
          <S.ProductTitle>제티 2박스</S.ProductTitle>
          <S.ProductContent>아침에 먹는 우유 같이 제티 타서 먹을 사람....................</S.ProductContent>
          <S.ProductLink
            onClick={() => {
              handleLinkTab(Children);
            }}
            id="Link"
          >
            https://wowjety?-many.com/angrybird/
          </S.ProductLink>
          <S.ProductPrice>₩ 9,920</S.ProductPrice>
          <S.nProductPrice>1/N : ₩ 4,960</S.nProductPrice>
          <S.WriterName>1303 이윤선</S.WriterName>
          <S.CommonBtn onClick={handleClick} className={isActive ? "active" : ""}>
            참여하기
          </S.CommonBtn>
        </S.ProductInfo2>
        {clickComment && (
          <S.CommentWrap className={clickComment ? "up" : "down"}>
            <S.CommentTopNav>
              <S.CommentBack />
              <S.CommentTitle>댓글 창</S.CommentTitle>
            </S.CommentTopNav>
            <S.ShowComment>
              <S.UplodedComment>
                <S.CommentProfile />
                <S.CommentContentWrap>
                  <S.CommentUploder>1302 김은진</S.CommentUploder>
                  <S.CommentTime>1 hours ago</S.CommentTime>
                  <S.CommentContent>제티 몇개씩 나눠가지나요?</S.CommentContent>
                </S.CommentContentWrap>
              </S.UplodedComment>
            </S.ShowComment>
          </S.CommentWrap>
        )}
      </S.ProductInfo>
    </S.ProductWrap>
  );
};

export default Product;
