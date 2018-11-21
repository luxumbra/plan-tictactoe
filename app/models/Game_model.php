<?php

class Game_model extends CI_Model {
  public function __construct() {
    $this->load->database();
  }

  public function get_games($id = false) {
    if($id === false){
      // $this->db->select('id, player1email, player2email, winner');
      $query = $this->db->get('games');
      // print_r($query);
      return $query->result_array();
    }
    $query = $this->db->get_where('games', array('id', $id));
    return $query->row_array();
  }

  public function add_game($game = false) {
    $error = '';
    if($game === false){
      $error = 'Game data not present.';
      return $error;
    }
    print_r($game);
    // $data = array(
    //   'player1name' => $game->players->p1Name,
    //   'player1email' => $game->players->p1Email,
    //   'player2name' => $game->players->p2Name,
    //   'player2email' => $game->players->pEmail,
    //   'winner' => $game->gameWinner,
    //   'gameStarted' => $game->gameStarted
    // );
    // $gameStarted = $game
    return $this->db->insert('games', $game);
  }
}