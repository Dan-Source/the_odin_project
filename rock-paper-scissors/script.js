function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
  }

function computerPlay(){
	var randomChoice = {
		1: "rock",
		2: "paper",
		3: "scissors"
	};
	return randomChoice[getRndInteger(1,4)];
}

function playRound(playerSelection, computerSelection){
	var result = "";
	// Regras para a Rock
		if (playerSelection === computerSelection){
				result = "Empate";
				return result;
		}
		else if(playerSelection == "paper" 
				&& computerSelection =="scissors"){
				result = "Perdeu";
		}
		else if(playerSelection == "paper" 
				&& computerSelection == "rock"){
				result = "Ganhou";
		}
		// Regras para a Paper
		else if(playerSelection == "rock" 
				&& computerSelection =="paper"){
				result = "Perdeu";
		}
		else if(playerSelection == "rock" 
				&& computerSelection == "scissors"){
				result = "Ganhou";
		}
		// Regras para a Scissors
		else if(playerSelection == "scissors" 
				&& computerSelection =="rock"){
				result = "Perdeu";
		}
		else if(playerSelection == "scissors" 
					&& computerSelection == "paper"){
				result = "Ganhou";
		}
		return `Você ${result}.`;
}

const btnRock =  document.querySelector("#btn-rock");

btnRock.addEventListener('click', () =>{
	const playerSelection = 'rock';
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
	alert(playRound(playerSelection, computerSelection));
	}
)

const btnPaper =  document.querySelector("#btn-paper");

btnPaper.addEventListener('click', () =>{
	const playerSelection = 'paper';
	const computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);
	alert(playRound(playerSelection, computerSelection));
})

const btnScissors =  document.querySelector("#btn-scissors");

btnScissors.addEventListener('click', () =>{
	const playerSelection = 'scissors';
	const computerSelection = computerPlay();
	alert(playRound(playerSelection, computerSelection));
})




