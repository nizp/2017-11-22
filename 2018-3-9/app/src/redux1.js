import React, { Component } from 'react';
import {createStore} from 'redux';

let store = createStore(fn);
const ADD = "ADD";

/*
  state:理解为this.state

  action:暂时触发的事件
    {
      type:"ADD",
      user:action.user
    }
*/
function fn(state=['于跃'],action){
  //当事件触发的时候干什么事情
  switch(action.type){
    case "ADD":
      return [...state,action.user]
  }
  return state;
}

//
function addTo(user){
  return {
    type:ADD,
    user
  }
}

let state = store.getState(); //this.state

/*
  类似于事件调用

  store.dispatch  类似addEventListener

  addTo('redux')  类似于'click'
*/
store.dispatch(addTo('redux'));

console.log(store.getState());//this.state

class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
