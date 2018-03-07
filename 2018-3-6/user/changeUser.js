const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
let Cat = new User({
    username:'chaoxue',
    password:'321'
});

Cat.save().then(()=>console.log('添加成功!'))

router.post('/add',function(req,res){
    
});


module.exports = router;