/*
============================================
; Title:  padilla-exercise-3.3.js
; Author: Angel Padilla
; Date:   03 March 2020
; Description: Demonstrates advanced routing
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response) {

  var employeeId = parseInt(request.params.employeeId, 10);

  response.render("index", {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8081, function() { // updated port number
  console.log("Application started on port 8081"); 
});