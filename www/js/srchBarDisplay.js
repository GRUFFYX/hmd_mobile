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
                        console.log(index);
                        getJob(index, pfl.pfl_id, nm);                       
                    
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

function getJob(id, pfl_id, pfl_nm){
    console.log(pfl_id);
    var sch = $(".schBar").val();
    if(sch != ""){
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/dpItem.php",
            type: "GET",
            data: {
                "key": $(".schBar").val(),
                "pfl": pfl_id
            },
            success: function(response){
                response.forEach(function(skl, index){
                    $('.jbCont').append(`<div class="jbItem">
                                                    <div class="imgFrame">
                                                        <div class="imgCont"></div>
                                                    </div>

                                                    <div class = "pflInfo" id = "${id}" name="${pfl_id}">
                                                        <div class = "pflName">
                                                            ${pfl_nm}
                                                        </div>
                                                        <div class = "pflJob">
                                                            ${skl.ctg_tl}
                                                        </div>
                                                    </div>
                                                </div>`);
                    console.log(skl.ctg_tl);
                });
            }
        });
    }
}