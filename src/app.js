 const express = require("express");

 const app = express(); //web app on server

 app.get("/user/:userId/:name",(req, res) => {
   console.log(req.params); //in url queryParams http://localhost:3000/user/200/Tejaswini
    res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
 });

 app.get("/user",(req, res) => {
   console.log(req.query); //in url queryParams http://localhost:3000/user?userId=200
    res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
 });


 app.listen(3000, ()=>{
    console.log("server is listening successfully");
    
 }); //listen on that app