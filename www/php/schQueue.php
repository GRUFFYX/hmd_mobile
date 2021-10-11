<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
	include("db_connect.php");



    $arr = array();
    $key = $_GET['key'];
    $stmt = $db->prepare("SELECT ctg_cd FROM hmd_ctg WHERE ctg_tl LIKE '%$key%'");
    $stmt->execute();
    while($row = $stmt->fetch()){
        $code = $row['ctg_cd'];
        $state = $db->prepare("SELECT pfl_skl_id FROM hmd_pfl_skl WHERE pfl_skl_ctg = '$code'");
        $state->execute();
        while($query = $state->fetch()){
                $info = $query['pfl_skl_id'];
                $grab = $db->prepare("SELECT * FROM hmd_pfl WHERE pfl_id = $info ORDER BY pfl_nm ASC");
                $grab->execute();
                $result = $grab->fetch(PDO::FETCH_ASSOC);
                array_push($arr, $result);
        }
    }

    echo json_encode($arr);
        
    
	
?>