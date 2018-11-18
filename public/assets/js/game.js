
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
const playerForm = document.getElementById('playerData');
var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
var timer;
var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0;
var points2 = 0;
var size = 3;
var created = false;


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

function gamePlay(p1Name, p2Name) {
  // event.preventDefault();
  const gameContainer = document.getElementById('game');
  const board = document.getElementById('board');
  const grid = document.getElementById('grid');
  const gridItems = document.getElementsByClassName('item');
  const p1 = document.getElementById('p1-name');
  const p2 = document.getElementById('p2-name');
  console.log(p1, p2);

  p1.innerHTML = p1Name;
  p2.innerHTML = p2Name;

  let counter = 1;
  let itemId = 1;
  const gridCount = gridItems.length;
  console.log(gridItems);

  for(i = 0; i < gridCount; i++) {
    let item = document.getElementById(itemId);

    let handler = function (e) {
      console.log('Item: ', item);
      if (currentPlayer == 0) {
        item.innerHTML = 'X';
        item.classList.add('played', 'player1');
        player1Selections.push(parseInt(item.dataset.boardPos));
        player1Selections.sort((a, b) => { return a - b });
      } else {
        item.innerHTML = 'O';
        item.classList.add('played', 'player2');
        player2Selections.push(parseInt(item.dataset.boardPos));
        player2Selections.sort((a, b) => { return a - b });
      }
      move++;
      console.log('P1: ', player1Selections, 'P2', player2Selections);

      var isWin = checkWinner();

      if (isWin) {
        if (currentPlayer == 0) {
          console.log('Player 1 wins!');
          for(i = 0; i < gridItems.length; i++) {
            item.removeEventListener('click', handler);
          }
          points1++;
        } else {
          console.log('Player 2 wins!');
          for (i = 0; i < gridItems.length; i++) {
            item.removeEventListener('click', handler);
          }

          points2++;
        }
        document.getElementById('p1-score').innerHTML = 'Wins: ' + points1;
        document.getElementById('p2-score').innerHTML = 'Wins: ' + points2;
        reset();

      } else {
        if (currentPlayer == 0) {
          currentPlayer = 1;
          item.removeEventListener('click', handler);
        } else {
          currentPlayer = 0;
          item.removeEventListener('click', handler);
        }
      }
    }
    // console.log(item);

    item.addEventListener('click', handler);
    counter++;
    itemId++;
  }

  winningCombinations();
}

function reset() {
  let reset = false;
  currentPlayer = 0;
  console.log('Selections: ', player1Selections, player2Selections);
  // console.log(player1Selections.length + player2Selections.length);
  var itemsToClean = document.querySelectorAll('.item');

  console.log('To clean: ', itemsToClean);

  [].forEach.call(itemsToClean, (item) => {
    console.log('Item: ', item.classList);

    item.classList.remove('played', 'player1', 'player2');
    // item.classList.remove('.played.player2');
    item.innerHTML = '';
    item.removeEventListener('click', handler);
  });
  player1Selections = new Array();
  player2Selections = new Array();
  // for(i = 0)
  console.log('P1 selections: ', player1Selections);

  // document.getElementsByClassName('item').classList.remove(!'item');
  return reset;
}

function winningCombinations() {
  winners.push([1, 2, 3]);
  winners.push([4, 5, 6]);
  winners.push([7, 8, 9]);
  winners.push([1, 5, 9]);
  winners.push([3, 5, 7]);
  winners.push([1, 4, 7]);
  winners.push([2, 5, 8]);
  winners.push([3, 6, 9]);
}

checkWinner = () => {
  var win = false;
  var playerSelections = new Array();

  if(currentPlayer == 0) {
    playerSelections = player1Selections;
  } else {
    playerSelections = player2Selections;
  }

  if(playerSelections.length >- size) {
    // check players selections against the winners array...
    for(i = 0; i < winners.length; i++) {
      var sets = winners[i]; //winning combo
      var setFound = true;

      for(r = 0; r < sets.length; r++) {
        var found = false;

        for(s = 0; s < playerSelections.length; s++) {
          if(sets[r] == playerSelections[s]) {
            found = true;
            break;
          }
        }
        if(found == false) {
          setFound = false;
          break;
        }
      }
      if(setFound == true) {
        win = true;
        break;
      }
    }
  }
  return win;
}
createPlayers = (players) => {

  // var gamePlayers = this.players;
  console.log('Players: ', players);
  // playerForm.addEventListener('submit', (e) => {
    // e.preventDefault();
    // const fd = e.target;

    if (playerForm) {
      players.player1.name = document.getElementById('p1Name').value;
      players.player1.email = document.getElementById('p1Email').value;
      players.player2.name = document.getElementById('p2Name').value;
      players.player2.email = document.getElementById('p2Email').value;
    }
    players = players;
    console.log('Created players:', players);
    created = true;
    // debugger;
    return created;
  // });

}

function startGame() {
  event.preventDefault();
  createPlayers(players);
  console.log('The players: ', players);

  if(created === true) {
    gamePlay(players.player1.name, players.player2.name);
    console.log('Game started...');

  }
}