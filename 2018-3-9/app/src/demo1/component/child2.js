import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../reducer/ceateors';
class C2 extends React.Component {
    constructor(){
        super();
        this.click = this.click.bind(this);
    }
    click(){
       let  {dispatch,addCreateor,reducer1} = this.props;

    //    dispatch(add(reducer1));
        
        dispatch(addCreateor(reducer1))

        // console.log();

    }
    render() { 
        let {reducer1} = this.props;
        console.log(reducer1);

        return (
            <div>
                <h3 onClick={this.click}>C2能拿到父级{reducer1}</h3>
            </div>
        )
    }
}

/*
    connect(fn1,fn2)

    fn1 = mapStateToProps = (state) => {
        state === reducer中的数据
    }  


    fn2 = mapDispatchToProps = (dispatch) => {
        dispatch = store.dispatch
    }
*/
C2 = connect((state)=>{
    return state;
},(dispatch)=>{
    actionCreators.dispatch = dispatch; 
    return actionCreators;
})(C2);
export default C2;