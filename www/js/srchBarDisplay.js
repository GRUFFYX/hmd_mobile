$(document).ready(function(){
    let searchparams = new URLSearchParams(window.location.search);
    var key = searchparams.get('key');
    $('.schBar').val(key);
    $('.jbCont').empty();
    var test = $(".schBar").val();
    if(test != ""){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/schQueue.php",
            type: "GET",
            data: {
                "key": $('.schBar').val()
            },
            success: function(response){
                if(response != ""){
                    response.forEach(function(pfl, index){
                        if(pfl.pfl_nm != ""){
                            var nm = pfl.pfl_nm;
                        }
                        else{
                            var nm = "No Name";
                        }

                        $('.jbCont').append(`<div class="jbItem">
                                                <div class="imgFrame">
                                                    <div class="imgCont"></div>
                                                </div>

                                                <div class = "pflInfo" id = "${pfl.pfl_id}">
                                                    <div class = "pflName">
                                                        ${nm}
                                                    </div>
                                                </div>

                                            </div>`);
                                            getJob(pfl.pfl_id);                     
                    });
                }
                else{
                    $('.jbCont').append(`<p class = "schLbl">No results found.`);
                }
            }
        });
    }else{
        $('.jbCont').append(`<p class = "schLbl">No results found.`);
    }
    $('.btnCont').click(function(){
        window.location.href="main.html"
    });


});

function getJob(id){
    var test = $(".schBar").val();
    if(test != ""){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/getJob.php",
            type: "GET",
            data: {
                "key": $(".schBar").val(),
            },
            success: function(response){
                
                $('#' + id).append(`
                    <div class = "pflJob">
                        ${response.ctg_tl}
                    </div>`);
                console.log(response.ctg_tl);
            }
        });
    }
}