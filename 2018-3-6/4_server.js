const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const swig = require('swig');
app.set('views', './www');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.use(function(req,res,next){
    // req.cookies = new cookieParser(req,res);
    try {
        req.c = req.cookies.userInfo || '{}';
        console.log(req.c)
    } catch (error) {}

    next();
});


app.use('/user',require('./user/changeUser'));
app.use('/www',express.static('www'));

mongoose.connect('mongodb://localhost:27022/test')
.then(function(error){
    if(error){
        console.log('失败');
        return;
    }
    app.use('/',function(req,res,next){
        console.log(req.c)
        res.render('index',{
            title:JSON.parse(req.c)
        });
    });
    app.listen(88);
    console.log('数据库链接成功');

});


