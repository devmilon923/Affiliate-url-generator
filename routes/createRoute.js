const express = require("express");
const { showCreate, postCreate } = require("../controllers/create");

const route = express.Router();

route.get("", showCreate);
route.post("", postCreate);

module.exports = route;
