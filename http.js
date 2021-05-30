// var str = '{"username":"zwd","password":"123"}'
// console.log(str);
// obj = JSON.parse(str)
// console.log(obj.username);
var user =[ { _id: '60a8d4ea31f6643144ee4ce6',
    username: 'zwd',
    password: 123,
    __v: 0 } ]

console.log(user[0].username);
    var {username,password} = user[0]
console.log(username,password);