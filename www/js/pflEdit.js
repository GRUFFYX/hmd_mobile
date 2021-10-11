$(document).ready(function(){
    $('.EditInfo').attr("style","display: none");
    $('.abtEdit').click(function(){
        $('.genInfo').attr("style","display: none");
        $('.fullName').attr("style","display: none");
        $('.EditInfo').attr("style","display: block");
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/getPfl.php",
            type: "GET",
            success: function(response){
                $('.edtNm').val(response.pfl_nm);
                $('.edtAdr').val(response.pfl_adr);



            }

        });
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/pflEmail.php",
            type: "POST",
            success: function(response){
                response.forEach(function(acc, index){
                    $('.edtEml').val(acc.acc_eml);
                });

            }
        });

    });
    $('.pflCnlBtn').click(function(){
        $('.genInfo').attr("style","display: block");
        $('.fullName').attr("style","display: block");
        $('.EditInfo').attr("style","display: none");
    });


    $('.pflUpdBtn').click(function(){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/updPfl.php",
            type: "POST",
            data: {
                "fullname": $('.edtNm').val(),
                "address": $('.edtAdr').val(),
                "email": $('.edtEml').val()
            },
            success: function(response){
                if(response.code=='201'){
                    window.location.href="main.html";
                }
            }
        });
    });
});