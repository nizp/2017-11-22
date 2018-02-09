import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


class Tab1 extends React.Component {
    componentDidMount(){
        let {changeNum} = this.props;
        changeNum(0);
    }
    render(){
        let {url,num,changeNum} = this.props;
        console.log(url)
        return(
            <div>
                <h2>第{num+1}个页面</h2>
            </div>
        )
    }
}
class Tab2 extends React.Component {
    componentDidMount(){
        let {changeNum} = this.props;
        changeNum(1);
    }
    render(){
        let {url,num} = this.props;
        console.log(url,num)
        return(
            <div>
                <h2>第{num+1}个页面</h2>
            </div>
        )
    }
}
class Tab3 extends React.Component {
    componentDidMount(){
        let {changeNum,num} = this.props;
        changeNum(2);
    }
    render(){
        let {url,num} = this.props;
        console.log(url,num)
        return(
            <div>
                <h2>第{num+1}个页面</h2>
            </div>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0,
            arr:['Tab1','Tab2','Tab3']
        }
    }
    changeNum = (i) => {
        
        this.setState({num:i})
    }
    render() { 
        let {arr,num} = this.state;
        

        let btns = arr.map((e,i)=>{
            return <button 
                key={i} 
                className={i==num?'active':''}>
                <Link 
                    onClick={this.changeNum.bind(this,i)}
                    to={{
                        pathname:`/${e}`
                    }}>{e}
                </Link>
            </button>
        });

     


        
        return (
            <div id="box"> 
               {btns}
               <Route exact path="/" render={(props)=>{
                   return <Tab1 url={props} changeNum={this.changeNum} num={num}/>
               }} />
               <Route path="/Tab1" render={(props)=>{
                   return <Tab1 url={props} changeNum={this.changeNum} num={num}/>
               }} />
               <Route path="/Tab2" render={(props)=>{
                   return <Tab2 url={props} num={num} changeNum={this.changeNum}/>
               }} />
               <Route path="/Tab3" render={(props)=>{
                   return <Tab3 url={props} num={num} changeNum={this.changeNum}/>
               }} />
            </div>
        )
    }
}
 
export default Home;