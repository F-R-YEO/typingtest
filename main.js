/*----- constants -----*/
const wordsPerMinute = 10;

/*----- state variables -----*/
const game = {
  screen: "startScreen",
  leaderboard: [],
  points: wordsPerMinute,
};

/*----- cached elements  -----*/
const startScreen = document.querySelector("#startScreen");
const startButton = document.querySelector("#startButton");

const gameScreen = document.querySelector("#gameScreen");
const guessButton = document.querySelector("#guessButton");
const showScoreButton = document.querySelector("#showScoreButton");

const scoreScreen = document.querySelector("#scoreScreen");
const showMainButton = document.querySelector("#showMainButton");


/*----- event listeners (Logic) -----*/
function handleStart() {
  game.screen = "gameScreen"; 
  render(); 
}

function handleShowScore() {
  const name = document.querySelector("#nameInput").value;
  const person = { name: name, points: game.points };
  game.leaderboard.push(person);
  game.screen = "scoreScreen";
  render();
}

function handleMainButton(){
  game.screen = "startScreen";
  render();
}



/*----- render functions (No logic) -----*/
function render() {
  renderScreen();
  renderLeaderboard();
}

function renderScreen() {
  startScreen.classList.add("hide");
  gameScreen.classList.add("hide");
  scoreScreen.classList.add("hide");
  document.querySelector(`#${game.screen}`).classList.remove("hide");
}

function renderLeaderboard() {
  const leaderBoard = document.querySelector("ol");
  leaderBoard.innerHTML = "";

  for (const person of game.leaderboard) {
    const li = document.createElement("li");
    li.innerText = `${person.name} scores ${person.points}`;
    leaderBoard.append(li);
  }
}



/*----- functions -----*/


function main() {
  startButton.addEventListener("click", handleStart);
  showScoreButton.addEventListener("click", handleShowScore);
  showMainButton.addEventListener("click", handleMainButton);
  render();
}

//* only function call in the whole file
main();