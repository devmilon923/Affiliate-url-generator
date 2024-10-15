const User = require("../models/user");
const { setCookie } = require("../services/servies");

async function showCreate(req, res) {
  res.render("create");
}

async function postCreate(req, res) {
  try {
    const createUser = await User.create({
      ...req.body,
    });
    const token = setCookie(createUser);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      error: "Something is not valid.",
    });
    console.log(error);
  }
}

module.exports = {
  showCreate,
  postCreate,
};
