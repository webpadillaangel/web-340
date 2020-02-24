/*
============================================
; Title:  padilla-exercise-1.5.js
; Author: Professor Krasso
; Date:   23 Feb 2020
; Modified By: Angel Padilla
; Description: Program to practice creating a web server by using node's HTTP built in module, and responding with a message.
;===========================================
*/

// Variable declaration:
var http = require("http");

function processRequest(req, res) {
  var body = "Hello Web 340 Class! This is the server response.";

  var contentLength = body.length;

  res.writeHead(200, {
    "Content-Length": contentLength,

    "Content-Type": "text/plain"
  });

  res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);
