import styled from "styled-components";

export const UploadProdcutWrap = styled.div``;

export const PageInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Back = styled.img`
  width: 3%;
  height: 3%;
  margin-top: 1%;
  margin-left: 2%;
`;

export const Title = styled.div`
  font-family: Pretendard-Variable, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  margin-top: 1%;
  margin-left: 1%;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  margin-left: 30%;
  margin-top: 10%;
  &:first-child {
    margin-top: 0%;
  }
`;

export const Input = styled.input`
  width: 40%;
  height: 40px;

  font-family: Pretendard-Variable, sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #000;

  margin-top: 2%;
`;

export const UploadComplete = styled.button`
  width: 40%;
  height: 10%;

  background-color: #8277ff;
  border: none;
  border-radius: 10%;
`;
