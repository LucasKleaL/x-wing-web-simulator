
var lifes = 3;
var actualTurnTime;
var actualCenario;
var interval;

const cenarios = [
    "Tie-Fighter atacando",
    "Canhão de Plasma atacando",
    "Corredor livre",
    "Ponto fraco à frente"
]

$(document).ready(function() {

    //

});

function startGame() {

    //número aleatório que irá determinar qual cenário será apresentado
    var random = Math.round(getRandomInt(0, 6) / 2);
    actualCenario = cenarios[random];

    console.log("random "+random)

    //barra de tempo do turno e cenário
    $("#divTurnBar").removeClass("hidden-div-turn-bar").addClass("div-turn-bar");
    $("#turnProgressBar").attr("style", "width: 100%");
    $("#pTurnTime").removeClass("hidden-p-turn-time").addClass("p-turn-time");
    $("#pTurnTime").text("5s");
    $("#h1TurnCenario").removeClass("hidden-h1-turn-cenario").addClass("h1-turn-cenario");
    $("#h1TurnCenario").text(actualCenario);

    //botões de controle
    $("#controlButton1").removeClass("hidden-control-button").addClass("control-button");
    $("#controlButton2").removeClass("hidden-control-button").addClass("control-button");
    $("#controlButton3").removeClass("hidden-control-button").addClass("control-button");
    $("#startButton").removeClass("start-button").addClass("hidden-start-button");

    actualTurnTime = 5;

    interval = setInterval(function(){ 
        if (actualTurnTime > 0) {
            actualTurnTime--;
            console.log(actualTurnTime);
            let percent = actualTurnTime * 2 + "0";
            $(".turn-progress-bar").attr("style", "width: "+percent+"%")
            $(".p-turn-time").text(actualTurnTime+"s")
        }
        else {
            clearInterval(interval);
            vidaPerdida();
            alert("Você não reagiu ao turno, uma vida foi perdida.");
            $("#startButton").text("NEXT TURN");
        }
    }, 1000);

}

function vidaPerdida() {
    lifes--;
    console.log("-1 vida")

    if (lifes === 2) {
        $("#lifePoint3").removeClass("life-point").addClass("life-point-lost");
    }
    else if (lifes === 1) {
        $("#lifePoint2").removeClass("life-point").addClass("life-point-lost");
    }
    else {
        $("#lifePoint1").removeClass("life-point").addClass("life-point-lost");
    }

    $("#startButton").removeClass("hidden-start-button").addClass("start-button");
    $("#startButton").text("NEXT TURN");

    if (lifes === 0) {
        alert("Todas as vidas foram perdidas GAME OVER")
        document.location.reload("true");
    }
}

function atirar() {

    console.log("atirar")
    
    if (actualCenario === "Canhão de Plasma atacando") {
        $("#pTurnResult").text("X-Wing revidou com sucesso! Prosseguindo para o próximo turno.");
        clearInterval(interval);
        startGame();
    }
    else if (actualCenario === "Ponto fraco à frente") {
        $("#pTurnResult").text("X-Wing atingiu o ponto fraco com sucesso! Jogo finalizado.");
        alert("GG! Você derrotou a Estrela da Morte com uma X-Wing!")
        clearInterval(interval);
        $("#startButton").removeClass("hidden-start-button").addClass("start-button");
        $("#startButton").text("PLAY AGAIN");
    }
    else if (actualCenario === "Tie-Fighter atacando") {
        $("#pTurnResult").text("Você não desviou do ataque de Tie-Fighter.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você não desviou do ataque de Tie-Fighter, uma vida foi perdida.")
    }
    else if (actualCenario === "Corredor livre") {
        $("#pTurnResult").text("Você não acelerou no corredor livre.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você não acelerou no corredor livre, uma vida foi perdida.")
    }

}

function desviar() {
    
    if (actualCenario === "Canhão de Plasma atacando") {
        $("#pTurnResult").text("Você não revidou ao canhão de plasma.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você não revidou ao canhão de plasma, uma vida foi perdida.");
    }
    else if (actualCenario === "Ponto fraco à frente") {
        $("#pTurnResult").text("Você perdeu a chance de atirar no ponto fraco.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você perdeu a chance de atirar no ponto fraco, uma vida foi perdida.")
    }
    else if (actualCenario === "Tie-Fighter atacando") {
        $("#pTurnResult").text("Tie-Fighter desviado, prosseguindo para o próximo turno.");
        clearInterval(interval);
        startGame();
    }
    else if (actualCenario === "Corredor livre") {
        $("#pTurnResult").text("Você não acelerou no corredor livre.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você não acelerou no corredor livre, uma vida foi perdida.")
    }

}

function acelerar() {
    
    if (actualCenario === "Canhão de Plasma atacando") {
        $("#pTurnResult").text("Você não revidou ao canhão de plasma, uma vida foi perdida.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você não revidou ao canhão de plasma, uma vida foi perdida.");
    }
    else if (actualCenario === "Ponto fraco à frente") {
        $("#pTurnResult").text("Você perdeu a chance de atirar no ponto fraco, uma vida foi perdida.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você perdeu a chance de atirar no ponto fraco, uma vida foi perdida.")
    }
    else if (actualCenario === "Tie-Fighter atacando") {
        $("#pTurnResult").text("Você não desviou do ataque de Tie-Fighter, uma vida foi perdida.");
        clearInterval(interval);
        vidaPerdida();
        alert("Você desviou do ataque de Tie-Fighter, uma vida foi perdida.")
    }
    else if (actualCenario === "Corredor livre") {
        $("#pTurnResult").text("Você aproveitou o corredor livre e acelerou, prosseguindo para o próximo turno.");
        clearInterval(interval);
        startGame();
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}