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
}