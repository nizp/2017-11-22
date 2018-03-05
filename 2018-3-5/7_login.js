const http = require('http');
const fs = require('fs');
const urlObj = require('url');
const queryString = require('querystring');

/*
    http://localhost:80/user

    act:login  登陆
        username:姓名
        pass:123456

    http://localhost:80/user?act=login&username=杰涛&pass=123

    return {code:0,msg:'成功'}  

    code
        0 -> 成功
        1 -> 没有这个用户
        2 -> 账号或密码错误

    
    act:add  注册
        username:姓名
        pass:123456

    http://localhost:80/user?act=add&username=杰涛&pass=123

    return {code:0,msg:'成功'}  

    code
        0 -> 成功
        1 -> 没有这个用户

*/

let miaoSql = [
    {
        username:'chaoxue',
        pass:123
    },
    {
        username:'wangyan',
        pass:123
    },
    {
        username:'姚辉栋',
        pass:123
    }
]; 
http.createServer((req,res)=>{
    
    let url = req.url;

    url = (url === '/')?'/index.html':url;

    //接口
    if(url.includes('/user')){
        let msgObj = {}; //给前端返回的数据
        /*
            url

            /user?act=login&username=杰涛&pass=123
        */
        console.log(queryString.parse(urlObj.parse(url).query));

        let arr = url.split('?')[1].split('&');//act=login&username=杰涛&pass=123
        /*
            {
                act:'login',
                username:'xxxx',
                pass:123
            }
        */
        let obj = {};
        arr.forEach(e=>{
            let arr = e.split('=');
            obj[arr[0]] = arr[1];
        });
        
        //let act = str.find((e)=>e.includes('act')).split('=')[1];
        // console.log(decodeURI(obj.username));
        let userObj = miaoSql.find((e)=>e.username == decodeURI(obj.username)) 
        switch(obj.act){
            case 'login' :
                //登录逻辑
                
                if(userObj){//有没有用户名
                    if(userObj.pass == obj.pass){
                        msgObj.code = 0;
                        msgObj.msg = '登录成功';
                    }else{
                        msgObj.code = 2;
                        msgObj.msg = '用户名或密码错误';
                    }
                }else{
                    //没有这个用户
                    msgObj.code = 1;
                    msgObj.msg = '没有这个用户';
                }
            break;
            case 'add':
                if(!userObj){
                    //没有这个人才能注册

                    // console.log(obj);
                    miaoSql.push({
                        username:decodeURI(obj.username),
                        pass:obj.pass
                    });
                    // console.log(miaoSql)
                    msgObj.code = 0;
                    msgObj.msg = '注册成功';
                }else{
                    msgObj.code = 1;
                    msgObj.msg = '用户名已被占用';
                }
            break;
        }

        res.write(JSON.stringify(msgObj));
        res.end();

    }else{
        //静态文件
        // fs.readFile('www'+url,()=>{

        // })
        
        try {
            let data = fs.readFileSync('www'+url);
            res.write(data.toString());
            res.end();
        } catch (error) {
            // console.log(error);
            let data = fs.readFileSync('www/404.txt');
            res.write(data.toString());
            res.end();
        }
    }



}).listen(80);