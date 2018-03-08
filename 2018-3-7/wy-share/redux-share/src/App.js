import React,{Component} from 'react';

class App extends Component {
    render() { 
        const store = this.props.store;
        const num = store.getState();
        const addGun = this.props.addGun;
        const removeGun = this.props.removeGun;
        return (
            <div>
                <h2>现在有武器{num}把</h2>
                <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
                <button onClick={()=>store.dispatch(removeGun())}>回收武器</button>
            </div>
         )
    }
}
 
export default App;