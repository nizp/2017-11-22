import {combineReducers,createStore} from 'redux'; //1，第一步
const num = 0;
//2.创建一个或者一堆reducer
const reducer1 = (state = num, action) => {
    switch (action.type) {
        case "ADD":
            return  ++ action.num;
        default:
            return state
    }
}
//3.把一个或者一堆reducer包在combineReducers中

const reducer = combineReducers({reducer1});
//4.把合并后一组reducer导出去。
export default reducer;






