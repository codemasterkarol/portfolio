$(init);

// Initialize Validation, Generate Random Number
		
		function init(){
			$('#guessForm :input').blur(function() {
				$('#guessForm').validate().form();
			});
		}
		
		// Display Gameboard on Click
		$("#showGame").click(function openUp() {
			$("#gameBlock").show(1000);	
			$("#1").focus();
		});

// Generate random 4 digit number and check for duplication, regenerating random numbers as needed.
				var secret1 = Math.floor(Math.random() * 9);
				var secret2 = Math.floor(Math.random() * 9);
				var secret3 = Math.floor(Math.random() * 9);
				var secret4 = Math.floor(Math.random() * 9);
				
				while (secret2 === secret1) {
						secret2 = Math.floor(Math.random() * 9); }
				while ((secret3 === secret2) || (secret3 === secret1)) {
						secret3 = Math.floor(Math.random() * 9); }
				while ((secret4 === secret3) || (secret4 === secret2) || (secret4 === secret1)) {
						secret4 = Math.floor(Math.random() * 9); }
						
						
									
// Set Guess Count To Zero
		var i = 0;

		
// FOR TESTING -- display secret number
		//$("#secretNumber").html(secret1 + "" + secret2 + "" + secret3 + "" + secret4).show("fast");	
	

// Guess Function on Click	
		$("#guess").click(function check() {
				"use strict";
					
		// Pull user guesses from input fields.
				var num1 = $("#1").val();
				var num2 = $("#2").val();
				var num3 = $("#3").val();
				var num4 = $("#4").val();
				
		// Display error message if user numbers are duplicated.
				if ((num1 == num2) || (num1 == num3) || (num1 == num4) || (num2 == num3) || (num2 == num4) || (num3 == num4)) {
					alert("Please only use each number once!").stopImmediatePropagation();
				}
											
		// Increases Guess Count
				i = i + 1;
						
				var iBulls = 0;
				var iCows = 0;	
				
					
		// Find Cows and Bulls.	
				
				if (num1 == secret1) { iBulls = iBulls + 1; }
					else if (num1 == secret2) { iCows = iCows + 1; }
						 if (num1 == secret3) { iCows = iCows + 1; }
						 if (num1 == secret4) { iCows = iCows + 1; }
				
				if (num2 == secret2) { iBulls = iBulls + 1; }
					else if (num2 == secret1) { iCows = iCows + 1; }
						 if (num2 == secret3) { iCows = iCows + 1; }
						 if (num2 == secret4) { iCows = iCows + 1; }
				
				if (num3 == secret3) { iBulls = iBulls + 1; }
					else if (num3 == secret1) { iCows = iCows + 1; }
						 if (num3 == secret2) { iCows = iCows + 1; }
						 if (num3 == secret4) { iCows = iCows + 1; }
	
				if (num4 == secret4) { iBulls = iBulls + 1; }
					else if (num4 == secret1) { iCows = iCows + 1; }
						 if (num4 == secret2) { iCows = iCows + 1; }
						 if (num4 == secret3) { iCows = iCows + 1; }
				
				var cowDisplay = $("#cows").html();
				
				if (iCows == 0) { cowDisplay = "<strong>" + iCows + "</strong>" }
					else if (iCows == 1) { cowDisplay = "<strong>" + iCows + "</strong>&nbsp;&nbsp;&nbsp;" + cowDisplay }
					else if (iCows == 2) { cowDisplay = "<strong>" + iCows + "</strong>&nbsp;&nbsp;&nbsp;" + cowDisplay + "" + cowDisplay }
					else if (iCows == 3) { cowDisplay = "<strong>" + iCows + "</strong>&nbsp;&nbsp;&nbsp;" + cowDisplay + "" + cowDisplay + "" + cowDisplay }
					else if (iCows == 4) { cowDisplay = "<strong>" + iCows + "</strong>&nbsp;&nbsp;&nbsp;" + cowDisplay + "" + cowDisplay + "" + cowDisplay + "" + cowDisplay }
					
				var bullDisplay = $("#bulls").html();
				if (iBulls == 0) { bullDisplay = "<strong>" + iBulls + "</strong>" }
					else if (iBulls == 1) { bullDisplay = "<strong>" + iBulls + "</strong>&nbsp;&nbsp;&nbsp;" + bullDisplay }
					else if (iBulls == 2) { bullDisplay = "<strong>" + iBulls + "</strong>&nbsp;&nbsp;&nbsp;" + bullDisplay + "" + bullDisplay }
					else if (iBulls == 3) { bullDisplay = "<strong>" + iBulls + "</strong>&nbsp;&nbsp;&nbsp;" + bullDisplay + "" + bullDisplay + "" + bullDisplay }
					else if (iBulls == 4) { bullDisplay = "<strong>" + iBulls + "</strong>&nbsp;&nbsp;&nbsp;" + bullDisplay + "" + bullDisplay + "" + bullDisplay + "" + bullDisplay }
		
			// Display guesses
				var guessStr = $("#guesses").html();
				$("#guesses").html(guessStr + "<br /><table><tr><td><strong>GUESS #" + i + "</strong></td><td>" + num1 + "" + num2 + "" + num3 + "" + num4 + "</td><td><strong>COWS:</strong> <td class='result'>" + cowDisplay + "</td><td><strong> BULLS:</strong></td><td class='result'>" + bullDisplay + "</td></tr></table>").show("slow"); 
			
					goToByScroll("guessForm");
						
			$("#1").focus().select();
					
			// Reset cow and bull display after guess
					cowDisplay = "";
					bullDisplay = "";
			
			// Winner Process			
					if ((num1 == secret1) && (num2 == secret2) && (num3 == secret3) && (num4 == secret4)) { 
					$("#winner").html("<h2>WINNER WINNER</23><h3>CHICKEN DINNER!</h3><strong>Number of Guesses:</strong> " + i + "&nbsp;&nbsp;&nbsp; <strong>Secret Number:</strong> " + secret1 + "" + secret2 + "" + secret3 + "" + secret4).show("slow"); $("#resetBlock").show("slow");
					goToByScroll("winner");
					}
					return false;
				} );

			
	//Scroll Functions
			function goToByScroll(winner){
				$('html,body').animate({scrollTop: $("#"+winner).offset().top},'slow');
			}
			function goToByScroll(guessForm){
				$('html,body').animate({scrollTop: $("#"+guessForm).offset().top},'slow');
			}

// RESET FUNCTION	
		$("#resetGame").click(function resetThis() {	
			window.location.reload();
		});