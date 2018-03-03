import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import jsonp from '../../jsonp_1.0';


class List extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
      num:0
    }
  }
  renderData = (num) => {
    console.log(num)
    let _this = this;
    jsonp({
      url:'http://www.wookmark.com/api/json/popular',
      data:{
        page:num
      },
      success:function(data){
        let num = 0;
        let arr = [];
        let list = null;
        
        data.forEach((e,i)=>{
          //验证img的图片是否是好的
          let img = new Image();
          img.src = e.preview;

          img.onload = function(){
            num ++;
            console.log(num)
            arr.push(e.preview);
            if(num >= data.length){
              console.log(num); //50条数据
              list = arr.map((e,i)=>{
                return <li key={i}><img src={e}/></li>
              });
              // alert(1);
              _this.setState({data:list});
            }
          }
          img.onerror = function(){
            num++;
            //50条数据都处理完成了
            if(num >= data.length){
              console.log(num); //50条数据
              list = arr.map((e,i)=>{
                return <li key={i}><img src={e}/></li>
              });
              alert(1);
              _this.setState({data:list});
            }
          }
        });
      }
    })
  }
  componentDidMount(){
    /*
      当组件挂载之后执行，执行一次
    */
    let _this = this;
    
    this.renderData(0);
  }
  
  render() {
    let {data} = this.state;
    console.log(data);
    return (
      <div>
        <ul id="ul">
          {data}
        </ul>
      </div>
    );
  }
}

export default List;
