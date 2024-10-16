const User = require("../models/user");
const { setCookie } = require("../services/servies");

function showLogin(req, res) {
  res.render("login");
}

async function postLogin(req, res) {
  const find = await User.findOne({
    ...req.body,
  });
  if (find) {
    const token = setCookie(find);
    if (token === null) return res.redirect("/login");

    res.cookie("token", token);
    res.redirect("/");
  } else {
    res.render("login", {
      error: "User not found!",
    });
  }
}

module.exports = {
  showLogin,
  postLogin,
};
