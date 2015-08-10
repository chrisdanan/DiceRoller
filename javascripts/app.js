var main = function(){
	"use strict";

	var startNum, endNum;

	console.log("Let's roll some dice, Vane!");

	$("#normalDice").on("click", function(){
		console.log("Regular Dice clicked");

		$("#startNum").prop("disabled", true);
		$("#endNum").prop("disabled", true);
	});

	$("#numberedDice").on("click", function(){
		console.log("Numbered Dice clicked");

		$("#startNum").prop("disabled", false);
		$("#endNum").prop("disabled", false);
	});

	$("#roll-btn").on("click", function(){
		console.log("You rolled the dice.");

		startNum = $("#startNum").val();
		endNum = $("#endNum").val();

		console.log(startNum);
		console.log(endNum);
	});
};

$(document).ready(main);