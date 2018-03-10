import React from 'react';
import C2 from './child2';
import {connect} from 'react-redux';
class C1 extends React.Component {
    render() { 
        let {reduer1} = this.props;
        return (
            <div>
                <h1>C1我只是个过客! {reduer1}</h1>
                <C2/>
            </div>
        )
    }
}
 
C1 = connect((state)=>state)(C1);
export default C1;