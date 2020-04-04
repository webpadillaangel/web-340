/*
============================================
; Title:  padilla-exercise-7.2.js
; Author: Professor Krasso
; Date:   3 April 2020
; Modified By: Angel Padilla
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

// Importing padilla-header file
var header = require("../../../padilla-header");

// logging header
console.log(header.display("Angel", "Padilla", "Exercise 7.2"));

var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

function getFruits(str) {
  return str.split(",");
}

module.exports = getFruits;
