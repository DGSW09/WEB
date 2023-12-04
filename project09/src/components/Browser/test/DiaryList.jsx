const DiaryList = ({ diaryList }) => {
  return (
    <>
      <h1>일기 리스트</h1>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((key) => (
          <div>
            <div>날짜 : {key.date}</div>
            <div>작성자 : {key.author}</div>
            <div>내용 : {key.content}</div>
            <div>감정 : {key.emotion}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiaryList;
