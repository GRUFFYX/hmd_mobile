$(document).ready(function(){
    $('.loginbtn').click(function(){
        $('#username').attr("style", "border-bottom: 1px solid #CED4DA");
        $('#password').attr("style", "border-bottom: 1px solid #CED4DA");
        $('.usr-rq').attr("style", "display:none");
        $('.pwd-rq').attr("style", "display:none");
        $('.up-inc').attr("style", "display:none");
        if($('#username').val()==""){
            $('#username').attr("style", "border-bottom: 1px solid red");
            $('.usr-rq').attr("style", "display:block");
        }
        if($('#password').val()==""){
            $('#password').attr("style", "border-bottom: 1px solid red");
            $('.pwd-rq').attr("style", "display:block");
        }
        if($('#username').val() != "" && $('#password').val() != ""){
            $.ajax({
                url: "http://192.168.31.199/prj_hmd/homeaid/www/php/hmd_login.php",
                type: "POST",
                data: {
                    "username": $('#username').val(),
                    "password": $('#password').val(),
                    },
                success: function(response){
                    if(response.code == '201'){
                        var usr = $('#username').val();
                        crtsn(usr);
                    }
                    else{
                        $('#username').attr("style", "border-bottom: 1px solid red");
                        $('#password').attr("style", "border-bottom: 1px solid red");
                        $('.up-inc').attr("style", "display:block");
                    }


                }

            });
            
        }

    });
});

function crtsn(username){
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/crtsn.php",
        type: "POST",
        data: {
            "username": username,
        },
        success: function(response){
            window.location.href=response;
        }
    });
}