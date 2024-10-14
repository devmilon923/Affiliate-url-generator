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
    });
    res.status(201).render("home", {
      url: `http://localhost:3000/url/${result.shortUrl}`,
    });
  } catch (error) {
    res.status(501).render("home", {
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
};
