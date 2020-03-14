/*
============================================
; Title:  padilla-exercise-4.2.js
; Author: Professor Krasso
; Date:   13 March 2020
; Modified By: Angel Padilla
; Description: Create simple json get request. 
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");
// logging header
console.log(header.display("Angel", "Padilla", "Exercise 4.2"));

var express = require("express");
var http = require("http");
var app = express();

app.get("/student/:id", function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: "Angel",
    lastName: "Padilla",
    favoriteFoods: ["Pizza", "BBQ", "Fried Chicken"],
    studentId: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
