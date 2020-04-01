let mongoose = require("mongoose");
let userSchemas = require("../schemas/userInfo");//加载刚定义好的schema
let user = mongoose.model("userInfo", userSchemas);//第一个参数定义该集合名称，第二个schema
module.exports = user;
