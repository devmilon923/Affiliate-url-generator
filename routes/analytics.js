const express = require("express");
const route = express.Router();
const Url = require("../models/url");

route.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Url.findById({
    _id: id,
  });
  console.log(data);
  res.render("analytics", {
    visits: data,
  });
});

module.exports = route;
