$(document).ready(function(){
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/mainsncheck.php",
        type: "POST",
        success: function(response){
            if(response == ""){
                
            }
            else{
                window.location.href=response;
            }
        }
    });
});