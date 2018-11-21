<?php
class Pages extends CI_Controller {

  public function view($page = 'home') {

    if( ! file_exists(APPPATH.'views/pages/'.$page.'.php') ) {
      show_404();
    }

    $data['title'] = ucfirst($page);

    $data['pastGamesTitle'] = 'Last 5 games played';
    $this->load->model('game_model');
    $data['games'] = $this->game_model->get_games();
    // print_r($data['games']);

    $this->load->view('templates/header', $data);
    $this->load->view('pages/'.$page, $data);
    $this->load->view('templates/footer', $data);
  }
}
