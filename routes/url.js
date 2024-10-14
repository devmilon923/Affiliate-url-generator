const express = require("express");
const {
  handleUrlPost,
  handleUrlVisit,
  handleUrlGet,
} = require("../controllers/url");

const route = express.Router();

route.post("/", handleUrlPost);
route.get("/:id", handleUrlVisit);
route.get("/", handleUrlGet);

module.exports = route;
