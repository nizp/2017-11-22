export function add(num){
    return {
        type:"ADD",
        num
    }
}
export function rm()=>(getState, dispatch)=>{
    if(getState().x===1){
        dispatch( {
            type:"REMOVE"
        })
    }
}