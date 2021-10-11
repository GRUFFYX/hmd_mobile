<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");

    $user = $_POST['username'];
    $stmt = $db->prepare("SELECT acc_id FROM hmd_acc WHERE acc_usr = ?");
	$query = $stmt->execute([$user]);
    while($row = $stmt->fetch()){
        $sesh = $row['acc_id'];
    }

    $_SESSION['snid'] = $sesh;
    $result = "main.html";
    echo json_encode($result);
?>