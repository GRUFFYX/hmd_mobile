<?php
	header("Access-Control-Allow-Origin: http://localhost");
	header('Content-Type: application/json');
	include("db_connect.php");

	$user = $_POST['username'];

	$stmt = $db->prepare("SELECT acc_id FROM hmd_acc WHERE acc_usr = ?");
	$stmt->execute([$user]);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	echo json_encode($result);

?>