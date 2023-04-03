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

//Starts the quiz and timer, hides the initial view and makes the questions viewable
function startQuiz() {
    timerStart = setInterval(timer, 1000);
    timerEl.textContent = timeLeft;
    var startViewEL = document.querySelector("#starting");;
    startViewEL.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    generateQuestion();
}

//timer count
function timer() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      gameOver();
    }
  }

  //loop through and sets questions, pulled from questions array
  function generateQuestion(){
    var selectedQuestion = questions[questionIndex];
    var questionEl = document.getElementById("question-text");
    questionEl.textContent = selectedQuestion.prompt;
    answersEl.innerHTML = "";
    selectedQuestion.choices.forEach(function(choice, i) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("value", choice);
        answerBtn.textContent = i + 1 + ". " + choice;
        answerBtn.onclick = answerClick;
        answersEl.appendChild(answerBtn);
    });
  }


  //checks the selected answers and gives response according to right or wrong choices
  //each wrong answer deducts 10 seconds off the game clock
  function answerClick() {
    if (this.value !== questions[questionIndex].answer) {
      timeLeft -= 10;
        if (timeLeft < 0) {
          timeLeft = 0;
        }
        timerEl.textContent = timeLeft;
        responseEL.textContent = `Wrong! The correct answer was ${questions[questionIndex].answer}.`;
        responseEL.style.color = "red";
      } else {
        responseEL.textContent = "Correct!";
        responseEL.style.color = "green";
      }
      responseEL.setAttribute("class", "response");
      setTimeout(function() {
        responseEL.setAttribute("class", "response hide");
      }, 2000);
      questionIndex++;
      if (questionIndex === questions.length) {
        gameOver();
      } else {
        generateQuestion();
      }
}


//game over condition
function gameOver() {
    clearInterval(timeLeft);
    var gameOverScreen = document.getElementById("game-finished");
    gameOverScreen.removeAttribute("class");
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = timeLeft;
    questionsEl.setAttribute("class", "hide");

}


//saves the high score to/from localstorage
function saveHighScore () {
    var name = nameEl.value.trim();
    if (name !== "") {
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
      var newScore = {
        score: timeLeft,
        name: name
      };
      highscores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
  
    }
  }
  
  
  //runs functions based on button clicks for starting and saving
  saveScoreBtn.onclick = saveHighScore;
  startBtn.onclick = startQuiz;