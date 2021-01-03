let largura = 0;
let altura = 0;
let fimDeJogo = false;
let pontuacaoTotal = 0;
let qtdLinhasEliminadasTotal = 0;
let nivelTotal = 1;

function criarTabelaTetris() {
    if (document.getElementById('radioOpcaoMenor').checked) {
        largura = 10;
        altura = 20;
        tabuleiroMaior = false;
    } else if (document.getElementById('radioOpcaoMaior').checked) {
        largura = 44;
        altura = 22;
        tabuleiroMaior = true;
    } else {
        alert("Selecione uma opção de tabuleiro antes de jogar!")
        return;
    };

    document.getElementById("divOpcaoTabuleiro").style.display = "none";
    document.getElementById("btnIniciarJogo").style.display = "none";

    let linhasTabela = Array.apply(null, Array(altura)).map(() => {});
    let colunasTabela = Array.apply(null, Array(largura)).map(() => {});

    let table = document.createElement('table');
    let body = document.createElement('tbody');

    table.setAttribute("id", "tableTabelaTetris");
    body.setAttribute("id", "bodyTabelaTetris");

    linhasTabela.forEach(() => {
        let row = document.createElement('tr');
        row.classList.add(tabuleiroMaior ? "tabelaTabuleiroMaior" : "tabelaTabuleiroMenor");
        colunasTabela.forEach(() => {
            let cell = document.createElement('td');
            cell.classList.add(tabuleiroMaior ? "tabelaTabuleiroMaior" : "tabelaTabuleiroMenor");
            row.appendChild(cell);
        });
        body.appendChild(row);
    });

    table.appendChild(body);
    document.getElementById('divTabelaTetris').appendChild(table);

    document.onkeydown = function(e) { movimentarPecasTabuleiro(e) };

    let velocidadeInicial = 900;
    adicionarPecasTabuleiro();
    adicionarMovimentacaoAutomaticaPecas(velocidadeInicial);
    contabilizarTempoPartida();
}

function adicionarMovimentacaoAutomaticaPecas(formulaVelocidade) {
    clearInterval(myTimer);
    // BOTÃO PARA BAIXO
    var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 40 });

    myTimer = setInterval(function() { movimentarPecasTabuleiro(keyboardEvent) }, formulaVelocidade);
}

function atualizarPontuacaoTela(qtdLinhasEliminadas) {
    pontuacaoTotal += (10 * qtdLinhasEliminadas) * qtdLinhasEliminadas;
    qtdLinhasEliminadasTotal += qtdLinhasEliminadas;

    atualizaVelocidadeMovimentacao(pontuacaoTotal);

    document.getElementById("textPontuacao").textContent = "Pontuação: " + pontuacaoTotal;
    document.getElementById("pontuacao").value = pontuacaoTotal;
    document.getElementById("textLinhasEliminadas").textContent = "Linhas Eliminadas: " + qtdLinhasEliminadasTotal;
    document.getElementById("linhasEliminadas").value = qtdLinhasEliminadasTotal;
    document.getElementById("textNivel").textContent = "Nível: " + nivelTotal;
    document.getElementById("nivelDificuldade").value = nivelTotal;

}

function atualizaVelocidadeMovimentacao(pontuacaoTotal) {
    if (pontuacaoTotal != 0)
        nivelTotal = Math.ceil((pontuacaoTotal / 300), 0);

    let formulaVelocidade = 1200 - (nivelTotal * 300);

    if (formulaVelocidade >= 300)
        adicionarMovimentacaoAutomaticaPecas(formulaVelocidade);
}

function contabilizarTempoPartida() {
    var segundos = 1;
    var minutos = 0;
    var timer = setInterval(function() {
        document.getElementById('textTempo').textContent = "Tempo: " + (minutos > 0 ? "0" + minutos : "00") + ":" + (segundos >= 10 ? segundos : "0" + segundos);
        document.getElementById("tempo").value = (minutos > 0 ? "0" + minutos : "00") + ":" + (segundos >= 10 ? segundos : "0" + segundos);
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }
    }, 1000);
}

function alertarFimDeJogo() {
    document.getElementById("formRanking").submit();
    alert("O jogo acabou")
    document.onkeydown = null;
    clearInterval(myTimer);
}