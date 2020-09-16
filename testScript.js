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
var timeLeft = 60;
var currentQuestion = 0;
var getNames = JSON.parse(localStorage.getItem("getNames")) || [] ;

beginQuiz.addEventListener('click', startQuiz);

function startQuiz() {
  openingPage.style.display = "none";
  questionsPage.style.display = "block";
  timer.style.display = "block";
  timeStart();
  showQuestions();
}

function timeStart() {
  var timeInterval = setInterval(function () {
    timer2.textContent = timeLeft;
    timeLeft--;
    if (timeLeft == -1 || currentQuestion == questions.length) {
      timer2.textContent = "0";
      clearInterval(timeInterval);
      setTimeout(quizOver, 300)
    }
  }, 1000);
}

function quizOver() {
  questionsPage.style.display = "none";
  gameOverPage.style.display = "block";
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
};

var putScore = document.getElementById("score")
var points = 0;

function checkAnswer(e) {

  if (e.target.textContent === questions[currentQuestion].answer) {
    alert("correct");
    points++;
  } else {
    timeLeft = timeLeft - 10;
    alert("incorrect");
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestions();
  } else {
  putScore.textContent = points + "/6";
  quizOver();
  }
}


document.getElementById("submitButton").addEventListener('click', function () {
  event.preventDefault();
  var score = document.getElementById("score").textContent;
  var userName = document.getElementById("userName").value;
  console.log(score);
  console.log(userName);
  document.getElementById("scoresPage").style.display = "block";
  gameOverPage.style.display = "none";
  getNames.push({name:userName,score:score});
  localStorage.setItem("getNames", JSON.stringify(getNames));
  submitLeaderboard();
  });

  
  submitLeaderboard();
  
  function submitLeaderboard() {
    var scoreList = document.getElementById("scoreList");
    scoreList.innerHTML = "";
    for (var i=0; i < getNames.length; i++) {
    var h4 = document.createElement("h4");
    h4.style.textAlign = "center";
    h4.textContent = getNames[i].name + "-" + getNames[i].score;
    scoreList.appendChild(h4);
    }
  }

  var clearButton = document.getElementById("clearButton");

  clearButton.addEventListener('click', function () {
    localStorage.clear();
    if (scoreList.firstChild = " ") {
      scoreList.removeChild(scoreList.firstChild);
    }

  
  });

