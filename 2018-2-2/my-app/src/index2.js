import React from 'react';
import ReactDOM from 'react-dom';
/*
  ReactDOM.render(
    第一个参数:组件,
    第二个参数:挂在点,
    第三个参数:回调函数（挂在完成）
  )
*/
ReactDOM.render(
  <div>
    你好,世界!
  </div>,
  document.getElementById('root'),
  // function(){
  //   console.log('挂在完成');
  // }
);



if(module.hot){
  module.hot.accept();
}
