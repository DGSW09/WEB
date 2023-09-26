import "../../styles/UploadProduct.css";
import Back from "../../img/back.png";
const UploadProduct = () => {
  return (
    <div className="UploadProductWrap">
      <div className="PageInfo">
        <img src={Back} className="back" />
        <div className="PageTitle">게시물 작성</div>
      </div>
      <form method="get">
        <div className="UploadProductInfo">
          <input
            type="file"
            className="SelectImage"
            placeholder="사진을 첨부하세요"
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
            참여하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
