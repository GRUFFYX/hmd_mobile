<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');

    $arr = array();
    if(isset($_COOKIE['HomeTab'])){
    array_push($arr, $_COOKIE['HomeTab'], $_COOKIE['BookTab'], $_COOKIE['ProfileTab']);
}


    echo json_encode($arr);
