/*
============================================
; Title:  padilla-exercise-5.3.js
; Author: Professor Krasso
; Date:   21 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates the Pug view engine.
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.3"));

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Pug Pug Pug! Welcome to my Pug based homepage!"
  });
});

// changed port to 8081
http.createServer(app).listen(8081, function() {
  console.log("Application started on port 8081!");
});
