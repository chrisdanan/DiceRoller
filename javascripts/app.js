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

var showDice = function(value){
	"use strict";

	var $die = $("<div>").addClass("die");
	var $content = $("<div>").addClass("content");
	var $table = $("<div>").addClass("table");
	var $tableCell = $("<div>").addClass("table-cell");

	$tableCell.append(value);
	$table.append($tableCell);
	$content.append($table);
	$die.append($content);

	$("#dice").append($die).hide().fadeIn();
};

var main = function(){
	"use strict";

	var selected = $("#normalDice").val(),
		numDice,
		rollValue,
		diceThrows = [];

	console.log("Let's roll some dice, Vane!");

	$("#normalDice").on("click", function(){
		console.log("Regular Dice clicked");

		selected = $("#normalDice").val();

		$("#startNum").prop("disabled", true).toggleClass("disabled");
		$("#endNum").prop("disabled", true).toggleClass("disabled");
		$("#start-label").toggleClass("disabled");
		$("#end-label").toggleClass("disabled");
	});

	$("#numberedDice").on("click", function(){
		console.log("Numbered Dice clicked");

		selected = $("#numberedDice").val();

		$("#startNum").prop("disabled", false).toggleClass("disabled");
		$("#endNum").prop("disabled", false).toggleClass("disabled");
		$("#start-label").toggleClass("disabled");
		$("#end-label").toggleClass("disabled");
	});

	$("#roll-btn").on("click", function(){
		diceThrows = [];
		numDice = $("#numDice").val();

		console.log("You rolled the dice.");

		$("#dice").empty();

		if(selected === $("#normalDice").val()){
			console.log("Normal Dice rolled");

			for(var i = 0; i < numDice; i++){
				rollValue = roll(true);
				diceThrows.push(rollValue);
				showDice(rollValue);

			}
		} else if(selected === $("#numberedDice").val()){
			console.log("Numbered Dice rolled");

			for(var i = 0; i < numDice; i++){
				rollValue = roll(false);
				diceThrows.push(roll(false));
				showDice(rollValue);
			}
		}

		console.log(diceThrows);
	});
};

$(document).ready(main);