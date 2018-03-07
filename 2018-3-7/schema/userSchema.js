const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username:String,
    password:String,
    date: { type: Number, default:new Date().getTime() },
    arr:{
        type:Array,
        default:[]
    }
});

module.exports = blogSchema;