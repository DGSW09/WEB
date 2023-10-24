import styled from "styled-components";

export const Product = styled.div`
  width: 12vw;
  height: 28vh;

  margin-right: 10vw;

  border-radius: 5px;

  font-family: Pretendard-Variable, sans-serif;
`;

export const ProductImage = styled.img`
  width: 12vw;
  height: 20vh;

  margin-top: -1vh;

  filter: drop-shadow(0px 2px 0px #000);
`;

export const ProfileWrap = styled.div`
  margin: 0;
  padding: 0;
`;

export const TopNav = styled.div`
  height: 40vh;

  margin-top: -15vh;
  margin-left: -8vw;

  color: #fff;
  position: relative;

  background-image: url("../img/TopNav.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: row;
`;

export const Back = styled.img`
  margin-top: 16vh;
  margin-left: 8.6vw;

  width: 2vh;
  height: 2vh;
`;

export const PageTitle = styled.div`
  margin-top: 16.2vh;
  margin-left: 1.6vw;

  font-size: 0.9vw;
  font-family: Pretendard-Variable, sans-serif;
  font-weight: 600;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const userImage = styled.img`
  width: 7vw;
  height: 7vw;

  margin-left: 15vw;
`;

export const schoolInfo = styled.div`
  margin-left: 9vw;

  display: flex;
  flex-direction: column;

  font-family: Pretendard, sans-serif;
`;

export const UserName = styled.div`
  margin-top: 0.5vh;
  font-size: 1.4vw;
  font-weight: 500;
`;

export const UserGradeAndClass = styled.div`
  font-size: 0.7vw;
  font-weight: 400;
  font-family: Pretendard-Variable, sans-serif;

  margin-top: 3vh;
`;

export const EditProfile = styled.button`
  margin-top: 5vh;

  width: 4vw;
  height: 2vh;

  border: none;
  border-radius: 0.2vw;

  font-size: 0.5vw;
  font-weight: 600;

  text-align: center;
`;

export const UploadProductTitle = styled.div`
  color: #8277ff;
  font-family: Pretendard-Variable, sans-serif;
  font-size: 1vw;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.9px;

  margin-left: 12vw;
  margin-top: 10vh;
`;

export const UploadProduct = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 12vw;
  margin-top: 5vh;
`;
