/*
============================================
; Title:  padilla-exercise-2.4.js
; Author: Angel Padilla
; Date:   1 March 2020
; Modified By: 
; Description: Application to practice the use of installing express via npm and creating and deploying a local server also telling express to use the ejs engine. Render up an index view
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request, response) {
  response.render("index", {
    firstName: "Angel",
    lastName: "Padilla",
    address: "9999 West Paris Avenue, Alaska"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080.");
});