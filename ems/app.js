/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates everything we have covered, creating server, taking requests, responding to requests, and serving pages (by using templates/layouts)
;              Added MongoDB connection
;===========================================
*/

// Importing padilla-header file
const header = require("../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Milestone 3 - ems"));

const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const logger = require("morgan");
const helmet = require("helmet");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

var Employee = require("./models/employee");

// mLab connection

var mongoDB =
  "mongodb+srv://aapadilla:aapadilla1@buwebdev-cluster-1-lmhnx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// set up of cross-site forgery protection
let csrfProtection = csrf({ cookie: true });
let app = express();

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// use statements - logging, body parser (encoding urls), XSS, and cross site forgery
app.use(logger("short"));
bodyParser.urlencoded({
  extended: true,
});
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);

// actual usage for Cross-Site Forgery protection by using the token.
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});

var employee = new Employee({
  firstName: "Angel",
  lastName: "Padilla",
});

// serving up the assets directory with static files (css, images)
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home page",
    pageName: "home",
  });
});

// additional about page
app.get("/about", function (request, response) {
  response.render("about", {
    title: "About Us",
    pageName: "about",
  });
});

// additional contact us page
app.get("/contact", function (request, response) {
  response.render("contact", {
    title: "Contact Us",
    pageName: "contact",
  });
});

// new page - redirects users to the 'new' page.
app.get("/new", function (req, res) {
  res.render("new", {
    title: "New Employee",
    pageName: "new",
  });
});

// posting url where form requests get processed.
app.post("/process", function (req, res) {
  console.log(request.body.firstName);
  if (!req.body.firstName && !req.body.lastName) {
    res.status(400).send("Entries must have a first and last name");
    return;
  }

  // get the request's form data
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  console.log(firstName, lastName);

  // create a employee model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(`${firstName} ${lastName} saved successfully!`);
      res.redirect("/");
    }
  });
});

// updating port to 8017
http.createServer(app).listen(8019, function () {
  console.log("Application started on port 8017!");
});
