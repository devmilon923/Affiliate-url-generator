const mongoose = require("mongoose");

async function dbConnect() {
  return mongoose.connect(
    "You Database URL"
  );
}

module.exports = dbConnect;
