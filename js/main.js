
let startTime = $("#timer").text()
let campo = $(".campo-input");

$(() => {
    atualizaFrase();
    inputCount();
    startCronom();
    marcadores();
    $("#restart-game").click(restartGame);
});


function marcadores() {
    let frase = $(".frase").text();
    campo.on("input", function () {
        let digitado = campo.val();
        let comparavel = frase.substr(0, digitado.length);
        console.log("Digitado:" + digitado)
        console.log("Frase C.:" + comparavel)
        if(digitado == comparavel){
            campo.addClass("campo-correct")
            campo.removeClass("campo-wrong")
        }else {
            campo.addClass("campo-wrong")
            campo.removeClass("campo-correct")
        }
    });
}

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
                clearInterval(cronometroID);
                endGame();
            }
        }, 1000);
    })
}

function endGame() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-disabled");
    addToPlacar()
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
        campo.toggleClass("campo-disabled");
        campo.removeClass("campo-correct");
        campo.removeClass("campo-wrong");
    })
}