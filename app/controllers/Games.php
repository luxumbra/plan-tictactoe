<?php

class Games extends CI_Controller {
  public function index() {

    $data['title'] = 'Last 5 games played';
    $data['games'] = $this->game_models->get_games();
    print_r($data['games']);

    $this->load->view('templates/header', $data);
    $this->load->view('games/index', $data);
    $this->load->view('templates/footer', $data);
  }
  public function addGame($encodedString) {
    var_dump($encodedString);
  }
}