<?php

include "IkarusWidget.php";


$login = "ikarus"; // seu login
$password = "Fzw12QR5ZfPfC6LYUncL"; // sua senha(a que é gerada junto com o token e não é a mesma usada para entrar no nosso site).
$id = "db5dd55d77bd7320ba2a467c05c16ce1";
$key = "db5dd55d77bd7320ba2a467c05c16ce1";


$ikarus = new IkarusWidget($id, $key, $login, $password);

$ikarus->widget();





?>



















