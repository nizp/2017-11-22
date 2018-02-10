import React,{Component} from 'react';
import {
    Route,
    Link,
    Redirect
  } from 'react-router-dom';
import './css.css';
import About from './about';
import Home from './home';
import About2 from './about2';
class APP extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/about">关于</Link>
                    </li>
                </ul>
                <Route exact path="/" render={(props)=>{
                    
                    return <Home url={props}/>
                }}/>
                <Route path="/about" render={(props)=>{
                    return <Redirect to="/about2" />;
                    // return <About url={props}/>
                }}/>
                <Route path="/about2" render={(props)=>{
                    return <About2 url={props}/>
                }}/>
            </div>
         )
    }
}
 
export default APP;