/*
============================================
; Title:  padilla-exercise-4.3.js
; Author: Professor Krasso
; Date:   15 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates CRUD operations in Node.js API
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.4"));

var express = require("express");
var http = require("http");

var app = express();


app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

// updated the port to 8081
http.createServer(app).listen(8081, function() {
  console.log("Application started on port 8081!");
});