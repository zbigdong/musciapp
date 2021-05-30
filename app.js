// const express = require('express')
const express = require("express");

const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const router = require("./router");
app.use(router);

//链接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("were connected!");
});


// var User = require('./db')
// router.get("/data", function (req, res) {
//   User.find({ username: "zwd" }, function (err, doc) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(doc);
//       console.log(doc)
//     }
//   });
// });


//定一个表格的模板

// var User = mongo.Schema({
//     username: String,
//     password:String
//   });

//给表加了一个方法
// User.methods.reqs = function (u,p) {
//   var name = this.name
//   var pasword =this.pasword
//   if(u==='name'&&p===pasword){
//       return true
//   }
//   else return false

// }

// var User1 = mongo.model('users', User);

// var u1 = new User1({'username':'zwd','password':'123'})

// u1.save()

// console.log(u1.reqs);
//设置跨域访问
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.post('/',(n,p)=>{
//    console.log(reqs(n,p));
// })

// module.exports = router;
