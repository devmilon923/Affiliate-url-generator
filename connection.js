const mongoose = require("mongoose");

async function dbConnect() {
  return mongoose.connect(
    "Your Database URL"
  );
}

module.exports = dbConnect;
