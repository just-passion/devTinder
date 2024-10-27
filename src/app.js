 const express = require("express");

 const app = express(); //web app on server

 app.get("/user",(req, res) => {
    res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
 });

 app.post("/user",(req, res) => {
   res.send("Data saved to the DB");//response to incoming req
});

app.get("/ab?c",(req, res) => { //b is optional
   res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
});

app.get("/ab+c",(req, res) => { //b can be 1 or more
   res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
});

app.get("/ab*c",(req, res) => { //anything can be between b and c
   res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
});

app.get("/a(bc)?d",(req, res) => { //bc is optional
   res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
});

app.get(/a/,(req, res) => { //if a is there anywhere
   res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
});

//can use regex patterns for routes

 app.listen(3000, ()=>{
    console.log("server is listening successfully");
    
 }); //listen on that app