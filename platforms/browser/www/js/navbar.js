$(document).ready(function(){
    $('.bookCont').attr("style", "display: none");
    $('.profileCont').attr("style", "display: none");
    $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-active.png");
    $('.hmTab').click(function(){
        $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-active.png");
        $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-idle.png");
        $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-idle.png");
        $('.homeCont').attr("style", "display: block");
        $('.bookCont').attr("style", "display: none");
        $('.profileCont').attr("style", "display: none");


    });

    $('.bkTab').click(function(){
        $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-idle.png");
        $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-active.png");
        $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-idle.png");
        $('.bookCont').attr("style", "display: block");
        $('.homeCont').attr("style", "display: none");
        $('.profileCont').attr("style", "display: none");



    });

    $('.prfTab').click(function(){
        $('.hmBtn').attr("src", "../img/global_img/tab-home-ico-idle.png");
        $('.bkBtn').attr("src", "../img/global_img/tab-booking-ico-idle.png");
        $('.prfBtn').attr("src", "../img/global_img/tab-profile-ico-active.png");
        $('.profileCont').attr("style", "display: block");
        $('.homeCont').attr("style", "display: none");
        $('.bookCont').attr("style", "display: none");


    });



});
