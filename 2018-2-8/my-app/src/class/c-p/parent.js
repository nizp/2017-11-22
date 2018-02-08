import React from 'react';
import Child from './child';
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            arr:[1,2,3,4]
        }
    }
    cNum = (id,newVal) => {
        let arr = this.state.arr.concat();
        arr[id] = newVal;
        this.setState({ arr });
    }
    click = () => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.push(9);
        this.setState({ arr: arr2 });
    }
    render() { 

        let list = this.state.arr.map((e,i)=>{
            return <Child {...{
                key:i,
                txt:e,
                id:i,
                cNum:this.cNum
            }}/>
        })
        return ( 
            <div>
                <p>{this.state.arr}</p>
                <button onClick={this.click}>按钮</button>
                <hr />
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
 
export default App;