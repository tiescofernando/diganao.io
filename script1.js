    const comentarioForm = document.getElementById('comentarioForm');
    const campoComentario = document.getElementById('campoComentario');
    const listaComentarios = document.getElementById('listaComentarios');

    // Carregar comentários do localStorage ao carregar a página
    document.addEventListener('DOMContentLoaded', carregarComentarios);

    // Função para carregar comentários do localStorage
    function carregarComentarios() {
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.forEach(comentario => {
            adicionarComentarioNaTela(comentario);
        });
    }

    // Função para adicionar um comentário na tela
    function adicionarComentarioNaTela(comentario) {
        const divComentario = document.createElement('div');
        divComentario.className = 'comentario';
        divComentario.textContent = comentario;
        listaComentarios.appendChild(divComentario);
    }

    // Evento de envio do formulário
    comentarioForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const comentario = campoComentario.value;

        // Adicionar comentário ao localStorage
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.push(comentario);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));

        // Adicionar comentário na tela
        adicionarComentarioNaTela(comentario);

        // Limpar o campo de texto
        campoComentario.value = '';
    });