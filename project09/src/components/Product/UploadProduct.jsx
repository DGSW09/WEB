import "../../styles/UploadProduct.css";
import Back from "../../img/back.png";
import { useRef } from "react";
const UploadProduct = () => {
  const FileSelect = useRef("");

  const BackMain = () => {
    window.location.replace("/");
  };

  const Upload = () => {
    alert("작성되었습니다.");
    window.location.replace("/");
  };

  return (
    <div className='UploadProductWrap'>
      <div className='PageInfo'>
        <img src={Back} className='back' onClick={BackMain} alt=""/>
        <div className='PageTitle'>게시물 작성</div>
      </div>
      <div className='UploadProductInfo'>
        <input type='file' style={{ display: "none" }} ref={FileSelect} />
        <button className='SelectImage' onClick={() => FileSelect.current.click()}>
          사진 첨부하기
        </button>
        <input type='text' className='InputTitle' placeholder='제목을 입력하세요' />
        <input type='text' className='InputLink' placeholder='링크를 입력하세요' />
        <input type='text' className='InputPrice' placeholder='가격를 입력하세요' />
        <input type='text' className='InputMember' placeholder='참여인원을 입력하세요' />
        <input type='text' className='InputContent' placeholder='내용을 작성하세요' />
        <button className='UploadProductBtn' type='submit' onClick={Upload}>
          게시하기
        </button>
      </div>
    </div>
  );
};

export default UploadProduct;
