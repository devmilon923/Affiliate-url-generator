const mongoose = require("mongoose");

async function dbConnect() {
  return mongoose.connect("mongodb://127.0.0.1:27017/short-url");
}

module.exports = dbConnect;
