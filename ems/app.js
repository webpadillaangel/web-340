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
const path = require("path");
const logger = require("morgan");

var Employee = require("./models/employee");

// mLab connection

var mongoDB =
  "mongodb+srv://aapadilla:aapadilla1@buwebdev-cluster-1-lmhnx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

let app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

var employee = new Employee({
  firstName: "Angel",
  lastName: "Padilla"
});

// serving up the assets directory with static files (css, images)
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    pageName: "home"
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

// updating port to 8016
http.createServer(app).listen(8016, function() {
  console.log("Application started on port 8016!");
});
