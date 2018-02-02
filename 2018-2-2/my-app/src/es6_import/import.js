import {xx} from './import2';
/*
    import:

        引入需要的文件
        import浏览器不直接支持,需要通过babel去转

    export:
        导出

        export {变量名}    import {变量名} from '文件的地址'

        export default 变量名    import 变量名 from '文件的地址'

        export function fn(){}   import {变量名} from '文件的地址'


*/

// export function fn(){
//     return 2;
// }
function fn(){
    return 2;
}

let a = 10 + xx();

console.log(a);

export {a,fn}



// export {fn};
// export default fn;

