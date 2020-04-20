/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   12 April 2020
; Modified By: Angel Padilla
; Description: Demonstrates everything we have covered, creating server, taking requests, responding to requests, and serving pages (by using templates/layouts)
;              Added MongoDB connection
;===========================================
*/

// Importing padilla-header file
const header = require("../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Milestone 4 - EMS"));

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const mongoose = require("mongoose");
const Employee = require("./models/employee");

// mLab connection
var mongoDB =
  "mongodb+srv://aapadilla:aapadilla1@buwebdev-cluster-1-lmhnx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

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
app.set('port', process.env.PORT || 8080);

// use statements - logging, body parser (encoding urls), XSS, and cross site forgery
app.use(logger("short"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(helmet.xssFilter());

// actual usage for Cross-Site Forgery protection by using the token.
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
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

app.get("/list", function (req, res) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    res.render("list", {
      title: "Employee List",
      pageName: "list",
      employees: employees,
    });
  });
});

// posting url where form requests get processed.
app.post("/process", function (req, res) {
  if (!req.body.firstName && !req.body.lastName) {
    res.status(400).send("Entries must have all fields filled out.");
    return;
  }

  // get the request's form data
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const info = req.body.info;

  //console.log(firstName, lastName, email, info);

  // create a employee model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName,
    email: email,
    info: info,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(
        `${firstName} ${lastName} ${email} ${info} saved successfully!`
      );
      res.redirect("/list");
    }
  });
});

// get individual record
app.get("/view/:empId", function (req, res) {
  const empId = req.params["empId"];

  Employee.find({ _id: empId }, function (err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      if (employee.length > 0) {
        console.log(employee);
        res.render("view", {
          title: "Employee Record",
          pageName: "employeeRecord",
          employee: employee,
        });
      } else {
        res.redirect("/");
      }
    }
  });
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port ' + app.get('port'));
});