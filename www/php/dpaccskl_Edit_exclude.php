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
        array_push($arr, $id);
    }



    
    $s = "";
    for($i = 0; $i < count($arr); $i++){
        if($i<count($arr)-1){
            $s .= "'" . $arr[$i] . "', ";
        }
        else{
            $s .= "'" . $arr[$i] . "'";
        }
    }
    if($s != ""){
        $stmt = $db->prepare("SELECT * FROM hmd_ctg WHERE ctg_cd NOT IN($s)");
        $query = $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    else{
        $stmt = $db->prepare("SELECT * FROM hmd_ctg");
        $query = $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    echo json_encode($result);


?>