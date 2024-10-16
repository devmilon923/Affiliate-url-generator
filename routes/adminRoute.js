const express = require("express");
const { handleAllUrl } = require("../controllers/url");
const { auth, role } = require("../middlewares/auth.js");

const route = express.Router();

route.get("/urls", auth, role(["ADMIN"]), handleAllUrl);

module.exports = route;
