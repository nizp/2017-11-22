import React from 'react';
import C2 from './child2';
class C1 extends React.Component {
    render() { 
        let {num} = this.props;
        return (
            <div>
                <h1>C1能拿到父级{num}</h1>
                <C2/>
            </div>
        )
    }
}
 
export default C1;