const Url = require("../models/url");
async function showAnalytics(req,res){
    const id = req.params.id;
    
    const data = await Url.findById({
      _id: id,
    });
   
    res.render("analytics", {
      visits: data,
    });
}

module.exports={
    showAnalytics,
}