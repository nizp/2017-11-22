// import {fn} from './es6_import/import.js';
import {fn,a as b} from './es6_import/import.js';

// import {fn} from './es6_import/import.js';
// import {a as b} from './es6_import/import.js';

let a = 8;
let f = fn();

console.log(f + a + b); 

if(module.hot){
  module.hot.accept();
}
