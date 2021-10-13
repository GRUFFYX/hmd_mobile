$(document).ready(function(){
    $('.osklCont').empty();
    $('.usklCont').empty();
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/dpaccskl_Edit.php",
        type: "GET",
        success: function(response){
            if(response != ''){
                response.forEach(function(acc, index){
                        $('.osklCont').append(`<div class = "osklItm"><div class = "ojbtl">${acc.ctg_tl}</div><div class ="arrow-down" onclick = "remSkl('${acc.ctg_cd}')"><span>V</span></div></div>`);
                });
            }
            else{
                $('.osklCont').append(`<p class = "msLbl" >No Skill(s) to be displayed.</p>`);
            }
        }
    });


    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/dpaccskl_Edit_exclude.php",
        type: "GET",
        success: function(response){
            if(response != ''){
                response.forEach(function(skl, index){
                        $('.usklCont').append(`<div class = "usklItm"><div class = "jbtl">${skl.ctg_tl}</div><div class ="arrow-up" onclick = "addSkl('${skl.ctg_cd}')"><span>Ʌ</span></div></div>`);
                });
            }
            else{
                $('.usklCont').append(`<p class = "msLbl" >No Skill(s) to be displayed.</p>`);
            }
        }
    });

    $('.btnCont').click(function(){
        window.location.href="main.html";
    });
});

function remSkl(code){
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/remSkl.php",
        type: "POST",
        data: {
            "code": code
        },
        success: function(response){
            console.log("Line reached");
            window.location.href="editSkl.html";
        }
    });

}

function addSkl(code){
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/addSkl.php",
        type: "POST",
        data: {
            "code": code
        },
        success: function(response){
            console.log("Line reached");
            window.location.href="editSkl.html";
        }
    });

}

