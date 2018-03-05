import React ,{Component}from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    static defaultProps = {
        title:"将前端坚持到底！"
    }
    constructor(){
        super()
        this.state={
            p1:'加油~~'
        }
        alert('constructor')
    }

    componentWillMount(){
        alert("componentWillMount");
        this.setState({
            p1:'WillMount'
        });
    }

    componentDidMount(){
        alert("componentDidMount");
        setTimeout(()=>{
            this.setState({
                p1:'DidMount'
            });
        },1000)       
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.state.p1}</h2>          
            </div>      
    )
    } 
}

ReactDOM.render(<App 
    // title="将前端坚持到底555！"
/>, 
    document.getElementById('root'),
);

if(module.hot){
    module.hot.accept();
}
