var mysql = require('mysql');
var fs=require("fs");
var a=require("readline-sync");

const option={
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Karishma@123",
        database:"mydb"
    }
}
const knex=require("knex")(option);

enter=a.question("What do you want to do login:signup:-")
if (enter=="signup"){
    user_name=a.question("enter the user name:")
    console.log("the password length should be 8 1)capital letter(A-Z)\n 2)small letter(a-z)\n 3)number(0-9)\n 4)special character(@#$%^&*)")
    password=a.question("enter the password:")
    confirm_password=a.question("enter the confirm password:")
    if (password==confirm_password){
        console.log("confirm password is correct")

        // knex.schema.createTable('loginknex', (table) => {
//                 table.string("name ")
//                 table.string('password')
//                 table.string('confirm password')

//             }).then(() =>console.log("table created"))
//              .catch(() => { console.log("table already exist")})
            
            const cars = [
                { name: user_name, password: password },]
            knex('loginknex').insert(cars)
            .then(() =>{
            console.log("data inserted")})
            .catch((err) => {
            console.log("data didn't inserted")
            });
        }
    }
// }

else{
    if(enter=="login"){
    user_name=a.question("enter the user name:")
    password=a.question("enter the password:")

    knex.from("loginknex").select("*")
    .then((results)=>{
        // console.log(results)
    var found=results.find(function(enter){
        if(enter.user_name==user_name && enter.password==password){
            console.log("login",enter)
            // return enter
        }
    })
        if (found){
            console.log("login successfully")
            // console.log(found)
        }else{
            console.log("user not found")
        }
    })
    .catch((err)=>{
        console.log(err)
})
}
}
