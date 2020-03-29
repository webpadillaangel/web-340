/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 March 2020
; Modified By: Angel Padilla
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

// Importing padilla-header file
var header = require("../../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 6.3"));

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://aapadilla:aapadilla1@buwebdev-cluster-1-lmhnx.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("short"));

// create server updated port to 8082
http.createServer(app).listen(8082, function() {
  console.log("Application connected to port 8082!");
});