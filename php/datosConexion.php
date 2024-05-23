<?php
$servidor="localhost";
$usuario="root";
$password="";
$database="compra";

$conn= new mysqli($servidor, $usuario, $password, $database);
if($conn->connect_error){
    die("Conexion fallida");
}
?>