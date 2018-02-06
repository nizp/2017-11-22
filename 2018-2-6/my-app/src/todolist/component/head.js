import React,{Component} from 'react';

class HeadM extends Component{
    constructor(){
        super();
        this.state = {
            val:''
        }
    }

    change = (ev) => {
        this.setState({
            val:ev.target.value
        });
    }

    keyup = (ev) => {
        let {val} = this.state;
        let {addData} = this.props;
        if(ev.keyCode === 13){
            if(!val.trim())return;
            let obj = {
                txt:val,
                checked:false,
                id:+new Date
            }
            addData(obj);
            this.setState({
                val:''
            })
        }
    }
    render(){
        let {val} = this.state;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    value={val} 
                    onChange = {this.change}
                    onKeyUp = {this.keyup}
                />
            </header>
        )
    }
}
export default HeadM;
