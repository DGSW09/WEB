import styled, { keyframes } from "styled-components";

export const ProductWrap = styled.div`
  margin: 0;
  padding: 0;
`;

export const PageInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Back = styled.img`
  width: 30px;
  height: 30px;

  margin-left: 2vw;
  margin-top: 2vh;
`;

export const PageTitle = styled.div`
  margin-left: 1vw;
  margin-top: 2vh;

  color: #585858;
  font-family: Pretendard-Variable, "굴림";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
`;

export const ProductInfo = styled.div``;

export const ProductImage = styled.img`
  width: 60vw;
  height: 43vh;

  margin-top: 5vh;
  margin-left: 19vw;
`;

export const ProductCommu = styled.div`
  display: flex;
  flex-direction: row;

  width: 101vw;
  height: 5vh;

  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const Member = styled.div`
  margin-left: 87vw;
  margin-top: 1.5vh;
  margin-right: 2vw;

  color: #585858;
  font-family: Pretendard-Variable;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CommentBtn = styled.div`
  width: 1.7vw;
  height: 1.7vw;

  margin-top: 1.5vh;
`;

export const ProductInfo2 = styled.div`
  width: 101vw;
  height: 70vh;

  background: #fff;

  position: absolute;
`;

export const ProductTitle = styled.div`
  color: #585858;
  font-family: Pretendard-Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.05px;

  margin-left: 20vw;
  margin-top: 7vh;
`;

export const ProductContent = styled.div`
  color: #888;
  font-family: Pretendard-Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-left: 20vw;
  margin-top: 4vh;
`;

export const ProductLink = styled.div`
  color: #5849ff;
  font-family: Pretendard-Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  margin-left: 20vw;
  margin-top: 8vh;
`;

export const ProductPrice = styled.div`
  color: #000;
  font-family: Pretendard-Variable;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.5px;

  margin-left: 20vw;
  margin-top: 3vh;
`;

export const nProductPrice = styled.div`
  color: #5849ff;
  font-family: Pretendard-Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-left: 20vw;
  margin-top: 3vh;
`;

export const Account = styled.div`
  margin-left: 20vw;
  margin-top: 3%;

  color: #888;
  font-family: Pretendard-Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const WriterName = styled.div`
  margin-left: 20vw;
  margin-top: 10vh;

  color: #888;
  font-family: Pretendard-Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommonBtn = styled.button`
  width: 25vw;
  height: 5vh;

  margin-left: 37vw;
  margin-top: 10vh;

  border-radius: 10px;
  border: none;
  background: #8277ff;

  color: #fff;
  text-align: center;
  font-family: Pretendard-Variable, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background-color: #5849ff;
  }

  &.active {
    border: 3px solid #8277ff;
    color: #585858;
    background-color: #fff;

    &:hover {
      border: 3px solid #5849ff;
      color: #000;
    }
  }
`;

export const CommentWrap = styled.div`
  width: 100%;
  height: 180%;

  background: #cacaca;
  border-radius: 5px 5px 0px 0px;

  position: absolute;

  top: 50%;
`;

export const CommentTopNav = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentBack = styled.img`
  width: 1.5%;
  height: 1.5%;

  margin-left: 2vw;
  margin-top: 2vh;
`;

export const CommentTitle = styled.p`
  margin-left: 1vw;
  margin-top: 2vh;

  color: #585858;
  font-family: Pretendard-Variable, "굴림";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
`;

export const ShowComment = styled.div`
  width: 100%;
  height: 9vh;

  display: flex;
  flex-direction: column;
`;

export const UplodedComment = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentProfile = styled.img`
  width: 4vw;
  height: 4vw;
`;

export const CommentContentWrap = styled.div`
  width: 10vw;
  height: 4vh;

  flex-wrap: wrap;

  margin: 0;

  overflow-x: hidden;
`;

export const CommentUploder = styled.p`
  color: #000;
  font-size: 7px;
  font-weight: 400;
  font-family: Pretendard-Variable, sans-serif;
`;

export const CommentTime = styled.p`
  color: #585858;
  font-size: 5px;
  font-weight: 400;
  font-family: Pretendard-Variable, sans-serif;
  margin-left: 2vw;
`;

export const CommentContent = styled.p`
  color: #000;
  font-family: Pretendard-Variable, sans-serif;
  font-weight: 400;
  font-size: 10px;
`;
