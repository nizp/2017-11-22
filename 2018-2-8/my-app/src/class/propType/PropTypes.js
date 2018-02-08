import React from 'react';
import Btn from './list';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:'10'
        }
    }
    cNum = (num) => {
        this.setState({ num });
    }
    render() { 
        return (
           <div>
               <Btn num={this.state.num} cNum={this.cNum}/>
           </div>
        )
    }
}
 
export default App;