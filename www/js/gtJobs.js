$(document).ready(function(){
        $('.ctgBox').empty();
        $.ajax({
            url: "http://192.168.31.199/prj_hmd/homeaid/www/php/gtJbs.php",
            type: "POST",
            success: function(response){
                response.forEach(function(ctg, index){
                        $('.ctgBox').append(`<div class ="ctgItem" onclick="Tester('${ctg.ctg_tl}')">
                                                <div class = "imgctgcont">
                                                    <div class = "imgctg" style="background-image: url('../img/job_imgs/${ctg.ctg_cd}.jpg');">
                                                    </div>
                                                </div>
                                                <div class = "crdTitle">
                                                ${ctg.ctg_tl}
                                                </div>
                                            </div>`);
                });

            }
        });
});

function Tester(title){
    window.location.href="search.html?key=" + title;
}