// Function to roll the dice
function rollDice() {
    console.log("Rolling the dice..."); // Debugging line
  
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  
    var image1 = "images/dice" + randomNumber1 + ".png";
    var image2 = "images/dice" + randomNumber2 + ".png";
  
    console.log("Dice 1: ", image1); // Debugging line
    console.log("Dice 2: ", image2); // Debugging line
  
    document.querySelector("img.img1").setAttribute("src", image1);
    document.querySelector("img.img2").setAttribute("src", image2);
  
    var resultText;
  
    if (randomNumber1 === randomNumber2) {
      resultText = "It's a Draw!";
    } else if (randomNumber1 > randomNumber2) {
      resultText = "Player 1 Wins!";
    } else {
      resultText = "Player 2 Wins!";
    }
  
    document.querySelector("#result").innerHTML = resultText;
  }
  
  // Event listener for the button
  document.querySelector("#rollButton").addEventListener("click", rollDice);
  