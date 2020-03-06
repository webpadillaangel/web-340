/*
============================================
; Title:  padilla-exercise-3.2.js
; Author: Angel Padilla
; Date:   6 March 2020
; Modified By: 
; Description: Application to practice how to configure, test, and use Morgan
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var today = new Date().toLocaleDateString('en-US');

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: today + " - logging when the message ocurred."
  });
});

// changed port number, I was having issues with port 8080
http.createServer(app).listen(8081, function() {
  console.log("Application started on port 8080");
});