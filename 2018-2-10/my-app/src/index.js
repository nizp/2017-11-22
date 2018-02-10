import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './class/routers/demo5/1_route';
/*
  1.引入react-router-dom
  2.给根组件包上<Router>标签对（只需要一个Router即可）
  3.使用Route和Link
      Route通过设置path="路径" 去引入哪个组件
        exact:(精确模式)
          没有写exact：
            <Route path="/" component={Home}>   
            如果你写/about 那么既会出现about也会出现Home

          如果你写exact
            <Route exact path="/" component={Home}>
            如果你写/about 那么只会出现about

      Route可以不写component

      可以使用render
      render={({mathch})=>{
        return <Tab1 />
      }}
      render中只要匹配到就会进这个函数中，并且返回对应的组件

      可以使用children
      children = {(url)=>{
        如果不匹配这个路径match为null
        return <Tab1 />
      }}

      children不管你匹配不匹配都会进这个函数中，并且返回对应的组件




      Link 通过设置to="路径" 跳到哪个组件中
        to=string   -> to="/about"

        to=object  -> to={{
          pathname:'/about',
          search: '?sort=name',
          hash: '#the-hash',
          state: { fromDashboard: true }
        }}

        传入的数据，需要在对应的组件中的this.props的location中去获取to传递的数据
        
        

        如果在Link中写上replace,是把之前的路由记录替换（点击浏览器回退键，不能回退）

*/

// document.onmousedown = function(ev){
//   return false;
// }
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , 
  document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
  }
