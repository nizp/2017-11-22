import React from 'react';
import {connect} from 'react-redux';
import * as createtors from '../reducer/ceateors';
class C2 extends React.Component {
    constructor(){
        super();
        this.click = this.click.bind(this);
    }
    click(){
        let {dispath,add,rm,reduer1} = this.props;
        dispath(add(reduer1));
    }
    render() { 
        let {dispath,add,rm,reduer1} = this.props;
        return (
            <div>
                <h1>C2</h1>
                <button
                    onClick={this.click}
                    >+</button>
                <span>{reduer1}</span>
                <button
                    onClick={()=>{
                        dispath(rm());
                    }}
                >-</button>
            </div>
        )
    }
}

C2 = connect((state)=>state,(dispath)=>{
    createtors.dispath = dispath;
    return createtors;
})(C2);
export default C2;