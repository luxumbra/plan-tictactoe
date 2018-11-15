
/* Tic Tac Toe game */

/*
 **
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

*/

var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0;
var points2 = 0;
var size = 3;

var players = {
  player1: {
    name: '',
    email: '',
    gameIcon: 'o', // or x
  },
  player2: {
    name: '',
    email: '',
    gameIcon: 'x', // or o
  }
}
console.log(players);

var game = {
  players: {
    p1: players.player1.email,
    p2: players.player2.email,
  },
  gameStarted: '', // datetime
  gameEnded: '', // datetime
  gameWinner: '', // player email

}

// const gameContainer = document.getElementById('game');
// const board = document.getElementById('board');
// const grid = document.getElementById('grid');
// const gridItems = document.getElementsByClassName('item');

function drawBoard() {
  const gameContainer = document.getElementById('game');
  const board = document.getElementById('board');
  const grid = document.getElementById('grid');
  const gridItems = document.getElementsByClassName('item');
}

// function createPlayers() {
//   console.log('Players: ',players);
//   let p1Name = prompt('Player 1 please enter your name...');
//   let p1Email = prompt('Player 1 enter your email address (this will never be used outside of this application!)');
//   let p1GameIcon = prompt('Player 1 enter your game piece (o or x)');

//   players = {
//     player1: {
//       name: p1Name,
//       email: p1Email,
//       gameIcon: p1GameIcon
//     }
//   }
//   if(players.player1.name === '') {
//     console.log('start again');
//     return false;
//   }
//   let p2Name = prompt('Player 2 please enter your name...');
//   let p2Email = prompt('Player 2 enter your email address (this will never be used outside of this application!)');
//   let p2GameIcon = 'o';
//   if(players.player1.gameIcon === 'o'){
//     p2GameIcon = 'x';
//   }

//   players = {
//     ...players,
//     player2: {
//       name: p2Name,
//       email: p2Email,
//       gameIcon: p2GameIcon
//     }
//   }
//   const player1 = players.player1;
//   const player2 = players.player2;
//   game = {
//     ...game,
//     players: {
//       p1: player1.email,
//       p2: player2.email,
//     }
//   }

//   console.log(players, game);

//   return players, game;
// }

// function startGame(players, game) {
//   console.log(players, game);

// }
// if(game.players.p1 && game.players.p2){
//   startGame('Start game: ', players, game);
// }
