//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var roll = function(normal){
	"use strict";

	var min, max;

	if(normal){
		return Math.floor(Math.random() * (6)) + 1;
	} else{
		min = parseInt($("#startNum").val());
		max = parseInt($("#endNum").val());

		console.log("Min: " + min);
		console.log("Max: " + max);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};

var main = function(){
	"use strict";

	var selected = $("#normalDice").val(),
		numDice,
		diceThrows = [];

	console.log("Let's roll some dice, Vane!");

	$("#normalDice").on("click", function(){
		console.log("Regular Dice clicked");

		selected = $("#normalDice").val();

		$("#startNum").prop("disabled", true);
		$("#endNum").prop("disabled", true);
	});

	$("#numberedDice").on("click", function(){
		console.log("Numbered Dice clicked");

		selected = $("#numberedDice").val();

		$("#startNum").prop("disabled", false);
		$("#endNum").prop("disabled", false);
	});

	$("#roll-btn").on("click", function(){
		diceThrows = [];
		numDice = $("#numDice").val();

		console.log("You rolled the dice.");

		if(selected === $("#normalDice").val()){
			console.log("Normal Dice rolled");

			for(var i = 0; i < numDice; i++){	
				diceThrows.push(roll(true));
			}
		} else if(selected === $("#numberedDice").val()){
			console.log("Numbered Dice rolled");

			for(var i = 0; i < numDice; i++){
				diceThrows.push(roll(false));
			}
		}

		console.log(diceThrows);
	});
};

$(document).ready(main);