<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");
    
    $id = $_SESSION['snid'];
    $code = $_POST['code'];
    $stmt = $db->prepare("INSERT INTO hmd_pfl_skl(pfl_skl_id, pfl_skl_ctg) VALUES ('$id','$code')");
    $result = $stmt->execute();

    echo json_encode($result);
    
?>