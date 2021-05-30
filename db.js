/*
// 能操作users集合数据的Model
//  */
// // 1.引入mongoose
const mongoose = require('mongoose')

// // // 2.字义Schema(描述文档结构)

var schema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: Number, require: true },
    hasCard: false,
  });


// // 3. 定义Model(与集合对应, 可以操作集合)
var User = mongoose.model("users", schema);


// // 4. 向外暴露Model
module.exports = User