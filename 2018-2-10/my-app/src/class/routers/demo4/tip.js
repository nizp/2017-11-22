import React from 'react';
import {
    Link
  } from 'react-router-dom';
class Tip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:3
        }
    }

    

    componentDidMount (){
        let {num} = this.state;
        let {url,code} = this.props;
        this.timer = setInterval(()=>{
           if(num > 0){
                this.setState({
                    num:--num
                })
           }else{
               clearInterval(this.timer);
               if(code == 1){
                    url.history.push('/about');
               }else{
                    url.history.push('/');
               }
               
           }
        },1000)
        // console.log(123);
    }
    componentWillUnmount(){

    }

    render() { 
        // let {match} = this.props.url;
        // let cName = match?'active':'';
        let {num} = this.state;
        let {code} = this.props;
        let temp = '';
        console.log(num)
        switch(code) {
            case 1:
                temp = '登录成功';
            break;
            case 2:
                temp = '用户名或密码错误';
            break;
            case 3:
                temp = '没有这个用户该用户信息';
            break;
            default:
                temp = '呵呵';
            break
        }
        return (
            <div>
                <h2>
                    {temp}
                </h2>
                <p>{num}秒后跳转{code==1?'私有页面':'首页'}....</p>
            </div>
        )
    }
}
 
export default Tip;