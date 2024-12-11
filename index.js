// All packages
const express = require("express");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");

const { auth, role } = require("./middlewares/auth.js");

// Import all routes
const urlRoute = require("./routes/urlRoute.js");
const adminRoute = require("./routes/adminRoute.js");
const homeRoute = require("./routes/homeRoute.js");
const analyticsRoute = require("./routes/analyticsRoute.js");
const loginRoute = require("./routes/loginRoute.js");
const createRoute = require("./routes/createRoute.js");
// DB connection
const dbConnect = require("./connection");
app.set("view engine", "ejs");
dbConnect()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

// Express data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes controls
app.use("/url", auth, urlRoute);
app.use("/admin", auth, adminRoute);
app.use("/", homeRoute);
app.get("/logout", (req, res) => {
  // This could be handled on the client-side, but for a server response:
  res.clearCookie("token"); // if you're storing the token in a cookie
  res.redirect("/login"); // Redirect to login or homepage
});
// app.use("/", homeRoute); Eikhaney auth use kora hoi nai karon eita holo root url eiikhany use korle root er sokol sub url/path gula tew apply hobe tay eiita 'homeRoute' theke auth use kora hoice

app.use("/analytics", auth, analyticsRoute);
app.use("/login", loginRoute);
app.use("/create", createRoute);

// listen app on 3000 port
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at ${process.env.PORT || 3000} port`);
});
