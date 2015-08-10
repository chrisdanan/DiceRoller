var main = function(){
	"use strict";

	console.log("Let's roll some dice, Vane!");

	$("#roll-btn").on("click", function(){
		console.log("You rolled the dice.");
	});
};

$(document).ready(main);