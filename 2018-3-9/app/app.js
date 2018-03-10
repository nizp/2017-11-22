import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './src/demo2/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/demo2/reducer/Reducer';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}