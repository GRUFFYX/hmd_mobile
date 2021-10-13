$(document).ready(function(){
        $('.sklList').empty();
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/dpSkls.php",
            type: "POST",
            success: function(response){
                if(response != ''){
                    response.forEach(function(acc, index){
                            $('.sklList').append(`<p class = "sklItm" >${acc.ctg_tl}</p>`);
                    });
                }
                else{
                    $('.sklList').append(`<p style="color: #423131;" >No Skill(s) to be displayed.</p>`);
                }

            }
        });
});