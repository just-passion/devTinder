const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth.js");

const app = express(); //web app on server

//Middleware use
app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res, next) => {
  res.send("Middleware of /user will be called for this");
});

app.get("/user/login", (req, res, next) => {
  res.send("Middleware of /user will not be called for this");
});

app.get("/admin/getAllData", (req, res, next) => {
  res.send("Admin authorized, getAllData");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.send("Admin authorized, deleted a user");
});

app.listen(3000, () => {
  console.log("server is listening successfully");
}); //listen on that app
