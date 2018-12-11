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
var disableButton = document.querySelectorAll('.disable-button');
var errorMessage = document.querySelector('.error-img');



var randomNumber = randomNumberFunction();


for (var i=0; i<disableButton.length;i++){
  disableButton[1].disabled = true;
  disableButton[2].disabled = true;
}






submit.addEventListener('click', function(e){
        	e.preventDefault();
          playerOneGuessEval();
          playerTwoGuessEval();
          disableButton[1].disabled = false;
          disableButton[2].disabled = false;

          playerOneNameDisplay.innerText = playerOneName.value;
          playerTwoNameDisplay.innerText = playerTwoName.value;
          playerOneGuessDisplay.innerText = playerOneGuess.value;
          playerTwoGuessDisplay.innerText = playerTwoGuess.value;

          randomNumberFunction();
          errorDisplay();
          
          playerTwoNameErrorDIsplay();
});


updateButton.addEventListener('click', function(e){
  e.preventDefault();
          minNumber.innerText = minRange.value;
          maxNumber.innerText = maxRange.value;
          randomNumber = randomNumberFunction();
          console.log(randomNumber);
          minErrorDisplay();
          maxErrorDisplay();
  

})

clearButton.addEventListener('click',function(event){
          event.preventDefault();
	        playerOneGuess.value = "";
          playerTwoGuess.value = "";
          playerOneName.value = ""; 
          playerTwoName.value = ""; 
          disableButton[1].disabled = true;
          disableButton[2].disabled = true;
}); 





function appendCard(){
  var card = `<article class="card result-card">
              <div class="player-names"><h1>${playerOneName.value}<span>vs</span> ${playerTwoName.value}</h1></div>
              <hr>
              <div class="winner-name">
                  <div>
                    <h1 class="winner-player-name"> </h1>
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
  } else if (playerTwoGuess.value == randomNumber){
    document.querySelector('.winner-player-name').innerHTML = playerTwoName.value;
  }
}


function randomNumberFunction() {
  var randomNumberGenerator = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value) + 1)) + parseInt(minRange.value); 
  return randomNumberGenerator;
};



function errorDisplay(){
  if(playerOneGuess.value === "" || playerTwoGuess.value === ""){
            var element = document.querySelectorAll('.error-display');
            for(var i=0; i<element.length;i++){
            element[i].classList.remove('error-display');}
            for (var i=0; i<disableButton.length;i++){
            disableButton[1].disabled = true;
            disableButton[2].disabled = true;
            }

          }
};


function minErrorDisplay(){
  if(minRange.value === ""){
    document.querySelector('.min-error-display').classList.remove('min-error-display');
    
    minRange.style.border = "1px solid red";
    alert('hey');
  }
}

function maxErrorDisplay(){
  if(maxRange.value === ""){
    document.querySelector('.max-error-display').classList.remove('max-error-display');
    
    maxRange.style.border = "1px solid red";
    alert('hey');
  }
}

function playerOneNameErrorDIsplay(){
  if(playerOneName.value === ""){
    document.querySelector('.player-one-error-display').classList.remove('player-one-error-display');
    playerOneNameDisplay.innerText = playerOneName.value;
    playerOneName.style.border = "1px solid red";
    playerOneGuess.style.border = "1px solid red";
  }
};

function playerTwoNameErrorDIsplay(){
  if(playerTwoName.value === ""){
    document.querySelector('.player-two-error-display').classList.remove('player-two-error-display');
    
    playerTwoName.style.border = "1px solid red";
    playerTwoGuess.style.border = "1px solid red";
  }
};


function playerOneGuessEval(){
  if(playerOneGuess.value < randomNumber){
            playerOneGuessComment.innerText = "Thats too low";
          } else if(playerOneGuess.value > randomNumber){
            playerOneGuessComment.innerText = "Thats too high"}
            else if(playerOneGuess.value === ""){
            playerOneGuessDisplay.innerText = "balh";
            playerOneNameErrorDIsplay();
            }
            else{
            playerOneGuessComment.innerText = "Boom!!";
            appendCard();
            getWinner();
          };

}

function playerTwoGuessEval(){
            if(playerTwoGuess.value < randomNumber){
            playerTwoGuessComment.innerText = "Thats too low";
          } else if(playerTwoGuess.value > randomNumber){
            playerTwoGuessComment.innerText = "Thats too high"}
            else if(playerTwoGuess.value === ""){
              
             playerOneNameErrorDIsplay(); 
            }
            else{
            playerTwoGuessComment.innerText = "Boom!!";
            appendCard();
            getWinner();
          }
}


















