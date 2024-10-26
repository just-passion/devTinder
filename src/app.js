 const express = require("express");

 const app = express(); //web app on server

 app.use("/test",(req, res) => {
    res.send("Hello from the server");//response to incoming req
 });

 app.listen(3000, ()=>{
    console.log("server is listening successfully");
    
 }); //listen on that app