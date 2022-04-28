var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Karishma@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE whatspp", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Karishma@123",
//   database:"whatspp"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE whatspp (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("TABLE created");
//   });
// });



// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Karishma@123",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO whatspp (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });


// var mysql = require('mysql');`42`  
// const knex=require('knex')
// console.log(knex);
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Karishma@123",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM whatspp", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });




