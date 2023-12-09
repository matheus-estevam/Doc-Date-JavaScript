
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

hljs.highlightAll();

function copiarTexto(idTextarea) {
    var textarea = document.querySelector(idTextarea);

    textarea.select();
    document.execCommand('copy');
}

function executarCodigo(idTextarea, idResultado) {
    var textarea = document.querySelector(idTextarea);
    var resultadoElement = document.querySelector(idResultado);
    var codigo = textarea.value;

    try {
        // Limpe o conteúdo anterior antes de executar o novo código
        resultadoElement.innerText = '';

        // Sobrescreva a função console.log para capturar a saída
        var resultado = '';
        console.log = function (mensagem) {
            resultado += mensagem + '\n';
        };

        eval(codigo);

        // Exiba o resultado na própria página
        resultadoElement.innerText = resultado;
    } catch (error) {
        console.error('Erro ao executar o código:', error);
    }
}
