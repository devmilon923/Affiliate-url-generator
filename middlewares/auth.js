const { checkCookie } = require("../services/servies");
const User = require("../models/user");

async function auth(req, res, next) {
  const cookie = req.cookies.token;

  // Check if cookie is missing
  if (!cookie) {
    return res.redirect("./login");
  }

  try {
    // Await the result from checkCookie (assuming it returns a Promise)
    const verifyResult = await checkCookie(cookie);

    // Check if verification failed
    if (!verifyResult) {
      return res.redirect("./login");
    }

    const user = await User.findOne({ email: verifyResult.email });

    // If user is found, attach user info to the request object
    if (user) {
      req.userInfo = user;
      return next();
    } else {
      // Redirect if user is not found
      return res.redirect("./login");
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res.redirect("./login");
  }
}

function role(roles) {
  return function (req, res, next) {
   
    if (
      roles.length <= 1 &&
      !roles.includes("ADMIN") &&
      !roles.includes("NORMAL")
    )
      return res.end("Unauthorized");
    if (!roles.includes(req.userInfo.permission))
      return res.end("Unauthorized");
    return next();
  };
}

module.exports = { auth, role };
