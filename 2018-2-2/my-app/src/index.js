import App from './reactDemo/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}