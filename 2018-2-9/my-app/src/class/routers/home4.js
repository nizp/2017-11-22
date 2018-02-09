import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


class Child extends React.Component {
    componentDidMount(){
        let {changeNum,url} = this.props;
        let num = 0;
        switch(url.match.url){
            case '/Tab1':
                num = 0;
            break;
            case '/Tab2':
                num = 1;
            break;
            case '/Tab3':
                num = 2;
            break;
        }
        changeNum(num);
    }
    render(){
        let {url} = this.props;
        console.log(url)
        let num = 0;
        switch(url.match.params.id){
            case 'Tab1':
                num = 1;
            break;
            case 'Tab2':
                num = 2;
            break;
            case 'Tab3':
                num = 3;
            break;
        }

        return(
            <div>
                <h2>第{num}个页面</h2>
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
               <Route path="/:id" render={(props)=><Child url={props} changeNum={this.changeNum}/>}/>
            </div>
        )
    }
}
 
export default Home;