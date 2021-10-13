$(document).ready(function(){
    $('.schBar').on("keypress", function(e){
        if(e.which == '13'){
            e.preventDefault();
            var key = $('.schBar').val();
            var link = "search.html?key=" + key;
            window.location.href=link; 
        }
    });
});