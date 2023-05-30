$("#show-placar").click(mostraPlacar);


function addToPlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let user = "Yago";
    let numPalavras = $("#count-palavras").text();
    let linha = newRow(user, numPalavras);
    
    linha.find(".button-remover").click(removeLinha);


    corpoTabela.prepend(linha);
    $(".placar").slideDown(200);
    scrollPlacar()
}

function scrollPlacar(){
    let position = $(".placar").offset().top;
    $("body").animate({
        scrollTop: position+"px"
    }, 1000);
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
        let linha = $(this).parent().parent();
        linha.fadeOut(1000);
        setTimeout(function () {
            linha.remove();
        }, 1000);
    })
}

function mostraPlacar(){
    $(".placar").stop().slideToggle();
}