const Url = require("../models/url");

async function showAllUrls(req, res) {
  try {

    const allUrl = await Url.find({
      createBy: req.userInfo._id,
    });

    return res.render("home", {
      urls: allUrl,
    });
  } catch (error) {
    return res.status(404).render("home", {
      error: "Somthing want worng!",
    });
  }
}

module.exports = {
  showAllUrls,
};
