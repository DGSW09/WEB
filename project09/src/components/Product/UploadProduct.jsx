import "../../styles/UploadProduct.css";
import Back from "../../img/back.png";
import { useRef } from "react";
const UploadProduct = () => {
  const FileSelect = useRef("");
  const BackMain = () => {
    window.location.replace("/");
  };
  return (
    <div className="UploadProductWrap">
      <div className="PageInfo">
        <img
          src={Back}
          className="back"
          onClick={BackMain}
        />
        <div className="PageTitle">게시물 작성</div>
      </div>
      <form method="get">
        <div className="UploadProductInfo">
          <input type="file" style={{ display: "none" }} ref={FileSelect} />
          <input
            className="SelectImage"
            placeholder="사진을 첨부하세요"
            onClick={() => FileSelect.current.click()}
          />
          <input
            type="text"
            className="InputTitle"
            placeholder="제목을 입력하세요"
          />
          <input
            type="text"
            className="InputLink"
            placeholder="링크를 입력하세요"
          />
          <input
            type="text"
            className="InputContent"
            placeholder="내용을 작성하세요"
          />
          <button className="UploadProductBtn" type="submit">
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
