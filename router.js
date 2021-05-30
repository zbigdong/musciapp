const express = require("express");
const routers = express.Router();
// const app = express();
var User = require("./db");

routers.post("/logins", (req, res, next) => {
  var { username, password } = req.body;

  console.log(username, password);

  User.findOne({ username })
    .then((user) => {
      // console.log(user);
      console.log(user[0].password, password);
      // console.log(password,user.password);
      // var {username,password} = user[0]
      console.log(user[0].password === password);
      if (user[0].password === password) {
        res.send({ code: true, msg: "登陆成功" });
      } else {
        res.send({ code: false, msg: "密码不正确!" });
      }
    })
    .catch(() => {
      res.send("账号未注册");
    });
});

module.exports = routers;

//接收requestpaybody
// var str = "";
// req.on("data", function (dt) {
//   str += dt;
// });
// req.on("end", function () {
//   console.log(str);
// });

// str = String(str)
// var obj = JSON.parse(str);
// console.log(obj);
