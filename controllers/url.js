const Url = require("../models/url");
const shortid = require("shortid");

async function handleUrlPost(req, res) {
  const mainUrl = req.body.mainUrl;
  const shortUrl = shortid.generate();
  try {
    const result = await Url.create({
      mainUrl: mainUrl,
      shortUrl: shortUrl,
      history: [],
      createBy: req.userInfo._id,
    });
    res.status(201).render("home", {
      url: `https://affiliate-url-generator-production.up.railway.app/${result.shortUrl}`,
    });
  } catch (error) {
    res.status(501).render("home", {
      error: "Somthing want worng!",
    });
  }
}

async function handleAllUrl(req, res) {
  try {
    const allUrl = await Url.find({});

    return res.render("home", {
      urls: allUrl,
    });
  } catch (error) {
    return res.status(404).render("home", {
      error: "Somthing want worng!",
    });
  }
}

async function handleUrlVisit(req, res) {
  const id = req.params.id;
  console.log(id);
  const data = await Url.findOneAndUpdate(
    {
      shortUrl: id,
    },
    {
      $push: {
        history: {
          timestamp: Date.now(),
        },
        ip: {
          ipAddress: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
        },
      },
    }
  );
  res.redirect(data.mainUrl);
}
function handleUrlGet(req, res) {
  res.redirect("/");
}
module.exports = {
  handleUrlPost,
  handleUrlVisit,
  handleUrlGet,
  handleAllUrl,
};
