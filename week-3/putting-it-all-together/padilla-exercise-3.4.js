/*
============================================
; Title:  padilla-exercise-3.4.js
; Author: Professor Krasso
; Date:   08 March 2020
; Modified By: Angel Padilla
; Description: Base server configurations for
;              a fully working Express application.
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");
// logging header
console.log(header.display("Angel", "Padilla", "Exercise 3.4"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "home page"
  });
});

app.get("/about", function(request, response) {
  response.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(request, response) {
  response.render("products", {
    message: "products page"
  });
});

// modified port number due to issues with port 8080
http.createServer(app).listen(8081, function() {
  console.log("Application started on port 8081.");
});
