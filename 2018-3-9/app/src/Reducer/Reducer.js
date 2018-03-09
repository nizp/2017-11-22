import {createStore,combineReducers} from 'redux';

const fn = (state=0,action) => {
    switch(action.type){
        case 'ADD':
            return ++ action.num 
    }
    return state;
}

const reducer = combineReducers({fn});

export default reducer;