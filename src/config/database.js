const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:NamasteDev@namastenode.esn20.mongodb.net/devTinder" //devTinder is DB name
  ); //returns a promise
};

module.exports = connectDB;