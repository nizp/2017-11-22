import React,{Component} from 'react';

class List extends Component{
    /*
        通过这样的写法，把父级的数据变成了子级的
        两个数据（子数据与父数据）并不干扰。

        子级的constructor中的props只会走一次,
        会接受父级传过来的第一次数据，就算父级数据更新
        也不会再次更新props了


        ctxt主要就是为了存父级的数据，为了如果内容为空的时候
        value值仍然是初始的那个
    */
    constructor(props){
        super(props);
        this.state = {
            //是否双击
            ondb:false,
            ctxt:''
        }
    }
    checked = () => {
        let {changeChecked,id} = this.props;
        changeChecked(id);
    }
    rm = () => {
        let {rm,id} = this.props;
        rm(id);
    }
    db = () => {
        //双击的时候把父级的第一次传来的数据存起来
        this.setState({
            ondb : true,
            ctxt:this.props.txt
        },()=>{
            /*
                ()=>{}为数据更新之后的回调函数。
                
                ref:可以给组件或者元素加标识，方便快速查找并操作它
                    <List  ref="name">
                使用:
                    this.refs.name
            */
            //console.log( this.refs.nn )
           
            this.refs.nn.selectionStart = this.refs.nn.value.length;
            this.refs.nn.focus();
        })
    }

    blur = () => {
        let {txt,changeVal,id} = this.props;
        //如果txt为空的，那么内容得还原
        if(!txt){
            changeVal(id,this.state.ctxt);
        }
        this.setState({ondb:false});
    }

    change = (ev) => {
       let {changeVal,id} = this.props;
       changeVal(id,this.refs.nn.value);
    }

    down = (ev) => {
        if(ev.keyCode == 13){
            this.blur();
        }
    }

    render(){
        let {txt,checked} = this.props;
        let {ondb} = this.state;
        let classN = checked?'completed':'';
        if(ondb){
            classN += ' editing'; //"completed editing"
        }
        console.log(txt)
        return (
            <li 
                className={classN} 
                onDoubleClick = {this.db}
            >
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={checked} 
                        onChange = {this.checked}
                    />
                    <label>{txt}</label>
                    <button 
                        className="destroy"
                        onClick = {this.rm}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    value={txt} 
                    onBlur={this.blur}
                    onChange = {this.change}
                    ref="nn"
                    onKeyDown = {this.down}
                />
            </li>
        )
    }
}
export default List;
