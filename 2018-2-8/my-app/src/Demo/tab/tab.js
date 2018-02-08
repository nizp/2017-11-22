import React,{Component} from 'react';
import './tab.css';
import List from './list';
class App extends Component {
    constructor(){
        super();
        this.state = {
            left:[
                {
                    txt:'小程序',
                    check:false
                }
                ,{
                    txt:'jQuery',
                    check:false
                },{
                    txt:'Ajax',
                    check:false
                },{
                    txt:'js基础-2',
                    check:false
                },{
                    txt:'移动端实践',
                    check:false
                }],
            right:[{
                txt:'node',
                check:false
                },{
                    txt:'ES6',
                    check:false
                },{
                    txt:'面向对象-中',
                    check:false
                },{
                    txt:'React',
                    check:false
                },{
                    txt:'js基础-1',
                    check:false
                }
            ]
        }
    }
    clickR = () => {
        let {right,left} = this.state;
        let r = right.concat();
        let l = left.concat();
        for(let i=0;i<r.length;i++){
            if(r[i].check){
                let d = r.splice(i,1)[0];
                d.check = false;
                l.push(d);
                i--;
            }
        }
        this.setState({
            left:l,
            right:r
        })
    }
    clickL = () => {
        let {right,left} = this.state;
        let r = right.concat();
        let l = left.concat();
        for(let i=0;i<l.length;i++){
            if(l[i].check){
                let d = l.splice(i,1)[0];
                d.check = false;
                r.push(d);
                i--;
            }
        }
        this.setState({
            left:l,
            right:r
        })
    }
    clickAll = () => {
        this.clickR();
        setTimeout(()=>{
            this.clickL();
        });
    }
    changeCheck = (stion,id) => {
        let arr = this.state[stion].concat();
        arr.forEach((ele,i) => {
            if(i == id){
                ele.check = !ele.check
            }
        });
        this.setState({
            [stion]:arr
        })
    }


    render(){
        
        let {left,right} = this.state;

        let listR = right.map((e,i)=>{
            return <List {...{
                key:i,
                txt:e.txt,
                id:i,
                check:e.check,
                stion:'right',
                changeCheck:this.changeCheck
            }}/>
        })
        let listL = left.map((e,i)=>{
            return <List {...{
                key:i,
                txt:e.txt,
                id:i,
                check:e.check,
                stion:'left',
                changeCheck:this.changeCheck
            }}/>
        })

        return (
            <div id="wrap">
                <div className="box clearFix">
                    <ul className="left list">
                        {listL}
                    </ul>
                    <ul className="change">
                        <li 
                            className="move-to-all"
                            onClick={this.clickAll}
                        ><a href="#">两边一起</a></li>
                        <li 
                            className="move-to-l"
                            onClick={this.clickR}
                        ><a href="#">向左</a></li>
                        <li 
                            className="move-to-r"
                            onClick={this.clickL}
                        ><a href="#">向右</a></li>
                    </ul>
                    <ul className="right list">
                        {listR}
                    </ul>
                </div>
		    </div>
        )
    }
}
export default App;
