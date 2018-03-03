import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './class/app/App';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
import Blue from './class/app/blue';
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/blue" component={Blue} />
            <Route path="/" component={App} />
        </Switch>
    </Router>
, document.getElementById('root'));
if (module.hot) {
    module.hot.accept();
}