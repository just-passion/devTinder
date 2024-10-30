const express = require("express");
const { userAuth } = require("../middlewares/auth");
const userRouter = express.Router();
const ConnectionRequest = require("../models/connectionRequest");
//get all the pending connection requests for the logged in user
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {  
    const loggedInUser = req.user;
    const connectionRequests = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    });
    
    res.json({
        message: "Data fetched successfully",
        data: connectionRequests
    })
  } catch (error) {
    res.statusCode(400).send("ERROR: " + error.message);
  }
});
module.exports = userRouter;
