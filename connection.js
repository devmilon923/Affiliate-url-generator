const mongoose = require("mongoose");

async function dbConnect() {
  return mongoose.connect(process.env.MONGODB_URI);
}

module.exports = dbConnect;
