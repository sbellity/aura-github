<?php require_once('../config.php'); ?>
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>Aura ♥ Github</title>
    <meta name="description" content="">
    <link rel="stylesheet" href="./styles/bootstrap.css">
    <script src="./libs.js"></script>
    <script>
    require(['aura/aura'], function (Aura) {
      var app = new Aura({
        debug: true,
        github: {
          client_id: '<?php echo $config['github_client_id'] ?>',
          access_token: '<?php echo $config['github_access_token'] ?>'
        }
      });
      app.use('extensions/aura-github');
      app.start({ widgets: 'body' });
    });
  </script>
  </head>
  <body>
    <div class="container">
      <div data-aura-widget="github" data-aura-orgs="aurajs,emberjs,documentcloud,angular"></div>
      <div data-aura-widget="org" data-aura-org="aurajs"></div>
    </div>
    <a href="https://github.com/sbellity/aura-github" target='github'>
      <img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub">
    </a>
  </body>
</html>
