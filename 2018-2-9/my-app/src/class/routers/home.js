import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    render() { 
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        {/* <Link to="/about" replace>详情页</Link> */}
                        <Link to={{
                            pathname:'/about',
                            state:{
                                num:this.state.num
                            }
                        }} >详情页</Link>
                    </li>
                </ul>
                <div>我是/组件</div>
            </div>   
        )
    }
}
 
export default Home;