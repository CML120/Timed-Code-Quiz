//variables based on document elements
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var saveScoreBtn = document.querySelector("#submit-score");
var questionsEl = document.querySelector("#questions");
var nameEl = document.querySelector("#name-input");
var answersEl = document.querySelector("#answers")
var responseEL = document.querySelector("#response")
var scoreSaveEl = document.querySelector("#score-saved")
var questionIndex = 0;

//questions taken from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var questions = [
    {
        prompt: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<js>", "<javascript>", "<script>"],
        answer: "<script>"
    },

    {
        prompt: "How do you write Hello World in an alert box?",
        choices: ["alertBox(''Hello World'')", "msgBox(''Hello World'')", "msg(''Hello World'')", "alert(''Hello World'')"],
        answer: "alert(''Hello World'')"
    },

    {
        prompt: "How do you call a function named myFunction?",
        choices: ["call myFunction()", "myFunction()", "call function myFunction", ".myFunction{}"],
        answer: "myFunction()"
    },

    {
        prompt: "In JavaScript, which of the following is a logical operator?",
        choices: ["|", "&&", "%", "/"],
        answer: "&&"
    },

    {
        prompt: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onmouseover", "onclick", "onchange"],
        answer: "onclick"
    }];


//timer
var timeLeft = questions.length * 10;
var timerStart;


function startQuiz() {
    timerStart = setInterval(timer, 1000);
    timerEl.textContent = timeLeft;
    var startViewEL = document.querySelector("#starting");;
    startViewEL.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    generateQuestion();
}

function timer() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      gameOver();
    }
  }

  function generateQuestion(){
    
  }
