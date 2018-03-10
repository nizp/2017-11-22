import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(){
        super();
        this.click = this.click.bind(this);
    }
    click() {
        alert(this);
    }
    render() { 
        return (
            <div>
                <button onClick={this.click}>点击</button>
            </div>
        )
    }
}

if (module.hot) {
    module.hot.accept();
}
   
ReactDOM.render(<App />, document.getElementById('app'));
