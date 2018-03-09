import React,{Component} from 'react';
import C1 from './component/child1';
import {connect} from 'react-redux';
class App extends Component {
  constructor(){
    super();
  }
  render(){
    
    return (
      <div>
        <C1 />
        <hr />
      </div>
    )
  }
}

export default App;