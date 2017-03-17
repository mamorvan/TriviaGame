
var question1 = {
	question: "Who was the Ancient Egyptian sun god?",
	correct: "Ra",
	choice2: "Osiris",
	choice3: "Anubis",
	choice4: "Rameses",
	image: "assets/images/ra.jpg",
	alt: "Ra",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.correct);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method
} //end of question 1


var question2 = {
	question: "Which king united Upper and Lower Egypt in 2900 B.C. and became the first pharoah?",
	choice1: "Rameses I",
	correct: "Narmer",
	choice3: "Anubis",
	choice4: "Caesar",
	image: "assets/images/narmer.jpg",
	alt: "palette of Narmer",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.correct);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method
}//end of question2


var question3 = {
	question: "What was the most common drink in Ancient Egypt?",
	choice1: "Water",
	choice2: "Wine",
	choice3: "Milk",
	correct: "Beer",
	image: "assets/images/brewing.jpg",
	alt: "picking hops wall painting",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.correct);

		timer30();
	} //end of displayQuestion method
}//end of question3


var question4 = {
	question: "Why did Ancient Egyptian men and women wear kohl on their eyes?",
	choice1: "It was a symbol of devotion to Ra",
	choice2: "It was considered a part of traditional dress",
	correct: "It helped reduce glare from the sun",
	choice4: "It was a symbol of great wealth",
	image: "assets/images/nefertiti.jpeg",
	alt: "bust of Nefertiti",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.correct);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method
}//end of question4


var question5 = {
	question: "Who was Isis?",
	choice1: "A Roman empress who lived in Ancient Egypt",
	choice2: "The wife of Rameses II",
	correct: "The protectress of Egypt and wife of Osiris",
	choice4: "The daughter of Cleopatra and Ceasar",
	image: "assets/images/isis.jpg",
	alt: "Isis",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.correct);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method
}//end of question5


var question6 = {
	question: "What was stored in canopic jars?",
	choice1: "grain",
	choice2: "wine",
	choice3: "kohl",
	correct: "organs",
	image: "assets/images/canopicjars.jpg",
	alt: "Canopic jars",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.correct);

		timer30();
	} //end of displayQuestion method
}//end of question6

var question7 = {
	question: "What happened to the brain during mummification?",
	correct: "It was extracted through the nose and thrown away",
	choice2: "It was mummified with the rest of the body",
	choice3: "It was stored in a canopic jar with a baboon head top",
	choice4: "It was taken out of the skull and dried out in the sun",
	image: "assets/images/tut.jpg",
	alt: "sarcophagus of Tutankhamun",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.correct);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method}
} //end of question7


var question8 = {
	question: "Which canopic jar was the stomach stored in during mummification?",
	correct: "jackal-headed Duamutef",
	choice2: "human-headed Imsety",
	choice3: "baboon-headed Hapi",
	choice4: "falcon-headed Qebehsenuef",
	image: "assets/images/jackalcanopic.jpg",
	alt: "Jackal-headed canopic jar",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.correct);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method
}//end of question8


var question9 = {
	question: "Who was the Ancient Egyptian goddess of cats and home?",
	choice1: "Sekhmet",
	choice2: "Thoth",
	choice3: "Hathor",
	correct: "Bastet",
	image: "assets/images/bastet.jpg",
	alt: "Bastet statue from British Museum",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.choice3);
		$("#choice4").text(this.correct);

		timer30();
	} //end of displayQuestion method
}//end of question9


var question10 = {
	question: "Who was the first female pharoah?",
	choice1: "Nefertiti",
	choice2: "Cleopatra",
	correct: "Hatshepsut",
	choice4: "There was never a female pharoah",
	image: "assets/images/hatshepsut.jpg",
	alt: "Hatshepsut as sphinx",

	displayQuestion: function() {
		$("#question").text(this.question);
		$("#choice1").text(this.choice1);
		$("#choice2").text(this.choice2);
		$("#choice3").text(this.correct);
		$("#choice4").text(this.choice4);

		timer30();
	} //end of displayQuestion method
}//end of question10

//FUNCTIONS//
//start and display timer
function timer30() {	
	var timeLeft = 30
	var intervalId;

	intervalId = setInterval(decrement, 1000);

	function decrement() {
		timeLeft--;
		$("#timer").text(timeLeft);

		//if timer runs out
		if(timeLeft === 0) {
			clearInterval(intervalId);
			
			$("#image").attr({"src":currentObject.image,"alt":currentObject.alt});
			$(".choice").css("display","none");
			$("#image").css("display", "block");
			$("#message").text("You've run out of time!  The correct answer was " + currentObject.correct + ".");
			$("#message").css("display", "block");
		} //end of if time runs out		
	} //end of decrement function
}//end of timer30		

//MAIN PROCESS//

//start game when start button clicked//
$("#start").on("click", function() {

	//hide button, display question, timer and choices divs
	$(this).css("display","none");
	$("#questiondiv").css("display","block");
	$("#timerdiv").css("display","block");
	$("#choicesdiv").css("display","block");


	// use a loop here to loop through question objects- var currentObject?
	question1.displayQuestion();

})



















