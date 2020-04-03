const express = require('express');
const app = express()
const bodyParser=require("body-parser");
const port =3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DATABASE_DEMO1');
const userInfo = require("./model/register.js")

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  })

app.post('/toLogin',bodyParser.json(),(req,res)=>{
    res.jsonp({'login':'123'})
})
app.post('/toRegister',bodyParser.json(),(req,res)=>{
	let params = {
		phoneNo:req.body.phoneNo,
		password:req.body.password
	}

  userInfo.find({phoneNo: params.phoneNo}, function(err, doc){//doc查到的数据
		if(err){return};
		if(doc.length){
			res.json({
				code: 1,
				msg: "用户名已存在"
			})
		}else{
			//操作数据库，存储数据
			let user = new userInfo({//实例化mongo数据库文档的model
				phoneNo: params.phoneNo,
				password:req.body.password
			});
			user.save(function(err, doc){//第一个参数为错误对象，第二个为当前存储的对象
				if(err){return};
				res.json({//没有错误就返回数据给前端
					code: 0,
					msg: "注册成功"
				})
			})
		}
	})

})
app.listen(port,()=>console.log(`Example app listening on port ${port}`))