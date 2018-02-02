import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
let arr = [1,2,3];

function fn(){
  alert(1);
}

let lis = arr.map((e,i)=> <li key={i}>{e}</li>);

ReactDOM.render(
  <div>
    <button onClick={fn}>点击</button>
    <ul>
      {lis}
      {/* {
        arr.map((e,i)=> <li key={i}>{e}</li>)
      } */}
    </ul>
  </div>
  ,
  document.getElementById('root')
);
