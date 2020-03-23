
/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   22 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates everything we have covered, creating server, taking requests, responding to requests, and serving pages (by using templates/layouts)
;===========================================
*/

// Importing padilla-header file
var header = require("../padilla-header");
var express = require("express");
// logging header
console.log(header.display("Angel", "Padilla", "Exercise 5.4 - ems"));

var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

http.createServer(app).listen(8081, function() {
    console.log("Application started on port 8081!");
});