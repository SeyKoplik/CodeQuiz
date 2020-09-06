
var openingPage = document.getElementById("openingPage");
var questionsPage = document.getElementById("questionsPage");


document.getElementById("beginQuiz").addEventListener('click',startQuiz);

function startQuiz() {
    openingPage.style.display = "none";
    questionsPage.style.display = "block";
}



