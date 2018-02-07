import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Demo/App';
import {Index as App} from './todolist/Index';
ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
  }
