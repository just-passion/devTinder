 const express = require("express");

 const app = express(); //web app on server

 app.use("/user", (req, res, next) => {
   //Route Handler
   console.log("1st response");
   // res.send("1st Response");  
   next();
 });

 app.use("/user", (req, res, next) => {
   //Route Handler
   console.log("2nd response");
   res.send("2nd Response");
 });

 app.listen(3000, ()=>{
    console.log("server is listening successfully");
    
 }); //listen on that app