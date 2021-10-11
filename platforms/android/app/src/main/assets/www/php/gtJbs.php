<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");

	$stmt = $db->prepare("SELECT * FROM hmd_ctg");
	$stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
?>