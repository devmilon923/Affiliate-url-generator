const jwt = require("jsonwebtoken");
const privateKey = "Your Private Key";

function setCookie(userData) {
  try {
    const token = jwt.sign(
      {
        name: userData.name,
        email: userData.email,
      },
      privateKey
    );
    return token;
  } catch (error) {
    return null;
  }
}

function checkCookie(cookie) {
  if (!cookie) return null;
  try {
    const verify = jwt.verify(cookie, privateKey);
    return verify;
  } catch (error) {
    return null;
    
  }
}

module.exports = { setCookie, checkCookie };
