show dbs //查看数据库 ，如果没有，则需要插入一条数据；
use userInfo  //创建userInfo 数据库
db.userInfo.insert({"name":"Hlp"}) //给userInfo库创建一条数据
db.dropDatabase() // 加入到数据库后执行这个命令可以删除数据库；


db.createCollection("test") //创建一个test集合
show tables  //展示所有集合
db.userInfo.drop() //删除集合