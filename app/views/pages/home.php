<div class="container">
  <div class="row">
    <div class="col col-10 mx-auto">
      <p>Welcome</p>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 col-md-6 mx-auto">
      <h2>Play Tic Tac Toe</h2>

      <div id="game" class="game-container" data-game>
        <div class="player-info">
          <form id="playerData" onsubmit=startGame();>
            <input type="hidden" value="<?php echo base_url(); ?>" id="baseurl"/>
            <div class="form-row">
              <div class="form-group col col-lg-6">
                <label for="p1Name">Player 1 name</label><input type="text" id="p1Name" class="form-control">
                <label for="p1Email">Player 1 email</label><input type="text" id="p1Email" class="form-control">
                <div class="btn-group">
                  <button class="btn" onClick=event.preventDefault();>O</button>
                  <button class="btn" onClick=event.preventDefault();>X</button>
                </div>
              </div>
              <div class="form-group col col-lg-6">
                <label for="p2Name">Player 2 name</label><input type="text" id="p2Name" class="form-control">
                <label for="p2Email">Player 2 email</label><input type="text" id="p2Email" class="form-control">
                <div class="btn-group">
                  <button class="btn" onClick=event.preventDefault();>O</button>
                  <button class="btn" onClick=event.preventDefault();>X</button>
                </div>
              </div>
              <div class="form-group col col-lg-6 mx-auto">
                <button class="btn start-btn">Start game</button>
              </div>
            </div>
          </form>
        </div>
        <div id="scores">
          <ul>
            <li>Player 1: <span id="p1-name"></span> <span id="p1-score" data-player1-score=""></span></li>
            <li>Player 2: <span id="p2-name"></span> <span id="p2-score" data-player2-score=""></span></li>
          </ul>
        </div>
        <div id="board" data-board>
          <div id="grid" data-grid>
            <div id="1" class="item" data-board-pos="1"></div>
            <div id="2" class="item" data-board-pos="2"></div>
            <div id="3" class="item" data-board-pos="3"></div>
            <div id="4" class="item" data-board-pos="4"></div>
            <div id="5" class="item" data-board-pos="5"></div>
            <div id="6" class="item" data-board-pos="6"></div>
            <div id="7" class="item" data-board-pos="7"></div>
            <div id="8" class="item" data-board-pos="8"></div>
            <div id="9" class="item" data-board-pos="9"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-12 col-lg-4">
      <div class="game-info current-game">
        <h3>Current game info</h3>
        <ul>
          <li>Player 1: Name (x)</li>
          <li>Player 2: Name (o)</li>
          <li>Moves made: 0</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="previous-games"></div>

    </div>
  </div>
</div>

