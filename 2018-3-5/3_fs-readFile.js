const fs = require('fs');
/*
    fs.readFile('路径',回调函数(err,data)) err就是失败，data你要的数据
    一般数据都是Buffer格式的，要用toString()转一下
*/
fs.readFile('1.txt',(err,data)=>{
    if(err){
        console.log('404');
    }else{
        console.log(data.toString());
    }

})