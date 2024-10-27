 const express = require("express");

 const app = express(); //web app on server

 app.get("/user",(req, res) => {
    res.send({firstName: "Tejaswini", lastName: "Veerapur"});//response to incoming req
 });

 app.post("/user",(req, res) => {
   res.send("Data saved to the DB");//response to incoming req
});

 app.listen(3000, ()=>{
    console.log("server is listening successfully");
    
 }); //listen on that app