//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var roll = function(normal){
	"use strict";

	var min, max;

	if(normal){
		return Math.floor(Math.random() * (6)) + 1;
	} else{
		min = parseInt($("#startNum").val());
		max = parseInt($("#endNum").val());

		if(isNaN(min) || isNaN(max)){
			min = 1;
			max = 6;
		}

		if(min < 0){
			min = 0;
		}

		if(max < 1){
			max = 1;
		}

		if(min > 999){
			min = 999;
		}

		if(max > 1000){
			max = 1000;
		}

		if(max <= min){
			max = min + 1;
		}

		$("#startNum").val(min);
		$("#endNum").val(max);

		console.log("Min: " + min);
		console.log("Max: " + max);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};

var showDice = function(value, type){
	"use strict";

	var $die = $("<div>");

	if(type === "normal"){
		$die.addClass("normal-die");

		switch(value){
			case 1:
				$die.addClass("Die1");
				break;
			case 2:
				$die.addClass("Die2");
				break;
			case 3:
				$die.addClass("Die3");
				break;
			case 4:
				$die.addClass("Die4");
				break;
			case 5:
				$die.addClass("Die5");
				break;
			case 6:
				$die.addClass("Die6");
				break;
			default:
				$die.addClass("Die1");
				break;
		}
	} else if(type === "numbered"){

		var $die = $("<div>").addClass("die");
		var $content = $("<div>").addClass("content");
		var $table = $("<div>").addClass("table");
		var $tableCell = $("<div>").addClass("table-cell");

		$tableCell.append(value);

		$table.append($tableCell);
		$content.append($table);
		$die.append($content);
	}

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
				showDice(rollValue, "normal");

			}
		} else if(selected === $("#numberedDice").val()){
			console.log("Numbered Dice rolled");

			for(var i = 0; i < numDice; i++){
				rollValue = roll(false);
				diceThrows.push(roll(false));
				showDice(rollValue, "numbered");
			}
		}

		console.log(diceThrows);
	});
};

$(document).ready(main);