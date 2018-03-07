/*
    requrie()

    http

    createServer((req,res)=>{
        res.write('');
        res.end();
    }).listen(80);

    fs.readFile('www/index.html',(err,data)=>{
        if(err){
            //404
        }else{
            res.write(data.toString());
            res.end();
        }
    })

    try{
        let data = fs.readFileSync('www'+url);
    }catch(err){

    }

    onreadystatechange
    doScroll('left')
    DOMContentLoaded


    req.on('data')
    req.on('end')

    url模块 -> http://www.baidu.com/user?name=hehe -> 

    http://www.baidu.com/user
    url.query = name=hehe

    querystring
        name=hehe ->  {
            name:'hehe'
        }
*/

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    let url = req.url;
    fs.readFile('www'+url,(err,data)=>{
        // console.log(err);
        if(err){
            console.log(123);
        }

    });
}).listen(80);