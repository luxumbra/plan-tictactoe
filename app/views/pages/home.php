<div class="container-fluid">
  <div class="row">
    <div class="col col-10 mx-auto">
      <p>Homepage</p>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 col-lg-8">
      <h2>Game board</h2>

      <div id="game" class="game-container" data-game>
        <div class="player-info">
          <form action="">
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
            </div>
          </form>
        </div>
        <div class="scores">
          <ul>
            <li>Player 1: <span data-player1-score="">0</span></li>
            <li>Player 2: <span data-player2-score="">0</span></li>
          </ul>
        </div>
        <div id="board" data-board>
          <div id="grid" class="d-flex flex-wrap flex-row justify-content-center mx-auto" data-grid>
            <div class="item item1"></div>
            <div class="item item2" data-played="player1"></div>
            <div class="item item3"></div>
            <div class="item item4"></div>
            <div class="item item5" data-played="player2"></div>
            <div class="item item6"></div>
            <div class="item item7"></div>
            <div class="item item8"></div>
            <div class="item item9"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-12 col-lg-4">
      <h3>Game info</h3>
    </div>
  </div>
</div>

