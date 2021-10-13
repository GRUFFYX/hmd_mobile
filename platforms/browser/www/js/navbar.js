$(document).ready(function(e){
    $('.homeCont').css("display", "none");
    $('.bookCont').css("display", "none");
    $('.profileCont').css("display", "none");
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/crtck.php",
        type: "GET",
        success: function(response){
            $('.homeCont').css("display", response[0]);
            $('.bookCont').css("display", response[1]);
            $('.profileCont').css("display", response[2]);
            if(response[0] == "block"){
                $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-active.png");
            }
            else if(response[1] == "block"){
                $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-active.png");
            }
            else if(response[2] == "block"){
                $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-active.png");
                }
            console.log(response[0]);
        }
    });
    
    $('.hmTab').click(function(){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/crtck.php",
            type: "GET",
            data: {
                "home": "block",
                "book": "none",
                "profile": "none",
            },
            success: function(response){
                $('.homeCont').css("display", response[0]);
                $('.bookCont').css("display", response[1]);
                $('.profileCont').css("display", response[2]);
                $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-active.png");
                $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-idle.png");
                $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-idle.png");
            }
        });
    });

    $('.bkTab').click(function(){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/crtck.php",
            type: "GET",
            data: {
                "home": "none",
                "book": "block",
                "profile": "none",
            },
            success: function(response){
                $('.homeCont').css("display", response[0]);
                $('.bookCont').css("display", response[1]);
                $('.profileCont').css("display", response[2]);
                $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-idle.png");
                $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-active.png");
                $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-idle.png");
            }
        });



    });

    $('.prfTab').click(function(){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/crtck.php",
            type: "GET",
            data: {
                "home": "none",
                "book": "none",
                "profile": "block",
            },
            success: function(response){
                $('.homeCont').css("display", response[0]);
                $('.bookCont').css("display", response[1]);
                $('.profileCont').css("display", response[2]);
                $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-idle.png");
                $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-idle.png");
                $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-active.png");
            }
        });
    });



});
