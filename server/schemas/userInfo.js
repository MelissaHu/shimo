var mongoose = require("mongoose");
var userSchemas = mongoose.Schema({//声明这个集合并添加所用字段
    phoneNo : { type:String },
    password:{ type:String },
    time : { type:Date, default:Date.now },
})
module.exports = userSchemas;
