const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express(); //web app on server

app.use(express.json()); //middleware to convert json to js object

app.post("/signup", async (req, res) => {
   const user = new User(req.body);

   try{
      await user.save(); //returns a promise
      res.send("User added successfully");
   }
   catch(err){
      res.status(400).send("Error saving the user" + err.mesage)
   }
})

connectDB()
  .then(() => {
    console.log("Database connected successfully");

    //listen only after successfull API connection
    app.listen(3000, () => {
      console.log("server is listening successfully");
    }); //listen on that app
  })
  .catch((err) => {
    console.log("Databse cannot be connected");
  });
