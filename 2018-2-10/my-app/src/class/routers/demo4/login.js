import React from 'react';
import {
    Link
  } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    click = () => {
        let {name,pass} = this.refs;
        let {yz,url} = this.props;
        console.log(this.props);
        
        yz(name.value,pass.value,url);
    }
    render() { 
        let {user,pass} = this.state;
        return (
            <div id="box">
                用户名:<input 
                    ref="name"
                    type="text" 
                    defaultValue=""
                />
                <br />
                密码:<input 
                    ref="pass"
                    type="password"
                    defaultValue=""
                />
                <button
                    onClick={this.click}
                    >登录</button>
            </div>
        )
    }
}
 
export default Login;