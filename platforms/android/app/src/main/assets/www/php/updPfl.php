<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");

    $user = $_SESSION['snid'];
    $name = $_POST['fullname'];
    $adr = $_POST['address'];
    $eml = $_POST['email'];
    $stmt = $db->prepare("UPDATE hmd_pfl SET pfl_nm = ? , pfl_adr = ?  WHERE pfl_id = ?");
	$result = $stmt->execute([$name, $adr, $user]);
    $stmt = $db->prepare("UPDATE hmd_acc SET acc_eml = ? WHERE acc_id = ?");
	$result = $stmt->execute([$eml, $user]);
    
    if($result){
		echo json_encode([
		'code' => '201'
		]);
	}
?>