$(document).ready(function(){
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/sn_check.php",
        type: "POST",
        success: function(response){
            if(response == ""){
                console.log("Session has no value");
            }
            else{
                window.location.href=response;
            }
        }
    });
});