const express = require("express");
const app = express();
const urlRoute = require("./routes/url.js");
const staticRoute = require("./routes/staticRoute.js");
const dbConnect = require("./connection");
app.set("view engine", "ejs");
dbConnect()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);
app.use("/", staticRoute);
app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});
