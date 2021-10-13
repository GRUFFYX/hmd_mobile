<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");
    
    $id = $_SESSION['snid'];
    $code = $_POST['code'];
    $stmt = $db->prepare("DELETE FROM hmd_pfl_skl WHERE pfl_skl_id = ? AND pfl_skl_ctg = ?");
    $result = $stmt->execute([$id, $code]);

    echo json_encode($result);
?>