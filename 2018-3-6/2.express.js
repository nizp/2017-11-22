const express = require('express');
const app = express();

app.use(express.static('www'));

let miaoSq = [
    {
        name:'一刀',
        pass:4321
    },
    {
        name:'孙岩皓',
        pass:123
    }
]
app.get('/user',(req,res)=>{
    let obj = {}
    let urlObj = req.query;
    let userObj = miaoSq.find(e=>e.name === urlObj.name);
    if(userObj){
        console.log(urlObj.pass,userObj.pass)
        if(urlObj.pass == userObj.pass){
            obj.code = 0;
            obj.msg = '成功'; 
        } else {
            obj.code = 1;
            obj.msg = '用户名或密码错误'; 
        }  
    }else{
        obj.code = 2;
        obj.msg = '没有这个用户'; 
    }
    res.send(JSON.stringify(obj));
});


app.listen(80);
