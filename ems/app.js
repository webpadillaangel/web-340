/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates everything we have covered, creating server, taking requests, responding to requests, and serving pages (by using templates/layouts)
;===========================================
*/

// Importing padilla-header file
var header = require("../padilla-header");
// logging header
console.log(header.display("Angel", "Padilla", "Milestone 1/2 - ems"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

// serving up the static css file
app.use(express.static(path.join(__dirname, 'assets')));

var employees = [
  {
    firstName: "Angel",
    lastName: "Padilla",
    email: "aapadilla@ems.com"
  },
  {
    firstName: "John",
    lastName: "Adams",
    email: "jadams@ems.com"
  },
  {
    firstName: "Phillip",
    lastName: "Kern",
    email: "pkern@ems.com"
  }
];

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    pageName: "home",
    employees: employees
  });
});

app.get("/about", function(request, response) {
  response.render("about", {
    title: "About Us",
    pageName: "about"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    title: "Contact Us",
    pageName: "contact"
  });
});

http.createServer(app).listen(8012, function() {
  console.log("Application started on port 8012!");
});
