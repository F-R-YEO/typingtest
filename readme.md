#Wireframe on paper hardcopy

#Data
Game Data
WPM/CPM
Time Left
Mistakes

User Input
Typing input registering

Array of leaderboard
Show message if take over leaderboard?

variables
array and objects

Pseudocode
Compulsory

Additional stuff
Mistakes calculation
Show message if take over leadereboard

###Project Planning

19/5
HTML for wireframe (tranisition game screen, leaderboard format) - done
pseudocode brief for game - done
render() functions (transition game screen, leaderboard format) - done
style css - done

Things left to do :
figure out how to set ranking according to wpm in leaderboard
add some pictures and design to the game especially front and show screen

###General Pseudocode

1. Define required constants

2. Define required variables used to track the state of the game

3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

4. Upon loading the app should:
   4.1) Should have three screen: start, game and score: which can be change with button
   4.2) Have id and button for each html tag to hide and show each screen at a time
   4.3) Have a button to handle, wait for user to click Start Game to transition to game screen
   4.4) main.js file to handle transition of screen

5. Upon loading the game screen:
   5.1) Create js folder with 2 javascript file for game screen.

   1. paragraphs.js to handle random paragraph texts 2) script.js to handle the behaviour of the game screen.
      5.2) Initialize the game state variables
      5.3) Render those values to the page whenever it resets
      5.4) Have a button to handle, wait for the user to click Try again
      5.5) Handle player keystroke input
      5.6) Display paragraph text shadow
      5.7) Keystroke input to be registered in paragraph text shadow through lettter highlight when each key is pressed.
      5.8) Show game data statistics that changes when typing: 1) Time left: Start from 60sec countdown 2) Words per min, characters per minute 3) Mistakes registering
      5.9) Have a button to handle, wait for user to click Score Screen to transition to score screen

6. Upon loading the score screen:
   6.1) Have a button to handle return to main screen
   6.2) Update the score board with the person name and wpm
   6.3) Have a input text box, for player to key in their name and score(wpm)
