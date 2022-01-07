
var username;

$(document).ready(function() {

    username = window.localStorage.getItem("username");
    ajaxRequestUserData();

});

function ajaxRequestUserData() {
    $.ajax({
        type: "POST",
        dataType: 'json',
        data: {
            username: username
        },
        url: "../../php/requestUserData.php",
        success: function (data) {
            console.log("ajaxRequestUserData successful");
            console.log(data)
            printFrontEndStats(data);
        },
        error: function () {
            console.log("ajaxRequestUserData error");
        }
    });
}

function printFrontEndStats(data) {
    $(".h1-perfil").text("Estatísticas de " + data[0].nome);
    $("#pTotalJogos").text(data[0].total_jogos);
    $("#pTotalJogosGanhos").text(data[0].total_jogos_ganhos);
    $("#pTotalPontos").text(data[0].total_pontos);
    $("#pTotalTirosDisparados").text(data[0].total_tiros_disparados);
    $("#pTotalVidasPerdidas").text(data[0].total_vidas_perdidas);
}