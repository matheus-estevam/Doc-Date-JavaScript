function copiarTexto(idTextarea) {
    var textarea = document.querySelector(idTextarea);

    textarea.select();
    document.execCommand('copy');
}

function executarCodigo(idTextarea) {
    var textarea = document.querySelector(idTextarea);
    var codigo = textarea.value;

    try {
        eval(codigo);
    } catch (error) {
        console.error('Erro ao executar o código:', error);
    }
}