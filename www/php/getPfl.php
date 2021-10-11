<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");

    $user = $_SESSION['snid'];
    $stmt = $db->prepare("SELECT * FROM hmd_pfl WHERE pfl_id = ?");
	$stmt->execute([$user]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($result);
?>