<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
    include("db_connect.php");
    
    $id = $_SESSION['snid'];
    $arr = array();
	$stmt = $db->prepare("SELECT pfl_skl_ctg FROM hmd_pfl_skl WHERE pfl_skl_id = $id");
	$query = $stmt->execute();
    while($row = $stmt->fetch()){
        $id = $row['pfl_skl_ctg'];
        $state = $db->prepare("SELECT ctg_tl FROM hmd_ctg WHERE ctg_cd = '$id'");
        $state->execute();
        $result = $state->fetch(PDO::FETCH_ASSOC);
        array_push($arr, $result);
        
    }
    echo json_encode($arr);
?>