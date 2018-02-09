import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import About from './about';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/about" replace>详情页</Link>
                    </li>
                </ul>
                <Route path="/about" component={About}/>
            </div>
        )
    }
}
 
export default App;