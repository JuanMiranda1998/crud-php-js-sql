<?php
    require("datosConexion.php");
    $sql="TRUNCATE TABLE lista";
    if($conn->query($sql)){
        echo "ok";
    }
?>