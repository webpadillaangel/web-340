/*
============================================
; Title:  padilla-exercise-1.3.js
; Author: Professor Krasso
; Date:   20 Feb 2020
; Modified By: Angel Padilla
; Description: Program to practice the use of the require node method. Also, parsing out the url to get the protocol, host, and the query of the url.
;===========================================
*/

var url = require("url");

var parsedURL = url.parse("https://www.angelpadilla.com/user?last-name=padilla");

// logging the protocol of the parsedUrl - https:
console.log(parsedURL.protocol);

// logging the host of the parsedUrl - www.angelpadilla.com
console.log(parsedURL.host);

// logging the query portion of the prarsedUrl - last-name=padilla
console.log(parsedURL.query);


/*
output:
https:
www.angelpadilla.com
last-name=padilla
*/