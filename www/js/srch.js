$(document).ready(function(){
    $('.schBar').on("keypress",function(e){
        if(e.which == '13'){
            e.preventDefault();
            var key = $('.schBar').val();
            window.location.href = "search.html?key=" + key;
        }
    });
});