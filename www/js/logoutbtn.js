$(document).ready(function(){
    $('.logout').click(function(){
        console.log("Line Reached");
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/sndes.php",
            type: "POST",
            success: function(response){
                window.location.href = response;
            }
        });


    });
    
});

