import React,{Component} from 'react';
import {
    Route,
    Link,
    Redirect
  } from 'react-router-dom';
import './css.css';
import About from './about';
import Home from './home';
import Login from './login';
import Tip from './tip';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[
                {
                    name:'超学',
                    pass:123
                },
                {
                    name:'杨娜',
                    pass:123
                },
                {
                    name:'胡耀祥',
                    pass:123
                }
            ],
            onOff:false,
            code:0
        }
    }
    logout = (history) => {
        this.setState({ onOff:false,code:0 });
        history.push('/');

    }
    yz = (name,pass,url) => {
        let {user} = this.state;
        

        let obj = user.find(e=>e.name == name);
        //有这个用户
        if(obj){
            //还得判断密码对不对
            if(obj.pass == pass){
                this.setState({onOff:true,code:1});
            }else{  
                //用户名或密码错误
                this.setState({code:2});
            }
        }else{
            //没有这个用户
            this.setState({code:3});
        }
       
        url.history.push('/tip');

    }
    render() { 
        let {onOff,code} = this.state;
        return ( 
            <div>
                <ul>
                    <li>
                        <Link to="/home">公共文件</Link>
                    </li>
                    <li>
                        <Link to="/about">私有文件</Link>
                    </li>
                </ul>
                <Route exact path="/home" component={Home}/>
                <Route path="/about" render={(props)=>{
                    
                    console.log(this.yz)
                    if(onOff){
                        return <About logout={this.logout} url={props} />
                    }else{
                        return <Redirect to="/login"/>;
                    }
                    
                }}/>
                <Route path="/login" render={(props)=>{
                     if(onOff){
                        return <Redirect to="/about"/>
                    }else{
                        return <Login url={props} yz={this.yz}/>
                    }
                }}/>
                <Route path="/tip" render={(props)=>{
                    return <Tip code={code} url={props} />
                }}/>
            </div>
         )
    }
}
 
export default App;