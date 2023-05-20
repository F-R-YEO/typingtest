
/*----- constants -----*/

/*----- state variables -----*/
const game = {
  screen: "startScreen",
  leaderboard: [],
};

/*----- cached elements  -----*/
const startScreen = document.querySelector("#startScreen");
const startButton = document.querySelector("#startButton");

const gameScreen = document.querySelector("#gameScreen");
const showLeaderBoard = document.querySelector("#showLeaderBoard");

const scoreScreen = document.querySelector("#scoreScreen");
const addScoreButton = document.querySelector("#addScoreButton");
const showMainButton = document.querySelector("#showMainButton");


/*----- event listeners (Logic) -----*/

import { retryGame } from "./gamescreen";



function handleStart() {
  game.screen = "gameScreen";
  retryGame(); 
  render(); 
}

function handleShowLeaderBoard() {
  game.screen = "scoreScreen";
  render();
}

function handleAddLeaderBoard() {
  const name = document.querySelector("#nameInput").value;
  const wordsPerMinute = document.querySelector("#scoreInput").value;
  const person = { name: name, points: wordsPerMinute};
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
    li.innerText = `${person.name} scored a whopping ${person.points} wpm!`;
    leaderBoard.append(li);
  }
}



/*----- functions -----*/


function main() {
  startButton.addEventListener("click", handleStart);
  showLeaderBoard.addEventListener("click", handleShowLeaderBoard);
  showMainButton.addEventListener("click", handleMainButton);
  addScoreButton.addEventListener("click", handleAddLeaderBoard);
  render();
}

//* only function call in the whole file
main();

