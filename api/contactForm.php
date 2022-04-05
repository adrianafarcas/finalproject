<?php

$user = 'myuser';
$pass = '123';
$dbName = 'finalproject';

$conn = new mysqli('localhost', $user, $pass, $dbName);

if($conn->connect_error){
    die('<h1>Eroare la conectarea la DB</h1>');
};


if(isset($_POST['firstname'])){
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $interog = "INSERT INTO `contact`(`id`, `firstName`, `lastName`, `email`, `message`) VALUES ('[value-1]','$firstName','$lastName','$email','$subject')";
    $rez = @mysqli_query($conn, $interog);
    if($rez == null) {
   
        echo "<h1> BAD QUERY! </h1>";
    }
    else {
        echo "<h1> MESSAGE SENT! </h1>";
        // header("Refresh: 1; url=http://localhost:3000/contact");
    }
};