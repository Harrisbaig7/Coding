var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var empRouter = require("./routes/emp");

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var empRouter = require("./app_server/routes/emp");

var mongoose = require("mongoose");

var app = express();

mongoose
  .connect("mongodb://0.0.0.0:27017/mydb")
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Database connection error:", err));

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/emp", empRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler //last middleware for error handling of prev middlewares
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
