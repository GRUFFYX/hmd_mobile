<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
	include("db_connect.php");

	$user = $_POST['username'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $password = hash("sha256", $pass);

	$stmt = $db->prepare("INSERT INTO hmd_acc (acc_usr, acc_eml, acc_pwd) VALUES(?, ?, ?)");
	$result = $stmt->execute([$user, $email, $password]);
	
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