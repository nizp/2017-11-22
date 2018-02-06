import React, { Component } from 'react';
class PPa extends Component {

  click = () => {
    //   alert(this.props.txt);
    //通知父组件，用户点击了哪个数据
    this.props.Num(this.props.id);
  }
  render() {
    console.log(this.props);
    return (
     <li
        onClick = {this.click}
     >
     {
        this.props.txt
     }
     </li>
     
    );
  }
}

export default PPa;
