const express = require("express");
const { showAllUrls } = require("../controllers/home");
const auth = require("../middlewares/auth.js");
const route = express.Router();

route.get("/",auth, showAllUrls);

module.exports = route;
