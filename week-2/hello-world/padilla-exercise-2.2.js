/*
============================================
; Title:  padilla-exercise-2.2.js
; Author: Angel Padilla
; Date:   29 Feb 2020
; Modified By: 
; Description: Application to practice the use of installing express via npm and creating and deploying a local server listening to requests on port 8080.
;===========================================
*/

// assigning express framework to express variable
var express = require("express");
var http = require("http");
var app = express();

app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

// running server app, and listening on port 8080. When the server gets a request we will be logging some text including the request url and responding with "Hello World" text to end the connection
http.createServer(app).listen(8080);
