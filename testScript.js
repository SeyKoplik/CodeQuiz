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

var submitButton = document.getElementById("submitButton");
//update this when ready
var timeLeft = 60 

var currentQuestion = 0;

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
      if (timeLeft == -1 || currentQuestion == questions.length) {
        timer2.textContent = "0";
        clearInterval(timeInterval);
        setTimeout(quizOver, 300)
      }
    }, 1000);
  }

function showQuestions() { 
    questionsAsked.textContent = questions[currentQuestion].ask;
    choiceA.textContent = questions[currentQuestion].pickA;
    choiceB.textContent = questions[currentQuestion].pickB;
    choiceC.textContent = questions[currentQuestion].pickC;
    choiceD.textContent = questions[currentQuestion].pickD;

    choiceA.addEventListener('click', checkAnswer);
    choiceB.addEventListener('click', checkAnswer);
    choiceC.addEventListener('click', checkAnswer);
    choiceD.addEventListener('click', checkAnswer);
}

var putScore = document.getElementById("score");

var points = 0;

function checkAnswer (e) {
    if(e.target.textContent == questions[currentQuestion].answer) {
      alert("correct");
      points++;
    } else {
      timeLeft = timeLeft - 10;
      alert("incorrect");
    }
    currentQuestion++;
    showQuestions();
    putScore.textContent = points+"/6";
    quizOver;
  }

  function quizOver() {
    questionsPage.style.display = "none";
    gameOverPage.style.display = "block";
  }

document.getElementById("submitButton").addEventListener('click', function() {
  document.getElementById("scoresPage").style.display = "block";
})

var submitForm = document.getElementById("submitForm");
var scoreList = document.getElementById("scoreList");
var clearButton = document.getElementById("clearButton")
var userName = document.getElementById("userName");
var leaderboardNames = localStorage.getItem("names");

JSON.parse(localStorage.getItem('items')) [];

localStorage.setItem('names', JSON.stringify (leaderboardNames));

var data = JSON.parse(localStorage.getItem('names'));

var listMade = (text) => {
  var li = document.createElement('li');
  scoreList.textContent = text;
  scoreList.appendChild(li);
}

submitForm.addEventListener('submit', function(e) {
  e.preventDefault();

  leaderboardNames.push(userName.value);
  localStorage.setItem('names', JSON.stringify(leaderboardNames));
  listMade(userName.value);
  userName.value = "";
});

data.forEach(item => {
  listMade(item);
});

clearButton.addEventListener('click', function() {
  localStorage.clear();
  while(scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
  leaderboardNames = [];
});