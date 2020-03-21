/*
============================================
; Title:  padilla-exercise-5.2.js
; Author: Professor Krasso
; Date:   21 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.2"));

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var names = ["Angel", "Karen", "Axel", "David"];

app.get("/", function(request, response) {
  response.render("index", {
    names: names
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
