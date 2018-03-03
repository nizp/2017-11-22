import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link,Switch} from 'react-router-dom'
import jsonp from '../../jsonp_1.0';
import List from './list';
import List2 from './list2';
import List3 from './list3';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  render() {
    let {data} = this.state;
   
    return (
      <div className="App">
        <nav>
          <Link to="0"><button>点击0</button></Link>
          <Link to="1"><button>点击1</button></Link>
          <Link to="2"><button>点击2</button></Link>
          <Link to="blue"><button>跳转</button></Link>
        </nav>
        
        <div id="right"><span className="c">12312</span></div>
        <Route path="/:id" render={({match})=>{
              console.log(match.params.id)
              let id = match.params.id?(match.params.id)*1:0
              switch(id){
                case 0:
                  return <List />
                break;
                case 1:
                return <List2 />
                  break;
                  case 2:
                  return <List3 />
                break;
              }
          }}/>
      </div>
    );
  }
}

export default App;
