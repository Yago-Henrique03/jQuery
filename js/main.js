let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

let campo = $(".campo-input");
campo.on("input", () => {
    let content = campo.val();
    let qtdWords = content.split(/\S+/).length - 1;
    let qtdCharact = content.length
    $("#count-palavras").text(qtdWords);
    $("#count-caracteres").text(qtdCharact)
})