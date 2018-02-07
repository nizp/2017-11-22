import React,{Component} from 'react';

class List extends Component{
    /*
        通过这样的写法，把父级的数据变成了子级的
        两个数据（子数据与父数据）并不干扰。

        子级的constructor中的props只会走一次
    */
    constructor(props){
        super(props);
        this.state = {
            //是否双击
            ondb:false,
            ctxt:this.props.txt
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
        this.setState({
            ondb : true
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
        let {ctxt} = this.state;
        let {txt,changeVal,id} = this.props;
        if(ctxt){
            //通知父级修改子级中的值
            changeVal(id,ctxt);
            this.setState({ondb:false});
        }else{
            //没内容
            this.setState({ondb:false,ctxt:txt});
        }
    }

    change = (ev) => {
        this.setState({
            ctxt:ev.target.value
        })
    }

    down = (ev) => {
        if(ev.keyCode == 13){
            this.blur();
        }
    }

    render(){
        let {txt,checked} = this.props;
        let {ondb,ctxt} = this.state;
        let classN = checked?'completed':'';
        if(ondb){
            classN += ' editing'; //"completed editing"
        }
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
                    value={ctxt} 
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
