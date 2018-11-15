# plan-tictactoe

* Take a name for the two players and begin a new game.
* Use basic styling for the grid using css.
* Allow the players to click the grid to make their move, and highlight when the game is finished.
* Store the results of each match in a MySQL database, and have a page to view the results.
* Use the bootstrap framework to make it responsive in the following ways:
* On mobile device, make the game full screen.
* On desktop browser have the results of the last 5 matches on the right hand side ? do this in bootstrap, not php.
* If you have more time, then please look at making an option of playing against the computer.

## thoughts

 * Prompt players for their first names and email addresses (email address to be used to check if they've played before) and select their game symbol (o or x).
 * --> Store player info in a players object which can be passed to state and later added to the players table.
 * User selects 'start game'.
 * -->`game` object is populated with player info from players{}, and the `Date()` the game started
 * Player1 starts
 * Player plays their move - set the state of the selected grid item as `data-played="Player1"` and display their symbol. Disable that grid item from further interaction.
 * Player 2 plays their move - set state, etc.
 * --> listen to changes on the grid items and pass to the game logic
 * when logic returns a win, game is complete and players notified.
 * --> on game completion, append completed game data to `game{}` - Date() game completed, how many moves, winning player
 * --> take players{} and game{} and pass them to PHP to add them to the tictactoe db for their respective tables `players` and `games`.
 * --> once saved to the db, use the response to update the game column on the main page
 * --> in the game column, show player data for both players (games won,etc)

 ## outline
 