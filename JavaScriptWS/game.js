let passcode = Math.floor(Math.random() * 1000);
let tries = 10;

let attempsText = document.getElementByld("attempts");
attemptsText.innerHTML = "Number of attempts: " + tries;

let clueText - document.getElementByld("clue");

let button = document.getElementByld("guess-button");
let number = document.getElementByld("guess-text");

button.addEventListener("click", guessNumber);

function guessNumber(){
	let guess = number.value;
	tries--;
	if(guess == passcode){
		document.body.innerHTML	= "<h1>You win!</h1>"
					+ "<p>You got it in "+(10 - tries)+" tries.</p>";
	}
	else if ( tries <= 0){
		document.body.innerHTML = "<h1>You Lose!</h1>"+
					"<p>The Number Was: "+passcode+"</p>";
	}
	else{
		attempsText.innerHTML = "Number of attempts left: "+ tries;
		giveClue(guess);	
	}
}

fucntion giveClue(guess){
	if(guess > passcode){
		clueText.innerHTML += "<li>"+guess+" is too high </li>";
	}
	else{
		clueText.innerHTML += "<li>"+guess+" is too low </li>";
	}
}
