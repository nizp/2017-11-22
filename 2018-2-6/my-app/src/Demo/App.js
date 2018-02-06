import React, { Component } from 'react';
import PPa from './ppa';
class App extends Component {
  constructor(){
    super();
    this.state = {
      arr:[1,2,3,4]
    }
  }
  changeNum = (id) => {
    let {arr} = this.state;
    let arr2 = arr.concat();
    arr2[id] ++;
    this.setState({
      arr:arr2
    })

  }
  render() {

    let {arr} = this.state;
    let list = arr.map((e,i)=>{
      let obj = {
        txt:e,
        key:i,
        id:i
      }
      // console.log({...obj});
      return <PPa {...{
        txt:e,
        key:i,
        id:i,
        Num:this.changeNum
      }}/>

      //txt={e} key={i} id={i} kk={1} yy={2}  o={o} === o={{key:1,txt:2}}
      /*
        {...{
          txt:e,
          key:i,
          id:i,
          yy:2
        }}
      */
    });


    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default App;
