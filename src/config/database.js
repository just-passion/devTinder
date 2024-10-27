const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:NamasteDev@namastenode.esn20.mongodb.net/"
  ); //returns a promise
};

module.exports = connectDB;