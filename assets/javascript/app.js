
var questionsArray = [
{
	question: "Who was the Ancient Egyptian sun god?",
	choice1: "Ra",
	choice2: "Osiris",
	choice3: "Anubis",
	choice4: "Rameses",
	correct:"Ra",
	image: "assets/images/ra.jpg",
	alt: "Ra"

}, //end of question 1
{
	question: "Which king united Upper and Lower Egypt in 2900 B.C. and became the first pharoah?",
	choice1: "Rameses I",
	choice2: "Narmer",
	choice3: "Anubis",
	choice4: "Caesar",
	correct: "Narmer",
	image: "assets/images/narmer.jpg",
	alt: "palette of Narmer"
},//end of question2
{
	question: "What was the most common drink in Ancient Egypt?",
	choice1: "water",
	choice2: "wine",
	choice3: "milk",
	choice4: "beer",
	correct: "beer",
	image: "assets/images/brewing.jpg",
	alt: "picking hops wall painting"
},//end of question3
{
	question: "Why did Ancient Egyptian men and women wear kohl on their eyes?",
	choice1: "It was a symbol of devotion to Ra",
	choice2: "It was a part of traditional dress",
	choice3: "It helped reduce glare from the sun",
	choice4: "It was a symbol of great wealth",
	correct: "It helped reduce glare from the sun",
	image: "assets/images/nefertiti.jpeg",
	alt: "bust of Nefertiti"
},//end of question4
{
	question: "Who was Isis?",
	choice1: "a Roman empress who lived in Ancient Egypt",
	choice2: "the wife of Rameses II",
	choice3: "the protectress of Egypt and wife of Osiris",
	choice4: "the daughter of Cleopatra and Caesar",
	correct: "the protectress of Egypt and wife of Osiris",
	image: "assets/images/isis.jpg",
	alt: "Isis"
},//end of question5
 {
	question: "What was stored in canopic jars?",
	choice1: "grain",
	choice2: "wine",
	choice3: "kohl",
	choice4: "organs",
	correct: "organs",
	image: "assets/images/canopicjars.jpg",
	alt: "Canopic jars"
},//end of question6
{
	question: "What happened to the brain during mummification?",
	choice1: "it was extracted through the nose and thrown away",
	choice2: "it was mummified along with the rest of the body",
	choice3: "it was stored in a canopic jar with a baboon head top",
	choice4: "it was taken out of the skull and dried out in the sun",
	correct: "it was extracted through the nose and thrown away",
	image: "assets/images/tut.jpg",
	alt: "sarcophagus of Tutankhamun"
},//end of question7
{
	question: "Which canopic jar was the stomach stored in during mummification?",
	choice1: "jackal-headed Duamutef",
	choice2: "human-headed Imsety",
	choice3: "baboon-headed Hapi",
	choice4: "falcon-headed Qebehsenuef",
	correct: "jackal-headed Duamutef",
	image: "assets/images/jackalcanopic.jpg",
	alt: "Jackal-headed canopic jar"
},//end of question8
{
	question: "Who was the Ancient Egyptian goddess of cats and home?",
	choice1: "Sekhmet",
	choice2: "Thoth",
	choice3: "Hathor",
	choice4: "Bastet",
	correct: "Bastet",
	image: "assets/images/bastet.jpg",
	alt: "Bastet statue from British Museum"
},//end of question9
{
	question: "Who was the first female pharoah?",
	choice1: "Nefertiti",
	choice2: "Cleopatra",
	choice3: "Hatshepsut",
	choice4: "There was never a female pharoah",
	correct: "Hatshepsut",
	image: "assets/images/hatshepsut.jpg",
	alt: "Hatshepsut as sphinx"
}//end of question10
]//end of questionsArray

var play = {
	timeLeft: 20,
	timer: 0,
	correct: 0,
	incorrect: 0,
	timedout: 0,
	index: 0,

	start: function() {
		$("#start").on("click", function() {
		//hide button, display question, timer and choices divs
		$("#start").css("display","none");
		$("#questiondiv").css("display","block");
		$("#timerdiv").css("display","block");
		$("#choicesdiv").css("display","block");

		play.displayQuestion(0);
		
		}); //end of onclick start buton
	},//end of start method

	displayQuestion: function(index) {
		$("#question").text(questionsArray[index].question);
		$("#choice1").text(questionsArray[index].choice1);
		$("#choice2").text(questionsArray[index].choice2);
		$("#choice3").text(questionsArray[index].choice3);
		$("#choice4").text(questionsArray[index].choice4);

		play.timer30();
	}, //end of displayQuestion method

	nextQuestion: function(index) {
		//reset timer and display
		play.timeLeft = 20;
		$("#timer").text(play.timeLeft);
		//hide image and message divs
		$(".choice").css("display","block");
		$("#image").css("display", "none");	
		$("#message").css("display", "none");
		//display question and choice divs
		$("#question").text(questionsArray[index].question);
		$("#choice1").text(questionsArray[index].choice1);
		$("#choice2").text(questionsArray[index].choice2);
		$("#choice3").text(questionsArray[index].choice3);
		$("#choice4").text(questionsArray[index].choice4);

		play.timer30();

	}, //end of nextQuestion method

	timer30: function() {	
		
		play.timer = setInterval(decrement, 1000);

		function decrement() {
			play.timeLeft--;
			$("#timer").text(play.timeLeft);
			//if timer runs out
			if (play.timeLeft <= 0) {
			play.timeOut(play.index);
			} //end of if time runs out			
		}//end of decrement function

		$(".choice").on("click", function(){

			var answerPicked = $(this).text();

			if (answerPicked === questionsArray[play.index].correct) {
				console.log(play.index);
				play.correct(play.index);
			}
			else {
				console.log(play.index);
				play.incorrect(play.index);

			}
		}) //end of choice click		
	},//end of timer30 method

	timeOut: function(index) {

		clearInterval(play.timer);
		play.timedout++;
		
		$("#image").attr({"src":questionsArray[index].image,"alt":questionsArray[index].alt});
		$(".choice").css("display","none");
		$("#image").css("display", "block");
		$("#message").text("You've run out of time!  The correct answer was " + questionsArray[index].correct + ".");
		$("#message").css("display", "block");
		setTimeout(function() {
			play.index++;
			if (play.index === questionsArray.length) {
				play.results();
			} //end of if run out of questions, run results
			else {
				play.nextQuestion(play.index);
			}
		}, 5000);

	},//end of timeOut method


	correct: function(index) {
		clearInterval(play.timer);
		play.correct++;
				
		$("#image").attr({"src":questionsArray[index].image,"alt":questionsArray[index].alt});
		$(".choice").css("display","none");
		$("#image").css("display", "block");
		$("#message").text("You're right!");
		$("#message").css("display", "block");
		setTimeout(function() {
			play.index++;
			if (play.index === questionsArray.length) {
				play.results();
			}//end of if run out of questions, run results
			else {
				play.nextQuestion(play.index);
			}
		}, 5000);		
	},//end of correct method

	incorrect: function(index) {
		clearInterval(play.timer);
		play.incorrect++;
		
		$("#image").attr({"src":questionsArray[index].image,"alt":questionsArray[index].alt});
		$(".choice").css("display","none");
		$("#image").css("display", "block");
		$("#message").text("Wrong answer.  The correct answer was " + questionsArray[index].correct + ".");
		$("#message").css("display", "block");
		setTimeout(function() {
			play.index++;
			if (play.index === questionsArray.length) {
				play.results();
			}//end of if run out of questions, run results
			else {
				play.nextQuestion(play.index);
			}
		}, 5000);
	}, // end of incorrect method

	results: function() {
		$("#image").attr({"src":"assets/images/scarab.jpg","alt":"end image"});
		
		
		
		$("#message").html("<span>You've finished! How did you do?</span> <p>Correct: " + play.correct + "<br>Incorrect: " + play.incorrect + "<br>Timed Out: " + play.timedout + "</p>");
		
		//add reset button
		$("#image").append("<button id='restart'> Try Again? </button>");

		$(document).on("click","#restart", function() {
			play.restart();
		})
	},//end of results method

	restart: function() {
		play.correct = 0;
		play.incorrect = 0;
		play.timedout = 0;
		play.index = 0;

		play.start();


	}//end of clear function



}//end of play object


//MAIN PROCESS//

play.start();
























