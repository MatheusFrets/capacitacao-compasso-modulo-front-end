$(function(){
    //var txt = $('#txt_nome');
    //txt.val();
/*setInterval(function(){
        
        txt.toggle();
        
        /*if(txt.is(":visible")){
            txt.hide('slow');
        }else{
            txt.show('slow');
        }

      
    }, 2000);*/

    var $div_produtos  = $('#produtos');
    var $div_frm_cadastro = $('#div_frm_cadastro');
    var $txt_nome_produto = $div_frm_cadastro.find('#txt_nome');
    var $txt_preco_produto = $div_frm_cadastro.find('#txt_preco');
    var $div_msg_sucesso = $('.msg_sucesso');

    var $ar_produtos = [
        { "nome" : "Produto 1", "valor" : 10.5},
        { "nome" : "Produto 2", "valor" : 8.5},
        { "nome" : "Produto 3", "valor" : 19.5}
    ];

    function renderizaProdutos(){
//limpo os objetos dentro da div
        $div_produtos.empty();

        $.each($ar_produtos, function(key, obj){
            // crio uma  nova dix
            var $div = $("<div/>");
            var $h1 = $("<h1>");
            var $p = $("<p>");

            $h1.html(obj.nome);
            // adiciono h1 dentro da div
            $p.html(obj.valor);

            $div.append($h1);
            $div.append($p);

            //add o preco no paragrafo
            

            // adiciono o objeto div no container #produtos
            $div_produtos.append($div);
        });
    }

    $div_frm_cadastro.find(".js_frm_cadastro").submit(function(e){
        e.preventDefault();

        $txt_nome_produto.val();
        $txt_preco_produto.val();

        $ar_produtos.push({
            "nome" : $txt_nome_produto.val(),
            "valor" :  $txt_preco_produto.val()
        });
        renderizaProdutos();
        $(this)[0].reset();
        $div_msg_sucesso.removeClass('hide');
        setTimeout(function(){
            $div_msg_sucesso.addClass('hide');
        }, 5000);

        location.href = "#div_frm_cadastro"; 
        
        
        
    });

    renderizaProdutos();


});