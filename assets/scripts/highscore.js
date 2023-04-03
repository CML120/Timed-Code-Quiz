//runs functions on page loading to display saved scores
document.addEventListener("load", printHighscores);


//displays saved scores from local storage
function printHighscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  

  //clears the saved scores from local storage
  function clearHighscores() {
    localStorage.removeItem("highscores");
    location.reload();
  } document.getElementById("clear").onclick = clearHighscores;
  
  printHighscores();