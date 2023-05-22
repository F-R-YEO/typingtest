import { paragraphs } from "./paragraphs";
/*----- constants -----*/
const typingText = document.querySelector(".typing-text p");
const inputField = document.querySelector(".wrapper .input-field");
const typoTracker = document.querySelector(".mistake span strong");
const timeTracker = document.querySelector(".time span strong");
const wpmTracker = document.querySelector(".wpm span strong");
const cpmTracker = document.querySelector(".cpm span strong");
const tryAgainButton = document.querySelector("#tryAgain")



/*----- state variables -----*/
let timer = 60;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let typos = 0;
let isTyping = 0;


/*----- cached elements  -----*/

/*----- event listeners -----*/

/*----- functions -----*/

//Generate Random Paragraph from paragraphs.js file
function randomParagraph() {
    //getting random number which will be less than the length of the array
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    //getting random item from paragrapphs array, splitting all the characters
    // , and adding each character inside span and then adding this span inside paragraph text
    paragraphs[randIndex].split("").forEach(span =>{
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active"); //add active class to highlight current key
    //focusing input field on keydown or click event
    document.addEventListener("keydown", ()=> inputField.focus());
    typingText.addEventListener("click", ()=> inputField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedCharacters = inputField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0){
        if(!isTyping){ //once timer start, it won't restart again on every key clicked
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
    // when there is no input or backspace
    if (typedCharacters == null){
        charIndex--; //decrement charIndex
        //decrement mistake count only if charIndex span contain incorrect class
        if(characters[charIndex].classList.contains("incorrect")){
            typos--;
        }
        characters[charIndex].classList.remove("correct","incorrect");
    } else {
        if (characters[charIndex].innerText === typedCharacters){
        //when user typed character matches shown character,
        // then add correct class, else add incorrect class and increment the mistakes count
            characters[charIndex].classList.add("correct");
        } else{
            typos++;
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++; //increment charIndex either user typed correct or incorrect
    }
    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");
    typoTracker.innerText = typos;
    cpmTracker.innerText = charIndex - typos; //cpm does not track mistakes made
    let wpm = Math.round((((charIndex - typos) / 5) / (maxTime - timeLeft)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    wpmTracker.innerText = wpm;

    } else{
        clearInterval(timer);
        inputField.value = "";
    }
    
}

function initTimer(){
    if (timeLeft > 0) {
        timeLeft--;
        timeTracker.innerText = timeLeft;
    }   else{
        clearInterval(timer);
    }
}

export const retryGame  = () =>{
    // load new random paragraph and render function to reset each game state variable to initialise
    randomParagraph();
    clearInterval(timer);
    inputField.value = "";
    timeLeft = maxTime;
    charIndex = typos = isTyping = 0;
    timeTracker.innerText = timeLeft;
    typoTracker.innerText = typos;
    cpmTracker.innerText = 0;
    wpmTracker.innerText = 0;
}

randomParagraph();

inputField.addEventListener("input", initTyping);
tryAgainButton.addEventListener("click", retryGame);