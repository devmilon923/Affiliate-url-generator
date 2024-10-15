const { checkCookie } = require("../services/servies");
const User = require("../models/user");

async function auth(req, res, next) {
  const cookie = req.cookies.token;
  console.log("Cookie:", cookie);

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

module.exports = auth;
