import React,{Component} from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';
import './css.css';
import About from './about';
import Home from './home';
class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    click = (num) => {
        this.setState({
            num
        })
    }
    render() { 
        let {num} = this.state;
        return ( 
            <div>
                <ul>
                    <li>
                        <Link to="/"
                            onClick = {this.click.bind(this,0)}
                            >首页</Link>
                    </li>
                    <li>
                        <Link 
                            to="/about"
                            onClick = {this.click.bind(this,1)}
                        >关于</Link>
                    </li>
                </ul>
                <Route exact path="/" render={(props)=>{
                    let {location} = props;
                    location.state = {
                        num
                    }
                    return <Home url={props}/>
                }}/>
                <Route path="/about" render={(props)=>{
                    let {location} = props;
                    location.state = {
                        num
                    }
                    return <About url={props}/>
                }}/>
                
            </div>
         )
    }
}
 
export default APP;