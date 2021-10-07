$(document).ready(function(){
    $('.loginbtn').click(function(){
        $.ajax({
			url: "http://192.168.31.199/prj_hmd/homeaid/www/php/hmd_login.php",
			type: "POST",
			data: {
                "email": $('#email').val(),
                "password": $('#password').val(),
				},
			success: function(response){
                if(response.code == '201'){
                    window.location.href="main.html";
                }
                else{
                    console.log("Error");
                }


			}

		});

    });
});