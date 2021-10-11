$(document).ready(function(){
    $('.cpd-crc').attr("style", "display:none");
    $('.cpd-inc').attr("style", "display:none");
    $('.usr-err').attr("style", "display:none");
    $('.eml_inc').attr("style", "display:none");
    $('.eml_err').attr("style", "displat:none");
    $('.pwd-err').attr("style", "display:none");
    $('.cpd-non').attr("style", "display:none");
    function AutoChecker(e) {
        if($('.sgn-cpwd').val() != ""){
            if($('.sgn-pwd').val() == $('.sgn-cpwd').val()){
                $('.cpd-crc').attr("style", "display:block");
                $('.cpd-crc').attr("style", "color:green");
                $('.cpd-inc').attr("style", "display:none");
                $('.sgn-cpwd').attr("style", "margin-bottom:0px;");
            }
            else{
                $('.cpd-crc').attr("style", "display:none");
                $('.cpd-inc').attr("style", "display:block");
                $('.sgn-cpwd').attr("style", "margin-bottom:0px;");
            }
        }
        else{
            $('.cpd-crc').attr("style", "display:none");
            $('.cpd-inc').attr("style", "display:none");
            $('.sgn-cpwd').attr("style", "margin-bottom:20px;");
        }
        $('.cpd-non').attr("style", "display:none");
    }
    document.getElementById('pwd-checker').addEventListener('input', AutoChecker);
    document.getElementById("pwd-checker").addEventListener("keyup", AutoChecker);

        $('.sgnbtn').click(function(){
            $('.usr-err').attr("style", "display:none");
            $('.eml-err').attr("style", "display:none");
            $('.pwd-err').attr("style", "display:none");
            $('.cpd-crc').attr("style", "display:none");
            $('.sgn-usr').attr("style", "margin-bottom:20px;");
            $('.sgn-eml').attr("style", "margin-bottom:20px;");
            $('.sgn-pwd').attr("style", "margin-bottom:20px;");
            $('.sgn-cpwd').attr("style", "margin-bottom:20px;");
            
            if($('.sgn-usr').val()==""){
                $('.usr-err').attr("style", "display:block");
                $('.sgn-usr').attr("style", "margin-bottom:0px;");
            }
            if($('.sgn-pwd').val()==""){
                $('.pwd-err').attr("style", "display:block");
                $('.sgn-pwd').attr("style", "margin-bottom:0px;");
            }
            if($('.sgn-cpwd').val()==""){
                $('.cpd-non').attr("style", "display:block");
                $('.sgn-cpwd').attr("style", "margin-bottom:0px;");
            }

            var validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i
            var isEmailValid = validEmailRegEx.test($('.sgn-eml').val());
            if($('.sgn-eml').val()==""){
                $('.eml-err').attr("style", "display:block");
                $('.eml-inc').attr("style", "display:none");
                $('.sgn-eml').attr("style", "margin-bottom:0px;");
            }
            else{
                if(!isEmailValid){
                    $('.eml-inc').attr("style", "display: block");
                    $('.sgn-eml').attr("style", "margin-bottom:0px;");
                }
                else{
                    $('.eml-inc').attr("style", "display: none");
                    $('.sgn-eml').attr("style", "margin-bottom:20px;");
                }
            }
            if($('.sgn-usr').val() != "" && $('.sgn-eml').val() != "" && $('.sgn-pwd').val() != "" && $('.sgn-cpwd').val() != "" && $('.sgn-pwd').val() == $('.sgn-cpwd').val()){
                //CHECKS WHETHER USERNAME IS TAKEN OR NOT
                $.ajax({
                    url: "http://192.168.31.199/prj_hmd/homeaid/www/php/checkUsername.php",
                    type: "POST",
                    data: {
                            "username": $('.sgn-usr').val()
                        },
                    success: function(response){
                        var id;
                        response.forEach(function(acc, index){
                            id = acc.acc_id;
                        });
                        if(id > 0){
                            //console.log("Account Taken");
                            $('.usr-tkn').attr("style", "display:block;");
                            $('.sgn-usr').attr("style", "margin-bottom:0px;");
                        }
                        else{
                            //console.log("Account Free");
                            $('.usr-tkn').attr("style", "display:none;");
                            $('.sgn-usr').attr("style", "margin-bottom:20px;");
                            createAccount();
                            
                        }
                    }
                    

                });
                
            }
        });
});

function createAccount(){
    //CREATES NEW ACCOUNT ROW
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/hmd_signup.php",
        type: "POST",
        data: {
                "username": $('.sgn-usr').val(),
                "email": $('.sgn-eml').val(),
                "password": $('.sgn-pwd').val()
            },
        success: function(response){
            if(response.code == '201'){
                console.log("ACCOUNT CREATED.");
                getUser($('.sgn-usr').val());
            }
            else{
                console.log("Error");

            }


        }

    });

}

function getUser(username){
    //Gets ACC_ID of new Account
    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/checkUsername.php",
        type: "POST",
        data: {
                "username": username,
            },
        success: function(response){
            var id;
            response.forEach(function(acc, index){
                id = acc.acc_id;
            });
            if(id > 0){
                console.log("ID FOUND.");
                setProfile(id);
            }



        }
    });
}

function setProfile(id){

    $.ajax({
        url: "http://192.168.31.199/prj_hmd/homeaid/www/php/createProfile.php",
        type: "POST",
        data: {
                "id": id,
            },
        success: function(response){
            if(response.code == '201'){
                window.location.href = "log-in.html";
            }
            else{
                console.log("Error");
            }


        }
    });
}