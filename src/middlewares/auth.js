const jwt = require("jsonwebtoken");
const User = require("../models/user");

const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthrized request");
  } else {
    next();
  }
};

const userAuth = async (req, res, next) => {
  try {
    //read token from request cookies
    const { token } = req.cookies;
    if(!token){
      throw new Error("Token is not valid");
    }
    const decodedObj = await jwt.verify(token, "DEV@12345");
    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("Uesr not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR " + err.message)
  }

  //validate the token

  //find the user
};

module.exports = {
  adminAuth,
  userAuth,
};
