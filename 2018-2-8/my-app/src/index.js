import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Demo/tab/tab';
// import {App} from './Demo/random/index';
// import App from './class/propType/PropTypes';
import App from './class/c-p/parent';

ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
  }
