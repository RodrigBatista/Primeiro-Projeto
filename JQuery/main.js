$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown(); // slideDown & slideUp: Essa função é usada para alternar a exibição de um elemento, aplicando uma animação de deslizamento para cima ou para baixo. Quando chamada em um elemento visível, ele o oculta deslizando-o para cima. Se o elemento estiver oculto, ele será mostrado deslizando-o para baixo.
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // .val(): Essa função do jQuery é utilizada para obter ou definir o valor de um elemento de formulário. Ela é comumente usada em elementos como <input>, <select> e <textarea> para manipular o valor desses elementos. Quando usada sem argumentos, ela retorna o valor atual do elemento selecionado.
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000); /*
            Fade-in: Efeito de transição visual utilizados no desenvolvimento web. É usado quando você deseja que um elemento seja exibido gradualmente na página. Ao aplicar o efeito fade-in, o elemento começa invisível e, em seguida, vai aumentando gradativamente a opacidade até ficar completamente visível. 
            
            Fade-out: Efeito de transição visual utilizados no desenvolvimento web. É usado quando você deseja que um elemento seja removido gradualmente da página. Ao aplicar o efeito fade-out, o elemento vai diminuindo gradativamente a opacidade até ficar completamente invisível, e então pode ser removido da visualização ou ocultado*/
            $('#endereco-imagem-nova').val('')
    })
})