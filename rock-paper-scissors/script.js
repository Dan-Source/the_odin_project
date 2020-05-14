function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
  }

function computerPlay(){
	var randomChoice = "";
	switch (getRndInteger(1,4)) {
		case 1:
			randomChoice = 'rock';
			break;
		case 2:
			randomChoice = 'paper';
			break;
		case 3:
			randomChoice = 'scissors';
			break;
		default:
			break;
	}
	console.log("Computer choice: " + randomChoice)
	return randomChoice;
}


function playRound(playerSelection, computerSelection){
	// Regras para a Rock
		if (playerSelection == computerSelection){
			console.log("Empate")
		}
		else if(playerSelection == "paper" && computerSelection =="scissors"){
			console.log("Voce perdeu. Tesoura derrota pedra.")
		}
		else if(playerSelection == "paper" && computerSelection == "rock"){
			console.log("Voce ganhou. Papel derrota Pedra.")
		}
		// Regras para a Paper
		else if(playerSelection == "rock" && computerSelection =="paper"){
			console.log("Voce perdeu. Papel derrota pedra.")
		}
		else if(playerSelection == "rock" && computerSelection == "scissors"){
			console.log("Voce ganhou. Pedra derrota Papel.")
		}
		// Regras para a Scissors
		else if(playerSelection == "scissors" && computerSelection =="rock"){
			console.log("Voce perdeu. Pedra derrota tesoura.")
		}
		else if(playerSelection == "scissors" && computerSelection == "paper"){
			console.log("Voce ganhou. Tesoura derrota Papel.")
		}
}

const playerSelection = 'scissors';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))



