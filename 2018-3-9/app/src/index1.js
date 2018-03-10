import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './redux2';
import {createStore} from 'redux';
import reducer from './Reducer/Reducer';

let store = createStore(reducer);
const ADD = "ADD";
function addTo(num){
  return {
    type:ADD,
    num
  }
}
// store.subscribe(()=>{
//   let state = store.getState();
//   console.log(state.fn);
// })

function add(num){
    return store.dispatch(addTo(num));
}

// store.dispatch(addTo(1));
// store.dispatch(addTo(2));


function render(){
    ReactDOM.render(<App store={store} addTo={add}/>, document.getElementById('root'));
}
render();

store.subscribe(render)


if (module.hot) {
    module.hot.accept();
}