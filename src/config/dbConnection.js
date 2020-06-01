const mysql = require('mysql');

const mysqlConnection = mysql.createConnection( {
  host: "localhost",
  user: "root",
  password: "",
  database: "task"
});
mysqlConnection.connect(function(err){
  if(err)
  {
    console.log(err);
    return;
  }
  else{
    console.log('db is connect')
  }
});
module.exports=mysqlConnection;