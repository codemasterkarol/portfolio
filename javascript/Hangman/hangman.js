$(init);

// Initialize by loading a new word when the page loads.
	function init() { 
		$(document).ready(newWord);
	}
	
// Declare all global variables
	var secretWord; // secret word variable
	var letters = Array(); // array for splitting the secret word into
	var dashes = Array(); // array for showing how many blanks are in the word
	var m = 1; // count for changing hangman display

// Call newWord function when New Game button is clicked.
	$("#newGame").click(newWord);

// newWord function
	function newWord() {
		secretWord = randomWords[Math.floor(Math.random()*randomWords.length)]; // pick random word from secret word array
		if (letters.join("") == secretWord) {secretWord = randomWords[Math.floor(Math.random()*randomWords.length)]; }; // check to ensure randomization
		letters = []; // clear word array from previous game if applicable
		dashes = [];  // clear blanks array from previous game if applicable
		$("button").removeClass("guessed"); // clear all buttons
		$("button").removeAttr("disabled"); // re-enable all buttons
		$("#wordReveal").html("").hide("slow"); // hide previous winning word if applicable
		$("#right").css('background-image', 'url("images/base.gif")'); // reset hangman board
		m = 1; // reset hangman display variable
		letters = secretWord.split(""); // split secret word up into letters array
		for (var i = 0; i < secretWord.length; i++) { dashes.push("_"); }	 // put in underscores to indicate how many letters are in secret word
		$("#word").html(dashes.join(" ")); // print out dashes for player view
	}
	
// guess function, runs on each guess
	function guess() {
					
		// get letter guess from button click
			var n = $(this).attr('id');
			
		// if no letters, add to hangman
			if ($.inArray(n, letters) == -1) { $("#right").css('background-image', 'url("images/hangman' + m + '.gif")'); m = m + 1;
			}
			
			if (m > 6) { 
				alert("You Lose!");
				$("#wordReveal").html(letters).show("slow");
			}
		
		
		// replace dashes if guessed letters exist in secret word
			for (var i = 0; i < letters.length; i++) { 
				if (letters[i] == n) { 
				dashes[i] = n;
			}
			
		// display guessed letters when matched
			$("#word").html(dashes.join(" "));			
	}
		
		// Search for remaining dashes, if none, user wins. 
		if ($.inArray("_", dashes) == -1) { 
			alert("You Win!");
		}		
		
		// block out letter and disable it from future use
			$(this).addClass("guessed");
			$(this).attr('disabled', 'disabled');
		
	} // end function guess


// Letter Guess Functions

	$("#a").click(guess);	$("#b").click(guess);	$("#c").click(guess);	$("#d").click(guess);	$("#e").click(guess);	$("#f").click(guess);
	$("#g").click(guess);	$("#h").click(guess);	$("#i").click(guess);	$("#j").click(guess);	$("#k").click(guess);	$("#l").click(guess);
	$("#m").click(guess);	$("#n").click(guess);	$("#o").click(guess);	$("#p").click(guess);	$("#q").click(guess);	$("#r").click(guess);
	$("#s").click(guess);	$("#t").click(guess);	$("#u").click(guess);	$("#v").click(guess);	$("#w").click(guess);	$("#x").click(guess);
	$("#y").click(guess);	$("#z").click(guess);