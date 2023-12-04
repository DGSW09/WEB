import DiaryList from "./DiaryList";

const dummylist = [
  {
    id: 1,
    author: "전민찬",
    content: "첫번쨰 일기",
    emotion: "기쁨",
    date: "2023년 7월27일",
  },
  {
    id: 2,
    author: "전우진",
    content: "두번쨰 일기",
    emotion: "기쁨",
    date: "2023년 7월28일",
  },
  {
    id: 3,
    author: "이윤선",
    content: "세번쨰 일기",
    emotion: "기쁨",
    date: "2023년 7월29일",
  },
];

const DummyList = () => {
  return (
    <>
      <DiaryList diaryList={dummylist} />
    </>
  );
};

export default DummyList;
