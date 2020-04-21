let timeElement = document.querySelector(".time");
let secondsRemaining = 5;
let timerRun = false;
let gameover = false;
timeElement.textContent = secondsRemaining + " Seconds Remaining";
// ................................................................................................
let clickbutton = document.querySelector("#clicks");
let clickCount = 0;
//   ..............................................
clickbutton.addEventListener("click", function () {
  if (gameover) {
    // return stops the function
    return;
  }
  clickbutton.textContent = "CLICK AS FAST AS YOU CAN";
  if (timerRun === false) {
    timerRun = true;
    
    let timeIntervalid = setInterval(function () {
      secondsRemaining--;
      timeElement.textContent = secondsRemaining + " Seconds Remaining";
      if (secondsRemaining === 0) {
        timeElement.textContent = secondsRemaining + " Seconds Remaining";
        clearInterval(timeIntervalid);
        // timerRun = false you want it to = false to keep going through function
        timerRun = false;
        // gameover = true you would want it true to stop the game
        gameover = true;
        alert("The game is over! you clicked " + clickCount + " times");
      }
    }, 1000);
  }
  console.log("clickCount");
  if (timerRun) {
    clickCount++; // 4

    let element = document.getElementById(clickCount)
    if (element !== undefined) {
        element.classList.add("scoreborder");
    }
    
    console.log(clickCount);
  }
});
