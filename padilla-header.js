/*
============================================
; Title:  padilla-header.js
; Author: Professor Krasso
; Date:   08 March 2020
; Modified By: Angel Padilla
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
}
