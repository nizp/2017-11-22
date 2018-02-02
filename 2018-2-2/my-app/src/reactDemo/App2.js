import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/*
  JSX语法: 一种 JavaScript 的语法扩展
    JS XML -> 
      1.顶层只能有一个标签
      2.class都要写成className
      3.{}
        1)花括号中可以直接写入js代码
        2)[1,2,3,4] ->...  1 2 3 4 (如果是个数组，花括号会扩展开)
      4.单标签必须加反斜线 <input />
*/

let arr = [<p>1</p>,<p>2</p>];
ReactDOM.render(
  <div>
    <div>1</div>
    <div className="active">
      {/* {alert(1)} */}
      {
        /*arr*/
      }
      <input type="text" />
    </div>
  </div>
  ,
  document.getElementById('root')
);
