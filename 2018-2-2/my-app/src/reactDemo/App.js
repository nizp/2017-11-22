import React,{Component} from 'react';
/*
  组件：
    组件的名字首字母必须大写
    继承Component ===  React.Component
*/
class App extends Component {
  constructor(){
    //写了constructor必须写super
    super();
    //this.state 初始化数据的
    //只要this.state的数据发生变化，就会更新页面
    this.state = {
      arr:[1,2,3,4,5,6]
    }

  }
  click = () => {
    let {arr} = this.state;
    
    let arr2 = arr.concat();

    arr2.push(Math.random());

    /*
      更新数据，通过this.setState()更新

      只要使用this.setState更新，就会渲染页面

    */
    this.setState({
      arr:arr2
    });

    // console.log(arr2);

  }
  render(){
    // console.log(this.state)

    return (
      <div>
        <div>你好,世界</div>
        <button onClick={this.click}>点击添加</button>
        <ul>
          {
            this.state.arr.map((e,i)=><li key={i}>{e}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default App;
