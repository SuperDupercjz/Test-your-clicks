
let timeElement = document.querySelector(".time")
let secondsRemaining = 5;

timeElement.textContent = secondsRemaining + "Seconds Remaining";

let timeIntervalid = setInterval(function(){
    secondsRemaining--;
    timeElement.textContent = secondsRemaining + "Seconds Remaining";

    if (secondsRemaining === 0){
        clearInterval(timeIntervalid);
    }
},1000);

// ................................................................................................
  let clickCount = 0;
document.querySelector("#clicks").addEventListener("click", function(){
 clickCount++;
//  timer would go where the 25 is?
    if (clickCount < 25){
console.log("clickCount");
}
});


