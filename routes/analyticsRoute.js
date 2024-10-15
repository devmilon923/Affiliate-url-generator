const express = require("express");
const { showAnalytics } = require("../controllers/analytics");
const route = express.Router();


route.get("/:id",showAnalytics);

module.exports = route;
