<meta charset="UTF-8">


<?php

// incluir os arquivos abaixo:
include "IkarusWidget.php";
include "airports.php";
include "programs.php";


$login = "public"; // seu login
$password = "tG3z9XvHX1IposLNFIvQ"; // sua senha(a que é gerada junto com o token e não é a mesma usada para entrar no nosso site).
$id = "pub";
$key = "3e2a141122eca316ccf1111213cdd5b2";

$options = array(
    "url_to_post" => "/teste.php",
    "widgetUrl"   => ""
    // exemplo 1: se seu webroot é "https//www.seu_dominio.com.br/" então "widgetUrl" será vazio "" 
    // exemplo 2: se seu webroot é "https//www.seu_dominio.com.br/public" então "widgetUrl" será vazio "/public" 
);

$ikarus = new IkarusWidget($id, $key, $login, $password, $programs, $airports, $options);
$ikarus->widget();
//echo $ikarus->resultTable();

?>
