const express = require("express");
const requestsRouter = express.Router();
const User = require("../models/user");
const ConnectionRequest = require("../models/connectionRequest");
const mongoose = require("mongoose");
const { userAuth } = require("../middlewares/auth");

requestsRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const allowedStatus = ["ignore", "interested"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({
          message: "Invalid status type" + status,
        });
      }

      if (!mongoose.Types.ObjectId.isValid(toUserId)) {
        return res.status(400).json({
          message: "Invalid user ID",
        });
      }

      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      //check if there is already a connection
      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
          { fromUserId: fromUserId, toUserId: toUserId },
          { fromUserId, toUserId },
        ],
      });

      if (existingConnectionRequest) {
        return res.status(400).send({
          message: "Connection request already sent",
        });
      }

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({
        message:
          req.user.firstName + " is " + status + " in " + toUser.firstName,
        data,
      });
    } catch (error) {
      res.status(400).send("ERROR: " + error.message);
    }
  }
);

requestsRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const { status, requestId } = req.params;

      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({ message: "Status not allowed" });
      }

      const connectionRequest = await ConnectionRequest.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "interested",
      });

      if (!connectionRequest) {
        return res
          .status(404)
          .json({ message: "Connection request not found" });
      }

      connectionRequest.status = status;

      const data = await connectionRequest.save();
      res.json({ message: "Connection request " + status, data });
    } catch (error) {
      res.status(400).send();
    }
  }
);

module.exports = requestsRouter;


//User 8 sent to user 10 interested. User 10 accepted