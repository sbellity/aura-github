<?php 
  require_once(dirname(dirname(__FILE__)) . '/config.php'); 
  $filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
  if (php_sapi_name() === 'cli-server' && is_file($filename)) {
      return false;
  } else {
    $viewName = substr($_SERVER['REQUEST_URI'], 1);
    $viewFile = $viewName . '.php';
    if (!file_exists(dirname(__FILE__) . '/views/' . $viewFile)) {
      $viewFile = 'orgs.php';
    }
    include_once('views/layout.php');
  }