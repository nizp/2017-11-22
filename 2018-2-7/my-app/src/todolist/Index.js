import React,{Component} from 'react';
import './css/index.css';
import HeadM from './component/head';
import List from './component/list';
import Foot from './component/foot';
class Index extends Component {
    constructor(){
        super();
        this.state = {
            arr:[
                {
                    id:0,
                    txt:'第一条数据',
                    checked:false
                },
                {
                    id:1,
                    txt:'第二条数据',
                    checked:true
                }
            ],
            changeData:'/all'
        }
    }
    //创建数据
    addData = (newData) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.unshift(newData);
        this.setState({
            arr:arr2
        });
    }
    //修改是否选中
    changeChecked = (id) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e => {
            if(e.id == id){
                e.checked = !e.checked
            }
        });
        this.setState({
            arr:arr2
        });
    }

    //切换数据
    changeRoute = (route) => {
        this.setState({
            changeData:route
        })
    }

    rm = (id) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2 = arr2.filter(e=>{
            return e.id != id
        });
        this.setState({
            arr:arr2
        });
    }

    //点击全选或非全选

    all = (ev) => {
        let {checked} = ev.target;
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e => {
            e.checked = checked
        });
        this.setState({
            arr:arr2
        })
    }

    changeVal = (id,newVal) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e=>{
            if(e.id == id){
                e.txt = newVal
            }
        });
        this.setState({
            arr:arr2
        });
    }

    //删除已选中
    allRm = () => {
        let {arr} = this.state;
        let arr2 = arr.concat();

        arr2 = arr2.filter(e=>{
            return !e.checked;
        });
        this.setState({
            arr:arr2
        });
    }


    render(){

        let {arr,changeData} = this.state;
        let all = arr.length?arr.every(e=>e.checked):false;
        let len = arr.length; //1
        //过滤数组
        let list = arr.filter((e,i)=>{
            if(e.checked)len--;
            switch(changeData){
                case '/active':
                    return !e.checked;
                break;
                case '/completed':
                    return e.checked;
                break;
                case '/all':
                    return e;
                break;
                default:
                    return e;
                break;
            }
        });
        console.log(list);
        list = list.map((e,i)=>{
            return <List {...{
                    key:i,
                    txt:e.txt,
                    checked:e.checked,
                    id:e.id,
                    changeChecked:this.changeChecked,
                    rm:this.rm,
                    changeVal:this.changeVal
                }}/>
        })

        return (
            <section className="todoapp">
                <div>
                    <HeadM addData={this.addData}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={all}
                            onClick = {this.all}
                        />
                        <ul className="todo-list">
                            {list}
                        </ul>

                    </section>
                    <Foot allRm={this.allRm} num={len}  changeRoute={this.changeRoute}/>
                </div>
            </section>
        )
    }
}

export {Index};

