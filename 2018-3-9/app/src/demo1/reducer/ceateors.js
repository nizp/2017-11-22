// import {createStore} from 'redux';
// import reducer from './Reducer';
// const store = createStore(reducer);
const addCreateor = (num) => { 
    return {
        type:"ADD",
        num
    }
}
const removeCreateor = () => { 
    return {
        type:"REMOVE"
    }
}

export {removeCreateor,addCreateor}



// export function add(num){
//     store.dispatch(addCreateor(num));
// }

// export function remove(){
//     store.dispatch(removeCreateor());
// }


