const mongoose = require("mongoose");

async function dbConnect() {
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = dbConnect;
