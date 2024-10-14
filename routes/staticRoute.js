const express = require("express");
const route = express.Router();
const Url = require("../models/url");

route.get("/", async (req, res) => {
  try {
    const allUrl = await Url.find({});
    console.log(allUrl[0]._id);
    return res.render("home", {
      urls: allUrl,
    });
  } catch (error) {
    return res.status(404).render("home", {
      error: "Somthing want worng!",
    });
  }
});

module.exports = route;
