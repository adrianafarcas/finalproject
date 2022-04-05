<?php

$user = 'myuser';
$pass = '123';
$dbName = 'finalproject';

$conn = new mysqli('localhost', $user, $pass, $dbName);

if($conn->connect_error){
    die('<h1>Eroare la conectarea la DB</h1>');
};

$int =  "SELECT  `name`, `description`, `price`, `photo` FROM `products`";
$res = $conn->query($int);

$dataArray = $res->fetch_assoc();
    echo '<pre>';
    var_dump($dataArray);
    echo '</pre>';
