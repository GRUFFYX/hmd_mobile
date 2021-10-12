<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');
	include("db_connect.php");

    $key = $_GET['key'];
    $pfl = $_GET['pfl'];
    $arr = array();
    $stmt = $db->prepare("SELECT pfl_skl_ctg FROM hmd_pfl_skl WHERE pfl_skl_id = $pfl");
    $stmt->execute();
    while($query = $stmt->fetch()){
        $code = $query['pfl_skl_ctg'];
        $disp = $db->prepare("SELECT ctg_tl FROM hmd_ctg WHERE ctg_cd = '$code' AND ctg_tl LIKE '$key%'");
        $disp->execute();
        $result = $disp->fetch(PDO::FETCH_ASSOC);
        if($result){
        array_push($arr, $result);}

    }

    echo json_encode($arr);
?>