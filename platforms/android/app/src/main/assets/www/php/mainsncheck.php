<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    if(isset($_SESSION['snid'])){
        $result = "";
    }
    else{
        $result = "../index.html";
    }
    echo json_encode($result);
?>