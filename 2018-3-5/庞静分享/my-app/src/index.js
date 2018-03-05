import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        alert("Initialrender");
        alert("constructor");
        this.state = {str: "hello"};
    }

    componentWillMount(){
        alert("WillMount");
    }

    componentDidMount(){
        alert("DidMount");
    }

    componentWillReceiveProps(nextProps){
        alert("WillReceiveProps");
        console.log( "WillReceiveProps",this.props.num,nextProps)
    }

    shouldComponentUpdate(nextProps,nextState){
        alert("shouldComponentUpdate");
        console.log( "shouldComponentUpdate",nextProps.num,nextState.str)
        return true;        // 记得要返回true
    }

    componentWillUpdate(){
        alert("componentWillUpdate");
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState,this.props,this.state)
        alert("componentDidUpdate");
    }

    componentWillUnmount(){
        alert("componentWillUnmount");
    }

    setTheState=()=> {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate=()=> {
        this.forceUpdate();
    }

    render() {
        alert("render");
        return(
            <div>
                <span>{"Props:"}<h2>这是父级的：{parseInt(this.props.num)}</h2></span>
                <br />
                <span>{"State:"}<h2>这是自己的：{this.state.str}</h2></span>
            </div>
        );
    }
}

class Container  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange=()=> {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState =()=> {
        this.refs.rLifeCycle.setTheState();
        console.log(this.refs.rLifeCycle)
    }

    forceLifeCycleUpdate=()=> {
        this.refs.rLifeCycle.forceItUpdate();
    }

    unmountLifeCycle=()=> {
        // 这里卸载父组件也会导致卸载子组件
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    parentForceUpdate=()=> {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.propsChange}>propsChange</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.setLifeCycleState}>setState</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.forceLifeCycleUpdate}>forceUpdate</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.unmountLifeCycle}>unmount</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.parentForceUpdate}>parentForceUpdateWithoutChange</a>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

ReactDOM.render(
    <Container></Container>,
    document.getElementById('root')
);


// if(module.hot){
//     module.hot.accept();
// }