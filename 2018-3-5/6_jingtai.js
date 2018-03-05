const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    let url = req.url; //  /?  /index.html
    url = (url === '/') ? '/index.html':url;
    if(!url.includes('?')){
        fs.readFile('www' + url,(err,data)=>{
            if(err){
                console.log('404');
                fs.readFile('www/404.txt',(err,data)=>{
                    res.write(data.toString());
                    res.end();
                })
            }else{
                res.write(data.toString());
                res.end();
                console.log(data);
            }
        })
    }
}).listen(80);
