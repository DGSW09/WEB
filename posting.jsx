import react from 'react';
import back from './image/back.png';
import jetti from './image/jetti_.svg';
import './posting.css';

function posting() {
  const itemFocused =() =>{
    const itemDiv = document.querySelector('.post');
    
    const div = document.createElement('div');
    div.id="hoverSpan";
    div.style="background-color:yellow;height:100%;position:absolute";
    let span = document.createElement('span');
    span.id = "hoverSpan";
    span.innerText = "삭제";
    span.style='display:inline-block;text-align:center;width:100%;color:red';
    span.addEventListener('click', ()=>{
      alert("삭제");
    });

    div.appendChild(span);
    itemDiv.appendChild(div);

  }
  const itemUnFocused= ()=>{

    const itemDiv = document.querySelector('.post');
    let child = document.getElementById("hoverSpan");
    itemDiv.removeChild(child);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p className="msg">게시한 상품</p><img src={back} className="back-button" alt="back" />
        </header>
        <div className="post">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
        <div className="post">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
        <div className="post">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
        <div className="post">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
      </div>
      <div className="App2">
        <div className="post2">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
        <div className="post2">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
        <div className="post2">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
        <div className="post2">
          <img src={jetti} className="jetti" alt="jetti"></img>
          <div className="ttwojetti">
            <p className="twojetti">제티 2 박스</p>
            <p className="price">₩ 9,920</p>
            <p className="devide">1/N</p>
            <p className="devided-price">1/N : ₩ 4,960</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default posting;