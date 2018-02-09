import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


class Tab1 extends React.Component {
    render(){
        return(
            <div>
                <h2>第一个页面</h2>
            </div>
        )
    }
}
class Tab2 extends React.Component {
    render(){
        return(
            <div>
                <h2>第二个页面</h2>
            </div>
        )
    }
}
class Tab3 extends React.Component {
    render(){
        return(
            <div>
                <h2>第三个页面</h2>
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
                onClick={this.changeNum.bind(this,i)}
                key={i} 
                className={i==num?'active':''}>
                <Link to={{
                    pathname:`/${e}`,
                    state:{
                        num
                    }
                }}>{e}</Link>
            </button>
        })
        return (
            <div id="box"> 
               {btns}
               <Route exact path="/" component={Tab1} />
               <Route path="/Tab1" component={Tab1} />
               <Route path="/Tab2" component={Tab2} />
               <Route path="/Tab3" component={Tab3} />
            </div>
        )
    }
}
 
export default Home;