const mongoose = require('mongoose');
const uModel = mongoose.model('user',require('../schema/userSchema'));
module.exports = uModel;