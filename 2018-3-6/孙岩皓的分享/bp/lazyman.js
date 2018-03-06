function LazyMan(name){
　　return new _lazyman(name);
}
// 这就是个构造函数

function _lazyman(name) {
　　this.task = [];
　　let that = this;

　　let fn = ((name) =>{
　　　　　　　　return () =>{
　　　　　　console.log(`Hi! This is ${name} !` );
　　　　　　that.next();
　　　　}
　　})(name);

　　this.task.push(fn);  //相当于队列

　　setTimeout(function(){that.next()},0)
}


_lazyman.prototype = {
　　constructor:_lazyman,

　　next:function(){
　　　　let fn = this.task.shift();
　　　　fn&&fn();
　　},  //执行顺序！！！！！

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
　　　　　　　　console.log( `Eat ${food}` );
　　　　　　　　that.next();}
          })(food)
　　　　　　this.task.push(fn);
　　　　　　return this;
　　　　}
　　}
