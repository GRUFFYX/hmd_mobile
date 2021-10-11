<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
	include("db_connect.php");

	$id = (int) $_POST['id'];


	$stmt = $db->prepare("INSERT INTO hmd_pfl (pfl_id) VALUES(?)");
	$result = $stmt->execute([$id]);
	
	if($result){
		echo json_encode([
			'code' => '201'
		]);
	}
	else{
		echo json_encode([
			'code' => '31'
		]);
	}
?>