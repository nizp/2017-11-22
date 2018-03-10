import React, { Component } from 'react';
import {createStore} from 'redux';


class App extends Component {
  click = (ev) => {
    let {addTo} = this.props;

    let {innerHTML} = ev.target;

    addTo( innerHTML*1 );    

  }

  render() {
    let {store} = this.props;
    let num = store.getState().fn;
    console.log(num);
    return (
      <div className="App">
        <button onClick={this.click}>{num}</button>
      </div>
    );
  }
}

export default App;
