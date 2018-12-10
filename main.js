var randomNumber = 5;

var submit = document.querySelector('.submit-button');
var rightSide = document.querySelector('.right-side'); 
var clearButton = document.querySelector('.clear-button');
var minRange = document.querySelector('.min-range-input');
var maxRange = document.querySelector('.max-range-input');
var minNumber = document.querySelector('.first-num'); 
var maxNumber = document.querySelector('.last-num');
var updateButton = document.querySelector('.update-button');
var playerOneName = document.querySelector('.player-one-name');
var playerTwoName = document.querySelector('.player-two-name');
var playerOneGuess = document.querySelector('.player-one-guess');
var playerTwoGuess = document.querySelector('.player-two-guess');
var playerOneNameDisplay = document.querySelector('.player-one-name-display');
var playerTwoNameDisplay = document.querySelector('.player-two-name-display');
var playerOneGuessDisplay = document.querySelector('.player-one-guess-display');
var playerTwoGuessDisplay = document.querySelector('.player-two-guess-display');
var playerOneGuessComment = document.querySelector('.player-one-guess-comment');
var playerTwoGuessComment = document.querySelector('.player-two-guess-comment');
var deleteButton = document.querySelector('.delete-button');
var winnerName = document.querySelector('.winner-name');
submit.addEventListener('click', function(e){
        	e.preventDefault();
          if(playerOneGuess.value < randomNumber){
            playerOneGuessComment.innerText = "Thats too low";
          } if(playerTwoGuess.value < randomNumber){
            playerTwoGuessComment.innerText = "Thats too low";
          } if(playerOneGuess.value > randomNumber){
            playerOneGuessComment.innerText = "Thats too high";
          } if(playerTwoGuess.value > randomNumber){
            playerTwoGuessComment.innerText = "Thats too high";
          } if(playerOneGuess.value == randomNumber){
              playerOneGuessComment.innerText = "Boom!!";
              appendCard(e);
              getWinner();
              
          } else if(playerTwoGuess.value == randomNumber){
              playerTwoGuessComment.innerText = "Boom!!";
              appendCard(e);
              getWinner();
          }
        	
          playerOneNameDisplay.innerText = playerOneName.value;
          playerTwoNameDisplay.innerText = playerTwoName.value;
          playerOneGuessDisplay.innerText = playerOneGuess.value;
          playerTwoGuessDisplay.innerText = playerTwoGuess.value;
          



});

updateButton.addEventListener('click', function(e){
  e.preventDefault();
  minNumber.innerText = minRange.value;
  maxNumber.innerText = maxRange.value;
})

clearButton.addEventListener('click',function(event){
          event.preventDefault();
	        playerOneGuess.value = "";
          playerTwoGuess.value = "";
          playerOneName.value = ""; 
          playerTwoName.value = ""; 
  
}); 


function appendCard(e){
  e.preventDefault();
  var card = `<article class="card result-card">
              <div class="player-names"><h1>${playerOneName.value}<span>vs</span> ${playerTwoName.value}</h1></div>
              <hr>
              <div class="winner-name">
                  <div>
                    <h1 class="winner-player-name"></h1>
                    <p class="winner">Winner</p>
                </div>
              </div>

                <hr>
              <div class="result-count">
                <p>23 Guesses</p>
                <p>0.5 minutes</p>
                <button class="delete-button">X</button>
              </div>
            </article>` 
            rightSide.innerHTML += card;
}

rightSide.addEventListener('click', deleteCard)

function deleteCard() {
  
  if(event.target.classList.contains('delete-button')) {
    
    event.target.parentElement.parentElement.remove(); 

}
 
}

function getWinner(){
  if(playerOneGuess.value == randomNumber){
    document.querySelector('.winner-player-name').innerHTML = playerOneName.value;
  } else if(playerTwoGuess.value == randomNumber){
    document.querySelector('.winner-player-name').innerHTML = playerTwoName.value;
  }
}









