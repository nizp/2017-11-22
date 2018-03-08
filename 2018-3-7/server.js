const express = require('express');
const mongoose = require('mongoose');
const app = express();

/*
    1.安装mongoose
    2.创建数据的模板 -> schema文件
    3.通过模板去映射数据 -> model文件
    4.使用model -> changeUser文件中的 User变量

    链接数据库:
        mongoose.connect('mongodb://127.0.0.1:27023/test')
        .then(()=>{成功})
        .catch(()=>{失败})
*/

app.use(express.static('www'));
app.use('/user',require('./user/changeUser'));

mongoose.connect('mongodb://127.0.0.1:27023/test')
.then((data)=>{
    console.log('数据库链接成功');
    app.listen(80);
}).catch((err)=>{
    console.log('数据库链接失败');
})



