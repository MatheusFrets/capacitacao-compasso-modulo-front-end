$(function(){


    $('#txt_cep').bind('keydown', function(e) {
        if(e.keycode == 13) { // se pressionar enter
            e.preventDefault();
        }
    });
});