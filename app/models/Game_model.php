<?php

class Game_model extends CI_Model {
  public function __construct() {
    $this->load->database();
  }

  public function get_games($id = false) {
    if($id === false){
      // $this->db->select('id, player1email, player2email, winner');
      $query = $this->db->limit(5);
      $query = $this->db->order_by('id', 'DESC');
      $query = $this->db->get('games');

      // print_r($query);
      return $query->result_array();
    }

    $query = $this->db->get_where('games', array('id', $id));

    return $query->row_array();
  }

  public function add_game($data) {
    print('Data array...');
    print_r($data);
    // exit('var dump ^^');
    // $cleanData = array(
    //   ['player1name'] => $data['player1name'],
    //   'player1email' => $data['player1email'],
    //   'player2name' => $data['player2name'],
    //   'player2email' => $data['player2email'],
    //   'winner' => $data['gameWinner'],
    //   'gameStarted' => $data['gameStarted'],
    //   'gameEnded' => $data['gameEnded']
    // );
    // print('clean data...');
    // var_dump($cleanData);
    // exit('exit');
    return $this->db->insert('games', $data);
    redirect('/');
  }
}