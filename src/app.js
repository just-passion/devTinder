const express = require("express");
const connectDB = require("./config/database");

const app = express(); //web app on server

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
