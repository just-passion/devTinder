const mongoose = require("mongoose");
const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //reference to the USER collection
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignore", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect`,
      },
    },
  },
  {
    timestamps: true,
  }
);

connectionRequestSchema.pre("save", function () {
  //called before save
  const connectionRequest = this;
  //check if from and to user id is same
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Cannot send request to yourself");
  }
});

const connectionRequestModel = new mongoose.model(
  "connectionRequest",
  connectionRequestSchema
);

module.exports = connectionRequestModel;
