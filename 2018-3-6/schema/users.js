const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let blogSchema = new Schema({
    username:String,
    password:String,
    content:{
        type:Array,
        default:[]
    }
});

module.exports = blogSchema;