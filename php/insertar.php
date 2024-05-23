<?php
    require("datosConexion.php");
    $data=json_decode(file_get_contents("php://input"));
    if($data){
        $valores=json_encode($data->aGuardar);
        $sql="INSERT INTO lista(productos) VALUES ('$valores')";
        $conn->query($sql);
        echo "ok";
    }
    $conn->close()
?>