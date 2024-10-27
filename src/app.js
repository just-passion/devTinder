 const express = require("express");

 const app = express(); //web app on server

 app.use("/getUserData", (req, res) => {
   try{
      throw new Error("new error");
   }
   catch(err){
      res.status(500).send("Some error occured contact support team");
   }
   // res.send("User Data sent");
 })

 app.listen(3000, ()=>{
    console.log("server is listening successfully");
 }); //listen on that app