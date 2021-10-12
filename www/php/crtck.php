<?php
    header("Access-Control-Allow-Origin: http://localhost");
    header('Content-Type: application/json');



    if(!isset($_COOKIE['HomeTab'])){
    $arr = array();
    setcookie("HomeTab" ,"block");
    setcookie("BookTab" ,"none");
    setcookie("ProfileTab" ,"none");
    }
    else{
        if(isset($_GET['home'])){
            $home = $_GET['home'];
            $book = $_GET['book'];
            $profile = $_GET['profile'];
            setcookie("HomeTab" , $home);
            setcookie("BookTab" , $book);
            setcookie("ProfileTab" , $profile);
        }
        else{
            setcookie("HomeTab" , $_COOKIE['HomeTab']);
            setcookie("BookTab" , $_COOKIE['BookTab']);
            setcookie("ProfileTab" , $_COOKIE['ProfileTab']);
        }
    }
    header("Location: getCookies.php");
?>