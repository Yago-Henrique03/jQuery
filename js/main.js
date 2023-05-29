
let startTime = $("#timer").text()
let campo = $(".campo-input");

$(() => {
    atualizaFrase();
    inputCount();
    startCronom();
    $("#restart-game").click(restartGame);
});

function atualizaFrase() {
    let frase = $(".frase").text();
    let numPalavras = frase.split(" ").length;
    let tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inputCount(){
    campo.on("input", () => {
        let content = campo.val();
        let qtdWords = content.split(/\S+/).length - 1;
        let qtdCharact = content.length
        $("#count-palavras").text(qtdWords);
        $("#count-caracteres").text(qtdCharact)
    })
}

function startCronom() {
    let reachTimer = $("#timer").text();
    campo.one("focus", () => {
        let cronometroID = setInterval(() => {
            reachTimer--;
            $("#timer").text(reachTimer);
            if(reachTimer < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
            }
        }, 1000);
    })
}

function restartGame(){
    let reiniciarGame = $("#restart-game");
    reiniciarGame.click(() => {
        campo.attr("disabled", false);
        campo.val("");
        $("#count-palavras").text("0");
        $("#count-caracteres").text("0");
        $("#timer").text(startTime);
        startCronom()
    })
}
