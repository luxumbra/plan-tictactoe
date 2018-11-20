<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['games/index'] = 'games/index';
$route['games/(:any)'] = 'games/view/$1';
$route['games'] = 'games/index';
$route['default_controller'] = 'pages/view';
$route[':any'] = 'pages/view/$1';

