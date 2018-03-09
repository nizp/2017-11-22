import {combineReducers} from 'redux';
const reduer1 = (state=0,action) => {
    switch(action.type){
        case 'ADD':
            let num = action.num;
            num ++;
            return num;
        case 'REMOVE':
            return -- state;
        default :
            return state;
    }
}

const reducer = combineReducers({reduer1});

export default reducer;


