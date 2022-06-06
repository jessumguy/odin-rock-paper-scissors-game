# rock-paper-scissors-game

The Odin Project - Rock Paper Scissors Project

Site: https://jessumguy.github.io/rock-paper-scissors-game/

![](https://github.com/jessumguy/rock-paper-scissors-game/blob/main/odin_project_rps_with_UI.gif)

**06/06/2022** - Graphical UI added.

Graphical UI and general code refactoring added back around late April / early May 2022, but held off from pushing at the time as I wanted to make the UI better. However, after some thought, I've come to the realization that I was spending way too much time on trying to perfect the samller details of this project. Time that would be better spent on moving on with the course. As such, this will be considered the 1.0 release.

**Reflection:** From the top of my head, in no particular order:

1. No simple way to 'pause' a loop so as to input new values.

The console-only version of this game used a for loop in the playGame() function to loop through each round to decide the winner/loser. Each loop would pause at the user prompt() method in the playerSelection() function whereby the user would then input a new choice (rock, paper or scissors) for the next round.

Upon adding choice buttons for the user input, this prompt() method became redundant and was removed. I was unable to find a simple way to 'pause' between each loop for new user choices. Clicking any button would 'lock' this value as playerSelection for the entire loop of five rounds. 

Ultimately, the simplest solution was to remove the for loop entirely, and to add a condition to disable the choice button after 5 rounds.

2. Global Variables 

Don't quite remember the details, but the gameRound, playerScore and computerScore variables originally in the playGame() function did not tally up correctly after removing the for loop. Being unable to come up with a solution, I ended up make these global variables.

3. Comments in code

Comments are useful to remind myself on what a code block is expected to do after some time off.

4. Page Styling 

When opeining a page, the background and CSS takes a split second to load up. The unstyled version of page in this time is very noticable and unappealing. Still discovering how to make a page load in the styling before appearing on the page.

**Other Notes/Credits:**

- Backgound from <a href="https://wallpapercave.com/w/wp1933957">wallpapercave</a>
- Button design from <a href="https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit">Wesbos's JavaScript 30 - 01 JavaScript Drum Kit</a></li>
- Page / UI styling is not easy - It is difficult to come up with something that is aestetically pleasing in both look and feel.
- Adding fields to the DOM using javascript can lead to a pretty messy file.

---


**26/02/2022** A simple rock paper scissors game played through the console. 

Site: https://jessumguy.github.io/rock-paper-scissors-game/

![](https://github.com/jessumguy/rock-paper-scissors-game/blob/main/rockpaperscissors-consolegame.gif)

**Reflection:**

1. Avoid Global Variables if possible

Being my first real programming project, it was all to easy to get carried away declaring global variables for everything (player and computer choice, score, and result). However, revisting the code again after a two week hiatus, even though this is a small project, it is all too easy to forget what is what, and accidentally reassign a global variable to something else, potentially breaking existing functionality. Thus, like stackoverflow recommends, it is best to avoid global variables if possible.

2. Functions should be kept simple - Do / Return one thing, and do it well

Similar to point 1 above, as I was coding alone, I felt inclined to lump the playGame() and announceGameResult() within the playRound() whereby a single function would do three things, evaluate the round and keep track of the score and announce the game result. This was mainly because I didn't understand variable hoisting worked, and I couldn't wrap my head around to use values returned from function A within function B. However, like point 1, revisiting the code again after some time, it became apparent that it was be a pain working with large functions that do multiple things at once. Should the code need to be refactored down the line, the chances of things breaking would be much higher. Thus, to reduce future potential headaches and frustration, it is best that each function do a single thing.
