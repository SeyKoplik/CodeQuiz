
var openingPage = document.getElementById("openingPage");
var questionsPage = document.getElementById("questionsPage");
var timer = document.getElementById("timer");
var timer2 = document.getElementById("timer2");
var gameOverPage = document.getElementById("gameOverPage");
var timeLeft = 60;
var timesDone = 0;

document.getElementById("beginQuiz").addEventListener('click', startQuiz);


function startQuiz() {
    openingPage.style.display = "none";
    questionsPage.style.display = "block";
    timer.style.display = "block";
    timeStart();
    showQuestions();
  
}

function timeStart() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function() {
      timer2.textContent = timeLeft;
      timeLeft--;

  
      if (timeLeft == -1) {
        timer2.textContent = "0";
        questionsPage.style.display = "none";
        gameOverPage.style.display = "block";
        clearInterval(timeInterval);

      }
  
    }, 1000);
  }

var questionsAsked = document.getElementById("questionAsked");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

questionSelection[0].question
questionSelection[0].choiceA
questionSelection[0].choiceB
questionSelection[0].choiceC
questionSelection[0].choiceD
questionSelection[0].answer

var lastQuestionIndex = questionSelection.length -1;
var beginQuestionIndex = 0;

function showQuestions(){
    var x = questionSelection[beginQuestionIndex];
    questionsAsked.innerHTML = x.questionSelection;
    answerA.innerHTML = x.choiceA;
    answerB.innerHTML = x.choiceB;
    answerC.innerHTML = x.choiceC;
    answerD.innerHTML = x.choiceD;
}

// showQuestions()
// beginQuestionIndex++
// showQuestions()