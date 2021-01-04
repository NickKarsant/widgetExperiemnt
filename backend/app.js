const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mongoose = require("mongoose");
const mongoDB = require("mongodb");
const seedDB = require("./seed");

const Campground = require('./models/campground');

const campRouter = require("./routes/new");
const allCampsRouter = require("./routes/index");

// connect to database
mongoose
  .connect("mongodb://localhost:27017/widgetYelp", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("WidgetYelp database connected");
  })
  .catch(err => {
    console.log("OH NO ERROR!");
    console.log(err);
  });

const db = mongoose.connection;
// db.on('error', console.error.bind(console, "connection error:"));
// db.once('open', function(){
//   console.log("WidgetYelp database connected")
// });




// seed database
seedDB();


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/index", allCampsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
