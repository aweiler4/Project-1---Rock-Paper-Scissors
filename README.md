The object of the game is to throw rock, paper, or scissors, and to beat the computer. The first one to win 10 rounds wins the game.

The game first prompts the user to enter their name. Once the user enters their name, it then displays on both the scoreboard and when the player makes a selection.

The first function is that the computer generates a random number between 1 and 3, which the random number is then assigned to rock, paper, or scissors. The user is able to make their selection (rock, paper, or scissors) via event listener under the options.

There are three functions built into the game: win, lose, or draw. When the user wins a hand, their score increases. When the computer wins a hand, their score increases.

There is a function included that converts a letter to a word. I used 'r', 'p', and 's' for simplicity, and then just added a function that would convert the letter to a word in the DOM.

There is also added functionality that when the user wins a point, their score lights up in green. When the computer wins a point, their score lights up in red. I used a setTimeout to only flash these for half of a second.

When starting the main functionality of the game, I started with "if/else" statements. I realized that this game would be much easier with a switch statement.

'Main' will prompt the game to begin, which takes in a userChoice argument to begin.. This begins with a user choice. When the player makes a choice, it runs the 'game' function, which has all of the logic, including whether the player or computer has 10 points. If the player or computer has 10 points, the game function will not be allowed to run.

Challenges:

When a user closes out of the name prompt, selections will return player one, but the end of the game will print 'null'.

Restarting the game reloads the screen. I believe I have this fixed.
