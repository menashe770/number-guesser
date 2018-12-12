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



  disableButton[1].disabled = true;
  disableButton[2].disabled = true;







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
            </article>`; 
            rightSide.insertAdjacentHTML('afterbegin', card);
}

rightSide.addEventListener('click', deleteCard)

function deleteCard() {
  
  if(event.target.classList.contains('delete-button')) {
    
    event.target.parentElement.parentElement.remove(); 
    console.log(event.target);

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
  if(parseInt(playerOneGuess.value) === '' || parseInt(playerTwoGuess.value) === ''){
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
  
    document.querySelector('.player-one-error-display').classList.remove('player-one-error-display');
    // playerOneNameDisplay.innerText = playerOneName.value;
    playerOneName.style.border = "1px solid red";
    playerOneGuess.style.border = "1px solid red";
  
};

function playerTwoNameErrorDIsplay(){
  
    document.querySelector('.player-two-error-display').classList.remove('player-two-error-display');
    // playerTwoNameDisplay.innerText = playerTwoName.value;
    playerTwoName.style.border = "1px solid red";
    playerTwoGuess.style.border = "1px solid red";
  
};


function playerOneGuessEval(){
  if (parseInt(playerOneGuess.value) === randomNumber){
    playerOneGuessComment.innerText = "Boom!!";
    appendCard();
    getWinner();
    confs = new Array(confNum).fill().map(_ => new Confetti());
    document.querySelector('.canvas-one').classList.remove('canvas-one');
  }else if(parseInt(playerOneGuess.value) > randomNumber){
    playerOneGuessComment.innerText = "Thats too high";
  }else if (parseInt(playerOneGuess.value) < randomNumber){
    playerOneGuessComment.innerText = "Thats too low";
  }else{
    playerOneNameErrorDIsplay();
  }
}

function playerTwoGuessEval(){
  if(parseInt(playerTwoGuess.value) === randomNumber){
    playerTwoGuessComment.innerText = "Boom!!";
    appendCard();
    getWinner();
     confs = new Array(confNum).fill().map(_ => new Confetti());
    document.querySelector('.canvas-one').classList.remove('canvas-one');
  } else if(parseInt(playerTwoGuess.value) > randomNumber){
    playerTwoGuessComment.innerText = "Thats too high";
  }else if(parseInt(playerTwoGuess.value) < randomNumber){
    playerTwoGuessComment.innerText = "Thats too low";
  }else{
    playerTwoNameErrorDIsplay();
  } 
}


// confetti

const canvasEl = document.querySelector('.canvas');

const w = canvasEl.width = window.innerWidth;
const h = canvasEl.height = window.innerHeight * 2;

function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0,0,w,h);
  
  confs.forEach((conf) => {
    conf.update();
    conf.draw();
  })
}

function Confetti () {
  //construct confetti
  const colours = ['#fde132', '#009bde', '#ff6b00'];
  
  this.x = Math.round(Math.random() * w);
  this.y = Math.round(Math.random() * h)-(h/2);
  this.rotation = Math.random()*360;

  const size = Math.random()*(w/60);
  this.size = size < 15 ? 15 : size;

  this.color = colours[Math.floor(colours.length * Math.random())];

  this.speed = this.size/7;
  
  this.opacity = Math.random();

  this.shiftDirection = Math.random() > 0.5 ? 1 : -1;
}

Confetti.prototype.border = function() {
  if (this.y >= h) {
    this.y = h;
  }
}

Confetti.prototype.update = function() {
  this.y += this.speed;
  
  if (this.y <= h) {
    this.x += this.shiftDirection/5;
    this.rotation += this.shiftDirection*this.speed/100;
  }

  this.border();
};

Confetti.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, this.rotation, this.rotation+(Math.PI/2));
  ctx.lineTo(this.x, this.y);
  ctx.closePath();
  ctx.globalAlpha = this.opacity;
  ctx.fillStyle = this.color;
  ctx.fill();
};

var ctx = canvasEl.getContext('2d');
var confNum = Math.floor(w / 3);
var confs = new Array(confNum).fill().map(_ => new Confetti());

loop();


document.querySelector('.canvas').addEventListener('click',function removeConfetti(event){
  event.preventDefault();
  if(event.target.classList.contains('canvas')){
    event.target.classList.add('canvas-one');
    
  }
});




















