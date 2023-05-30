
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

function addToPlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let user = "Yago";
    let numPalavras = $("#count-palavras").text();
    let linha = newRow(user, numPalavras);
    
    linha.find(".button-remover").click(removeLinha);


    corpoTabela.prepend(linha);
}

function newRow(usuario, words) {
    let linha = $("<tr>");
    let colunaUser = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(words);
    let colunaRemover = $("<td>");
    let link = $("<a>").addClass("button-remover").attr("href", "#");
    let icon = $("<i>").addClass("small").addClass("material-icons").text("delete");
    link.append(icon);

    colunaRemover.append(link);

    linha.append(colunaUser);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    console.log(linha);
    return linha;
}


function removeLinha(){
    $(document).on("click", ".button-remover", function (ev) {
        ev.preventDefault();
        $(this).parent().parent().remove();
    })
}
