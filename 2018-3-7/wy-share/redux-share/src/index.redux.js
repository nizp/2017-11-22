import react from 'react'
const ADD_GUN = 'ADD_GUN';
const REMOVE_GUN = 'REMOVE_GUN';

//创建reducer函数

export function counter(state=0,action){
    switch(action.type){
        case ADD_GUN:
            return state+1;
            break;
        case REMOVE_GUN:
            return state-1;
            break;
        default:
            return 10;
    }
}

//action creator
export function addGun(){//store.dispatch({type:ADD_GUN})
    return {type:ADD_GUN}
}
export function removeGun(){
    return {type:REMOVE_GUN}
}