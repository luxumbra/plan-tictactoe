
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
var playerForm = document.getElementById('playerData');
var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
// var timer;
// var numberOfPlayers = 2;
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
var game = {
  player1name: players.player1.name,
  player1email: players.player1.email,
  player2name: players.player2.name,
  player2email: players.player2.email,
  gameWinner: '', // player email
  gameStarted: '', // datetime
  gameEnded: '', // datetime
}

function processForCI(game) {
  var base_url = document.getElementById('baseurl').value;

  var gameData = [];
  console.log(game);

  gameData.push(game);
  // console.log(gameData);
  // debugger;

  var submissionURL = base_url+'games/create';
  $.ajax({
    type: 'POST',
    url: submissionURL,
    data: {
      insertData: game
    },
    success: function(data){
      console.log('Posted game data!', data);
    },
    error: function(err){
      console.log('Post of game data failed!', err);
    }
  });
}

function updateIcon(icon) {
  var playerIcon = '<i data-feather=\"' + icon + '\"></i>';

  return playerIcon;
}

function gamePlay(p1Name, p2Name, p1Icon) {
  // const gameContainer = document.getElementById('game');
  // const board = document.getElementById('board');
  // const grid = document.getElementById('grid');
  const gridItems = document.getElementsByClassName('item');
  const p1 = document.getElementById('p1-name');
  const p2 = document.getElementById('p2-name');
  const curMoves = document.getElementById('current-moves');
  const gameWinner = document.getElementById('game-winner');

  let p2Icon = 'circle';
  if(p1Icon === 'o'){
    p1Icon = 'circle';
    p2Icon = 'x';
  }
  // console.log(p1, p2);

  p1.innerHTML = p1Name;
  p2.innerHTML = p2Name;

  // let counter = 1;
  let itemId = 1;
  const gridCount = gridItems.length;

  for(let i = 0; i < gridCount; i++) {
    let item = document.getElementById(itemId);
    let iconWrapper = item.childNodes;
    // let icon = p1Icon;

    var handler = function (e) {

      if (currentPlayer == 0) {
        iconWrapper[0].innerHTML = '<img src="/assets/img/' + p1Icon + '.svg" class="player1-icon">';
        item.classList.add('played', 'player1');
        item.removeEventListener('click', arguments.callee);
        // grab the board position of the players moves for checking against the winningCombos
        player1Selections.push(parseInt(item.dataset.boardPos));
        player1Selections.sort((a, b) => { return a - b });
      } else {
        iconWrapper[0].innerHTML = '<img src="/assets/img/' + p2Icon + '.svg" class="player2-icon">';
        item.classList.add('played', 'player2');
        item.removeEventListener('click', arguments.callee);
        player2Selections.push(parseInt(item.dataset.boardPos));
        player2Selections.sort((a, b) => { return a - b });
      }
      move++;
      curMoves.innerHTML = move;

      var isWin = checkWinner();

      if (isWin) {
        let endTime = new Date().toJSON().slice(0,19).replace('T', ' ');
        let endTimestamp = endTime;
        game.gameEnded = endTimestamp;
        var msg = '';

        if (currentPlayer == 0) {

          for(j = 0; j < gridItems.length; j++) {
            item.removeEventListener('click', arguments.callee);
          }
          game.gameWinner = players.player1.name;
          gameWinner.innerHTML = players.player1.name;
          points1++;
          msg = '<p>' + game.gameWinner + ' wins!</p>';
          msg += '<p class="delay">Refreshing the page...</p>';

        } else {

          for (j = 0; j < gridItems.length; j++) {
            item.removeEventListener('click', arguments.callee);
          }
          game.gameWinner = players.player2.name;
          gameWinner.innerHTML = players.player2.name;
          points2++;
          msg = '<p>' + game.gameWinner + ' wins!</p>';
          msg += '<p class="delay">Reloading the game...</p>';

        }

        document.getElementById('p1-score').innerHTML = '| Wins: ' + points1;
        document.getElementById('p2-score').innerHTML = '| Wins: ' + points2;

        document.getElementById('modalMessage').innerHTML = msg;
        setTimeout(function() {
          $('#gameModal').modal('show');
        }, 300);
        setTimeout(() => {
          $('#gameModal').modal('hide');
        }, 2000);

        // send game object to php for adding to the db.
        processForCI(game);
        setTimeout(reset, 2500);

      } else {
        if (currentPlayer == 0) {
          currentPlayer = 1;
          item.removeEventListener('click', arguments.callee);
          // TODO: refactor as a reusable function
          setTimeout(() => {
            let modalMsg = '<p>' + game.player2name + ' make your move.</p>';
            document.getElementById('modalMessage').innerHTML = modalMsg;
            $('#gameModal').modal('show');
          }, 300);
          setTimeout(() => {
            $('#gameModal').modal('hide');
          }, 1500);
        } else {
          currentPlayer = 0;
          item.removeEventListener('click', arguments.callee);
          setTimeout(() => {
            let modalMsg = '<p>' + game.player1name + ' make your move.</p>';
            document.getElementById('modalMessage').innerHTML = modalMsg;
            $('#gameModal').modal('show');
          }, 300);
          setTimeout(() => {
            $('#gameModal').modal('hide');
          }, 1500);
        }
      }
    }

    item.addEventListener('click', handler);
    // counter++;
    itemId++;
  }

  winningCombinations();
}

function reset() {
  // let reset = false;
  // currentPlayer = 0;
  // var itemsToClean = document.querySelectorAll('.item');

  // [].forEach.call(itemsToClean, (item) => {

  //   item.classList.remove('played', 'player1', 'player2');
  //   // item.classList.remove('.played.player2');
  //   item.innerHTML = '<div><i data-feather="plus"></i></div>';
  //   feather.replace();

  //   // window.removeEventListener
  //   // debugger;
  //   item.removeEventListener('click', arguments.callee);

  // });

  // player1Selections = new Array();
  // player2Selections = new Array();
  // if(player1Selections.length == 0 && player2Selections.length == 0) {
  //   reset = true;
  // }
  // TODO: Refactor for a less jarring user experience.
  location.reload();
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

var checkWinner = () => {
  var win = false;
  var playerSelections = new Array();

  if(currentPlayer == 0) {
    playerSelections = player1Selections;
  } else {
    playerSelections = player2Selections;
  }

  if(playerSelections.length >- size) {
    // check players selections against the winners array...
    for(let i = 0; i < winners.length; i++) {
      var sets = winners[i]; //winning combo
      var setFound = true;

      for(let r = 0; r < sets.length; r++) {
        var found = false;

        for(let s = 0; s < playerSelections.length; s++) {
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
var createPlayers = (players) => {

  // console.log('Players: ', players);

  if (playerForm) {
    players.player1.name = document.getElementById('p1Name').value;
    players.player1.email = document.getElementById('p1Email').value;
    players.player2.name = document.getElementById('p2Name').value;
    players.player2.email = document.getElementById('p2Email').value;
    players.player1.gameIcon = document.querySelector('input[name="playerIcons"]:checked').value;
  }
  // console.log(players.player1.gameIcon);

  let startTime = new Date().toJSON().slice(0, 10).replace('T', ' ');
  let startTimestamp = startTime;
    game = {
      player1name: players.player1.name,
      player1email: players.player1.email,
      player2name: players.player2.name,
      player2email: players.player2.email,
      gameStarted: startTimestamp,
    }
    created = true;
    if(created) {

      setTimeout(() => {
        let modalMsg = '<p>' + game.player1name + ' make your move.</p>';
        document.getElementById('modalMessage').innerHTML = modalMsg;
        $('#gameModal').modal('show');
      }, 300);
      setTimeout(() => {
        $('#gameModal').modal('hide');
      }, 1500);
    }

    return created;


}

function startGame() {
  event.preventDefault();
  createPlayers(players);
  // console.log('The players: ', players);

  if(created === true) {
    gamePlay(players.player1.name, players.player2.name, players.player1.gameIcon);
    // console.log('Game started...');

  }
}
feather.replace({'stroke-width': 1});

ScrollReveal().reveal('.game-container, .delay', { delay: 400 });
ScrollReveal().reveal('.game-info', { delay: 600 });
// ScrollReveal().reveal('.item[data-feather]', { delay: 900 });