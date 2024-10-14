const mongoose = require("mongoose");

async function dbConnect() {
  return mongoose.connect("Your Database URl Here....");
}

module.exports = dbConnect;
