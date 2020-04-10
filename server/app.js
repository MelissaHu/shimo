const express = require('express');
const app = express()
const bodyParser=require("body-parser");
const session = require("express-session");
const port =3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DATABASE_DEMO1');
const userInfo = require("./model/register.js")



app.use(session({
	secret:"keyboard cat",//用它来对session cookie签名，防止篡改
	resave:false, //强制保存session即使它并没有变化 （默认： true, 建议设为：false）
	saveUninitialized:true,
	cookie:('name','value',{maxAge:5*60*1000,secure:false})
	//session cookie设置 （默认：{ path: ‘/‘, httpOnly: true,secure: false, maxAge: null }）
}))


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  })



app.post('/toLogin',bodyParser.json(),(req,res)=>{
	userInfo.find({phoneNo: req.body.username,password:req.body.password}, function(err, doc){//doc查到的数据
		if(err){return};
		if(doc.length){
		    req.session.userinfo=req.body.username
	        res.send({
		        code:'200',
				msg:'登录成功',
				data:{
					username:req.body.username
				}
	        })
		}else{
			res.send({
		        code:'401',
		        msg:'用户名或者密码错误'
	        })
		}
	})
})

// app.use('/',(req,res)=>{
//    if(req.session.userinfo){
// 	   res.send('hello'+req.session.userinfo);
//    }else{
// 	   res.send('未登录')
//    }
// })

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
				password:params.password
			});
			user.save(function(err, doc){//第一个参数为错误对象，第二个为当前存储的对象
				if(err){return};
				res.json({//没有错误就返回数据给前端
					code: 0,
					msg: "注册成功",
					data:{
						phoneNo:params.phoneNo,
						password:params.password
					}
				})
			})
		}
	})

})
app.listen(port,()=>console.log(`Example app listening on port ${port}`))