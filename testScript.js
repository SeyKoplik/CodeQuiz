var openingPage = document.getElementById("openingPage");
var questionsPage = document.getElementById("questionsPage");
var gameOverPage = document.getElementById("gameOverPage");

var timer = document.getElementById("timer");

var timer2 = document.getElementById("timer2");

var beginQuiz = document.getElementById("beginQuiz");

var questionsAsked = document.getElementById("questionsAsked");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

var nextButton = document.getElementById("nextButton");
var submitButton = document.getElementById("submitButton");
//update this when ready
var timeLeft = 10 

var currentQuestion = 0;
var score = 0;

beginQuiz.addEventListener('click', startQuiz);

function startQuiz() {
    openingPage.style.display = "none";
    questionsPage.style.display = "block";
    timer.style.display = "block";
    timeStart();
    showQuestions();
}

function timeStart() {  
    var timeInterval = setInterval(function() {
      timer2.textContent = timeLeft;
      timeLeft--;
      if (timeLeft == -1) {
        timer2.textContent = "0";
        clearInterval(timeInterval);
        setTimeout(quizOver, 500)
      }
    }, 1000);
  }

function showQuestions() { 
    questionsAsked.textContent = questions[currentQuestion].ask;
    choiceA.textContent = questions[currentQuestion].pickA;
    choiceB.textContent = questions[currentQuestion].pickB;
    choiceC.textContent = questions[currentQuestion].pickC;
    choiceD.textContent = questions[currentQuestion].pickD;
}

function checkAnswer () {
  for (var i=0; i<questions.length; i++) {
    if(questions[currentQuestion].answer) {
      score += 20;
    } else {
      timeLeft - 10;
    }
  }
}

function loadNextQuestion () {
    for (var i=0; i<questions.length; i++) {
    choiceA.addEventListener('click', checkAnswer);
    choiceB.addEventListener('click', checkAnswer);
    choiceC.addEventListener('click', checkAnswer);
    choiceD.addEventListener('click', checkAnswer);
    currentQuestion ++;

    if(currentQuestion == questions.length) {
        quizOver();
        document.getElementById("score").textContent = score;
        return;
    }
  }
}

document.getElementById("leaderboard").addEventListener('click', function() {
  document.getElementById("scoresPage").style.display = "block";
})

nextButton.addEventListener('click', loadNextQuestion);

function quizOver() {
  questionsPage.style.display = "none";
  gameOverPage.style.display = "block";
}

submitButton.addEventListener("click", function (event) {
  event.stopPropagation();
  scoreAddition();
  gameOverPage.style.display = "none";
  document.getElementById("scoresPage").style.display = "block";
});

function scoreAddition() {
  enteredUser = document.getElementById("userName").value

  var newScore = {
    name: enteredUser,
    score: score
  };
  
  var scores = localStorage.setItem("scoreList", JSON.stringify(highScores));

  scores = JSON.parse(localStorage.getItem("scoreList") || "[]");

  scores.push(newScore);
}

var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

var scoreList = document.getElementById("scoreList");

for (var i = 0; i < highScores.length; i++) {
    var newList = document.createElement("<div>");
    var enteredData = document.createTextNode(highScores[i].name + " - " + highScores[i].score);
    newList.appendChild(enteredData);
    scoreList.appendChild(newList);
    }

document.getElementById("clearButton").addEventListener("click", clearStorage)

function clearStorage() {
    scoreList.localStorage.clear()};