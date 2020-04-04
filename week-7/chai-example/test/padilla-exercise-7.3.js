/*
============================================
; Title:  padilla-exercise-7.3.js
; Author: Professor Krasso
; Date:   3 April 2020
; Modified By: Angel Padilla
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

// Importing padilla-header file
var header = require("../../../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 7.3"));

var fruits = require("../padilla-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
