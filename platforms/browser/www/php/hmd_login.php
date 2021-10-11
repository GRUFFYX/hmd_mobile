<?php
	header("Access-Control-Allow-Origin: http://localhost");
	header('Content-Type: application/json');
	include("db_connect.php");
	session_start();

	$user = $_POST['username'];
    $pass = $_POST['password'];
	$password = hash("sha256", $pass);
	
	$stmt = $db->prepare("SELECT * FROM hmd_acc WHERE acc_usr = ? AND acc_pwd = ?");
	$stmt->execute([$user, $password]);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	
	
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
