<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'password_manager';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$password = password_hash($_POST['password'], PASSWORD_DEFAULT);