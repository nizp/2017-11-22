import React,{Component} from 'react';
import C1 from './component/child1';
import {connect} from 'react-redux';
class App extends Component {
  constructor(){
    super();
    this.click = this.click.bind(this);
  }
  click(ev){
    // let {addTo} = this.props;
    // let {innerHTML} = ev.target;
    // addTo(innerHTML);
  }
  render(){
    let {num,reducer1} = this.props;
    console.log();
    return (
      <div>
        <button onClick={this.click}>{reducer1}</button>
        <hr />
        <C1 num={num}/>
      </div>
    )
  }
}

App = connect((state)=>state)(App);

export default App;