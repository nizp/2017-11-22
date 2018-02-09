import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import './css.css';
// import Home from './home2';
// import Home from './home3';
import Home from './home4';
class App extends React.Component {
    render() { 
        return (
            <div>
                <Route path="/" component={Home}/>
            </div>
        )
    }
}
 
export default App;