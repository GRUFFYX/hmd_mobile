<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");
    
    $id = $_SESSION['snid'];
	$stmt = $db->prepare("SELECT acc_eml FROM hmd_acc WHERE acc_id = ?");
	$stmt->execute([$id]);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	echo json_encode($result);
?>