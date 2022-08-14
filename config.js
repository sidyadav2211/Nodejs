const  mysql = require('mysql');

const  con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'kailash_db'
})

con.connect((err)=>{
    if(err){
        console.log('error',err)
    }
})

module.exports= con;