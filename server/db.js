const mysql = require("mysql");
const connection = mysql.createConnection({
    host:'localhost',
    user :'root',
    port:3306,
    password:'Narinder@1234',
    database:'register',
    insecureAuth : true
});
const poolPromise = connection.connect(function(err){
    if (err) throw err;
    // connection.query("select * from register",function(err, result){
    //     if (err) throw err;
    //     console.log("all result are here",result[0])
   console.log("connected successfully!!!!!!!!");    
})

module.exports = connection;