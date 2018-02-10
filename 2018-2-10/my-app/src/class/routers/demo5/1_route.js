import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './css.css';
import About from './about';
import Home from './home';
import Home2 from './home2';
class APP extends Component {
    constructor(props) {
        super(props);
    }
  
    render() { 
        return ( 
            <div>
                <ul>
                    <li>
                        <Link to="/home"
                            >首页</Link>
                    </li>
                    <li>
                        <Link 
                            to="/about"
                           
                        >关于</Link>
                    </li>
                    <li>
                        <Link 
                            to="/home2"
                        >Home2</Link>
                    </li>
                </ul>

                <Switch>
                    {/*显示顺序还与排列的先后顺序相关*/}
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/:id" render={(props)=>{
                        return <Home2 url={props}/>
                    }}/>
                </Switch>
            </div>
         )
    }
}
 
export default APP;