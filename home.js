'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Numbeer";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let SecretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);

    if (!guess) {
        //document.querySelector(".message").textContent = "⛔ No Number";
        displayMessage("⛔ No Number");

    } else if (guess === SecretNumber) {
        //document.querySelector(".message").textContent = "🎉 Correct Number";
        displayMessage("🎉 Correct Number");

        //when player wins
        document.querySelector(".number").textContent = SecretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    //when guess is wong   
    else if (guess !== SecretNumber) {
        if (score > 1) {
            //document.querySelector(".message").textContent =
            //   guess > SecretNumber ? "🔥 Your Number Too High" : "🥶 Your Number Too Low";
            displayMessage(guess > SecretNumber ? "🔥 Your Number Too High" : "🥶 Your Number Too Low");

            score--;
            document.querySelector(".score").textContent = score;

            //guess is too high
            // document.querySelector("body").style.backgroundColor = "#ff8000";

        } else {
            //document.querySelector(".message").textContent = "😒 You Lost the Game";
            displayMessage("😒 You Lost the Game");
            document.querySelector(".score").textContent = 0;

            //Game Over
            //document.querySelector("body").style.backgroundColor = "#ff0000";
        }
    }
    /*else if (guess > SecretNumber) {
                    if (score > 1) {
                        document.querySelector(".message").textContent = "🔥 Your Number Too High";
                        score--;
                        document.querySelector(".score").textContent = score;

                        //guess is too high
                        // document.querySelector("body").style.backgroundColor = "#ff8000";

                    } else {
                        document.querySelector(".message").textContent = "😒 You Lost the Game";
                        document.querySelector(".score").textContent = 0;

                        //Game Over
                        //document.querySelector("body").style.backgroundColor = "#ff0000";
                    }
                    
                } else if (guess < SecretNumber) {
                    if (score > 1) {
                        document.querySelector(".message").textContent = "🥶 Your Number Too Low";
                        score--;
                        document.querySelector(".score").textContent = score;

                        //guess is too low
                        //document.querySelector("body").style.backgroundColor = "#00d9ff";
                    } else {
                        document.querySelector(".message").textContent = "😒 You Lost the Game";
                        document.querySelector(".score").textContent = 0;

                        //Game Over
                        //document.querySelector("body").style.backgroundColor = "#ff0000";
                    }

*/


});


document.querySelector(".again").addEventListener("click", function() {

    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = SecretNumber;

    //document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");


    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";

});
