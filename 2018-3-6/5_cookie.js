const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


app.use(cookieParser())
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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
app.get('/',(req,res,next)=>{
    if(req.cookies.user){
        res.send('欢迎'+req.cookies.user+'回来');
    }
    next();
});

app.use(express.static('www'));

app.post('/user',urlencodedParser,(req,res)=>{
    let obj = {}
    let urlObj = req.body;
    let userObj = miaoSq.find(e=>e.name === urlObj.name);
    if(userObj){
        // console.log(urlObj.pass,userObj.pass)
        if(urlObj.pass == userObj.pass){
            obj.code = 0;
            obj.msg = '成功'; 
            console.log(decodeURI(urlObj.name)+'')
            res.cookie('user',decodeURI(urlObj.name));
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
