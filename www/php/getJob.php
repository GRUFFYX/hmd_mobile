<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
	include("db_connect.php");

    $key = $_GET['key'];
    $stmt = $db->prepare("SELECT ctg_tl FROM hmd_ctg WHERE ctg_tl LIKE '%$key%'");
    $stmt->execute();
    $query = $stmt->fetch();

    echo json_encode($query);
?>