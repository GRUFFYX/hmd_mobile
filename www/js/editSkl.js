$(document).ready(function(){
    $('.osklCont').empty();
    $('.usklCont').empty();
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/dpaccskl_Edit.php",
        type: "GET",
        success: function(response){
            if(response != ''){
                response.forEach(function(acc, index){
                        $('.osklCont').append(`<div class = "osklItm" onclick="remSkl('${acc.ctg_cd}')">${acc.ctg_tl}</div>`);
                });
            }
            else{
                $('.sklList').append(`<p style="color: #423131;" class = "" >No Skill(s) to be displayed.</p>`);
            }
        }
    });


    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/dpaccskl_Edit_exclude.php",
        type: "GET",
        success: function(response){
            if(response != ''){
                response.forEach(function(skl, index){
                        $('.usklCont').append(`<div class = "usklItm" onclick="remSkl('${skl.ctg_cd}')">${skl.ctg_tl}</div>`);
                });
            }
            else{
                $('.sklList').append(`<p style="color: #423131;" class = "" >No Skill(s) to be displayed.</p>`);
            }
        }
    });

    $('.btnCont').click(function(){
        window.location.href="main.html";
    });
});

function remSkl(code){

}

