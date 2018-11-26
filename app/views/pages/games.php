<div class="container">
  <div class="row">
    <div class="col col-10 mx-auto game-info">
            <div class="previous-games">
        <h3><?php echo $pastGamesTitle; ?></h3>
        <?php
        $totalGames = sizeOf($games);
        if ($totalGames == 0) {
          echo '<p>No games available.</p>';
        }
        ?>
        <ol>
        <?php
        for ($i = 0; $i < $totalGames; $i++) {
          $date = date('H:i l, d/m/Y', strtotime($games[$i]['gameEnded']));
          echo '<li>
                  <dl>
                    <dt>Date played</dt>
                    <dd>' . $date . '</dd>
                    <dt>Player 1</dt>
                    <dd>' . $games[$i]['player1name'] . '</dd>
                    <dt>Player 2</dt>
                    <dd>' . $games[$i]['player2name'] . '</dd>
                    <dt>Winner</dt>
                    <dd>' . $games[$i]['gameWinner'] . '</dd>
                  </dl>
                  </li>';
        }
        ?>
        </ol>
      </div>
    </div>
  </div>
