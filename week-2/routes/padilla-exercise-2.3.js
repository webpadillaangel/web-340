/*
============================================
; Title:  padilla-exercise-2.3.js
; Author: Angel Padilla
; Date:   29 Feb 2020
; Modified By: 
; Description: Application to practice the use of installing express via npm, creating/deploying a local server and requesting/responding to certain route request
;===========================================
*/

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
  response.statusCode = 404;

  response.end("404!");
});

http.createServer(app).listen(8080);
