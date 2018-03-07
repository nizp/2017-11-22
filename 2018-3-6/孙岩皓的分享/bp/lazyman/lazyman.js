function LazyMan(name){
　　return new _lazyman(name);
}
// 这就是个构造函数  为了访问函数上的原型

function _lazyman(name) {
　　this.task = [];       //等同于该函数的原型上的js执行队列
　　let that = this;

　　let fn = ((time) =>{
　　　　　　　　return () =>{
　　　　　　console.log(`Hi! This is ${name} !!!!` );
　　　　　　that.next();
　　　　}
　　})(name);

　　this.task.push(fn);

　　setTimeout(function(){that.next()},0)
}


_lazyman.prototype = {
　　constructor:_lazyman,     //指向构造函数！！！！！

　　next:function(){
　　　　let fn = this.task.shift();
　　　　fn&&fn();
　　},

　　sleep:function(time){
　　　　let that = this;
　　　　let fn = ((time) =>{
　　　　　　　　return () =>{
　　　　　　　　console.log(`Wake up after ${time} ms!` );
　　　　　　　　setTimeout(function(){
　　　　　　　　　　that.next();
　　　　　　　　},time)
　　　　　　}
　　　　})(time);
　　　　this.task.push(fn);

　　　　return this;

　　},

　　sleepfirst:function(time){
　　　　let that = this;
　　　　let fn = ((time) =>{
　　　　　　　　return () =>{
　　　　　　　　console.log(`Wake up after ${time} ms!`);
　　　　　　　　setTimeout(function(){
　　　　　　　　　　that.next();
　　　　　　　　　　},time)
　　　　　　　　}
　　　　　　})(time);
　　　　this.task.unshift(fn);
　　　　return this;
　　},


　　eat:function(food){
　　　　let that  =  this;
　　　　let fn  =  ((food) =>{
　　　　　　　　return () =>{
　　　　　　　　console.log( `Eat ${food}~~~~~` );
　　　　　　　　that.next();
          }
})(food)
　　　　　　this.task.push(fn);
　　　　　　return this;
　　　　}
　　}
