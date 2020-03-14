/*
============================================
; Title:  padilla-exercise-4.3.js
; Author: Professor Krasso
; Date:   13 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");
// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.3"));

var express = require("express");
var http = require("http");

var app = express();

// status code object
var statusCodes = {
    404: "Page Not Found :( ...  ",
    200: "Everything is A OK :) ...",
    501: "Error: The page is not implemented. Please try again later..."
}

app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: statusCodes[404]
  });
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: statusCodes[200]
  });
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: statusCodes[501]
  });
});

// updated port to 8081
http.createServer(app).listen(8081, function() {
  console.log("Application started on port 8081!");
});
