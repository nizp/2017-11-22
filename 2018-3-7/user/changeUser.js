const express = require('express');
const router = express.Router();
const User = require('../model/userModel'); 
const queryS = require('querystring');

router.get('/add',function(req,res){ //  /user/add
    // console.log('进来了');
    let obj = {};
    let urlObj = queryS.parse(req.url.split('?')[1]);
    let query = User.where({'username':urlObj.username});

    query.findOne((err,data)=>{
        if(data){
            obj.code = 1;
            obj.msg = '用户名已被占用';
            res.json(obj);
            return;
        }else{
            new User({
                username:urlObj.username,
                password:urlObj.password
            }).save(()=>{
                obj.code = 0;
                obj.msg = '注册成功';
                res.json(obj);
                return;
            });
        }   
    });

});
router.get('/login',function(req,res){ //  /user/login
    let obj = {};
    let urlObj = queryS.parse(req.url.split('?')[1]);
    let query = User.where({'username':urlObj.username});
    query.findOne(function(err,data){
        if(err){
            return handleError(err);
        }
        //有这条数据
        if(data){
            if(data.password == urlObj.password){
                obj.code = 0;
                obj.id = data.id;
                obj.msg = '登录成功';
            }else{
                obj.code = 1;
                obj.msg = '用户或密码错误';
            }
        }else{
            // console.log('没有这个数据');
            obj.code = 2;
            obj.msg = '用户未注册';
        }
        setTimeout(function(){
            res.send(JSON.stringify(obj));
        },3000);
    });
});
module.exports = router;