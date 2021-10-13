$(document).ready(function(){
        $('.fullName').empty();
        $('.pflEml').empty();
        $('.pflAdr').empty();
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/pflTab.php",
            type: "POST",
            success: function(response){
                response.forEach(function(acc, index){
                    if(acc.pfl_nm != ''){
                        $('.fullName').append(acc.pfl_nm);
                    }
                    else{
                        $('.fullName').append("No Name");
                    }
                    if(acc.pfl_adr != ''){
                        $('.pflAdr').append(acc.pfl_adr);
                    }
                    else{
                        $('.pflAdr').append("No Address");
                    }
                });

            }
        });

        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/pflEmail.php",
            type: "POST",
            success: function(response){
                response.forEach(function(acc, index){
                    $('.pflEml').append(acc.acc_eml);
                });

            }
        });



        $('.sklEdit').click(function(){
            window.location.href = "editSkl.html";
        });

});