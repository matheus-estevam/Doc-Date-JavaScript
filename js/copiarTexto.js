function copiarTexto(idTextarea) {
    var textarea = document.querySelector(idTextarea);

    textarea.select();
    document.execCommand('copy');
}

