<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    session_unset();
    session_destroy();
    $result = "../index.html";
    echo json_encode($result);
?>