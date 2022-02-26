# rock-paper-scissors-game

The Odin Project - Rock Paper Scissors Project

**26/02/2022** - A simple rock paper scissors game played through the console. 

Reflection: 

1. Avoid Global Variables if possible

Being my first real programming project, it was all to easy to get carried away declaring global variables for everything (player and computer choice, score, and result). However, revisting the code again after a two week hiatus, even though this is a small project, it is all too easy to forget what is what, and accidentally reassign a global variable to something else, potentially breaking existing functionality. Thus, like stackoverflow recommends, it is best to avoid global variables if possible.

2. Functions should be kept simple - Do / Return one thing, and do it well

Similar to point 1 above, as I was coding alone, I felt inclined to lump the playGame() and announceGameResult() within the playRound() whereby a single function would do three things, evaluate the round and keep track of the score and announce the game result. This was mainly because I didn't understand variable hoisting worked, and I couldn't wrap my head around to use values returned from function A within function B. However, like point 1, revisiting the code again after some time, it became apparent that it was be a pain working with large functions that do multiple things at once. Should the code need to be refactored down the line, the chances of things breaking would be much higher. Thus, to reduce future potential headaches and frustration, it is best that each function do a single thing.