let useScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

function computerPlay(){
	var randomChoice = {
		1: "r",
		2: "p",
		3: "s"
	};
	return randomChoice[getRandomInteger(1,4)];
}

function convertToWord(letter){
	if (letter === "r") return "Pedra";
	if (letter === "p") return "Papel";
	return "Tesoura";
}

function win(userChoice, computerChoice){
	const userSmallWord = "(user)".fontsize(3).sub();
	const compSmallWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice)
	useScore++;
	userScore_span.innerHTML = useScore;
	compScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${convertToWord(userChoice)}${userSmallWord} derrota ${convertToWord(computerChoice)}${compSmallWord}. Você Ganhou! `;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => {userChoice_div.classList.remove('green-glow'), 1000})
}

function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = useScore;
	compScore_span.innerHTML = computerScore;
	const userSmallWord = "(user)".fontsize(3).sub();
	const compSmallWord = "(comp)".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(userChoice)}${userSmallWord} perde para ${convertToWord(computerChoice)}${compSmallWord}. Você Perdeu! `;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function () {document.getElementById(userChoice).classList.remove('red-glow') }, 1000)
}


function drawn(userChoice, computerChoice){
	userScore_span.innerHTML = useScore;
	compScore_span.innerHTML = computerScore;
	const userSmallWord = "(user)".fontsize(3).sub();
	const compSmallWord = "(comp)".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(userChoice)}${userSmallWord} é igual ${convertToWord(computerChoice)}${compSmallWord}. Empate! `;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function () {document.getElementById(userChoice).classList.remove('gray-glow') }, 1000)
}



function game(userChoice){
	const computerChoice = computerPlay();
	switch(userChoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice)
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice)
			break;
		case "rr":
		case "ss":
		case "pp":
			drawn(userChoice, computerChoice)
			break;
	}
}

function main(){

	rock_div.addEventListener('click', () => game("r"))
	paper_div.addEventListener('click', () => game("p"))
	scissors_div.addEventListener('click', () => game("s"))

}
main();



