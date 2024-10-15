const express = require("express");
const { postLogin, showLogin } = require("../controllers/login");

const route = express.Router();


route.get("/",showLogin);
route.post("/",postLogin);

module.exports = route;
