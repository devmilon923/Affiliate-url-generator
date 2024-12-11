const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    mainUrl: {
      type: String,
      require: true,
    },
    shortUrl: {
      type: String,
      require: true,
      unique: true,
    },
    history: [{ timestamp: { type: Number } }],
    ip: [{ ipAddress: { type: String } }],
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },

  { timestamps: true }
);

const Url = mongoose.model("url", urlSchema);
module.exports = Url;
