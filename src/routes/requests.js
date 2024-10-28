const express = require("express");
const requestsRouter = express.Router();
const User = require("../models/user");

const { userAuth } = require("../middlewares/auth");

requestsRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  res.send(user.firstName + "connection request sent");
});

module.exports = requestsRouter;
