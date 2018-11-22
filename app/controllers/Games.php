<?php

class Games extends CI_Controller {
  public function index() {

    $data['title'] = 'Last 5 games played';
    $data['games'] = $this->game_model->get_games();

    $this->load->view('templates/header', $data);
    $this->load->view('games/index', $data);
    $this->load->view('templates/footer', $data);
  }

  public function create() {
    $data = $this->input->post('insertData');


    // exit('Debug exit');
    if($data === false){
      print('No game data');
    }
    print('Game controller');
    // $dataJSON = json_decode($data, true);
    // print_r($dataJSON);

    $this->game_model->add_game($data);
    // redirect('/');
  }
}