class Peca
{
    constructor(linha, coluna, numeroPeca, pecaColidiu)
    {
      this.linha = linha;
      this.coluna = coluna;
      this.numeroPeca = numeroPeca;
      this.pecaColidiu = pecaColidiu;
    }
}

class Pecas 
{
    constructor()
    {
      this.pecas = []
    }

    newPeca(linha, celula, numeroPeca){
        let peca = new Peca(linha, celula, numeroPeca);
        this.pecas.push(peca);
        return peca;
    }

    retornarTodasPecas(){
        return this.pecas;
    }

    quantidadePecas(){
      return this.pecas.length;
    }

    algumaPecaColidiu(){
        return this.pecas.some(x => x.pecaColidiu);
    }
}

let pecas = new Pecas();
let fimDeJogo = false;
let myTimer = null;
let tabuleiroGirado = false;
let pontuacaoTotal = 0;
let qtdLinhasEliminadasTotal = 0;
let nivelTotal = 1;

function criarTabelaTetris()
{
    document.getElementById("btnIniciarJogo").style.display = "none";

    let linhasTabela = Array.apply(null, Array(20)).map(() => {});
    let colunasTabela = Array.apply(null, Array(10)).map(() => {});

    let table = document.createElement('table');    
    let body = document.createElement('tbody');

    table.setAttribute("id", "tableTabelaTetris");
    body.setAttribute("id", "bodyTabelaTetris");
    
    linhasTabela.forEach(() => {
        let row = document.createElement('tr');
        colunasTabela.forEach(() => {                    
            let cell = document.createElement('td');                
            row.appendChild(cell);
        });
        body.appendChild(row);                
    });
    
    table.appendChild(body);
    
    document.getElementById('divTabelaTetris').appendChild(table);

    document.onkeydown = function(e) { movimentarPecas(e) };

    adicionarPecasTabela();
    contabilizarTempoPartida();

    // BOTÃO PARA BAIXO
    var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 40 });
    //myTimer = setInterval(function(){ movimentarPecas(keyboardEvent)}, 900);
}

function adicionarPecasTabela()
{
    let numeroPeca = Math.floor(Math.random() * 7) + 1;
    numeroPeca = 3;

    pecas.pecas = [];

    let totalPecas = [];
    for (let qtdPecas = 0; qtdPecas < 4; qtdPecas++)
    {
        let imgPeca = document.createElement('img');
        imgPeca.setAttribute("id", "imgPeca" + qtdPecas);
        totalPecas.push(imgPeca);
            
        totalPecas[qtdPecas].src="..\\Images\\Pecas\\Peca" + numeroPeca + ".png";
    }

    let bodyTabelaTetris = document.getElementById('bodyTabelaTetris');    

    switch(numeroPeca)
    {
      case 1:
        if (tabuleiroGirado)
        {            
          bodyTabelaTetris.rows[19].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[18].cells[4].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[17].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[16].cells[4].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[19].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[17].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[16].cells[4].classList.add('blockPecaAtual');

          pecas.newPeca(19,4,1);
          pecas.newPeca(18,4,1);
          pecas.newPeca(17,4,1);
          pecas.newPeca(16,4,1);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[2].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[3].cells[4].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[3].cells[4].classList.add('blockPecaAtual');

          pecas.newPeca(0,4,1);
          pecas.newPeca(1,4,1);
          pecas.newPeca(2,4,1);
          pecas.newPeca(3,4,1);
        }
        break;
      case 2:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[19].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[19].cells[5].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[18].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[18].cells[5].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[19].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[19].cells[5].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(19,4,2);
          pecas.newPeca(19,5,2);
          pecas.newPeca(18,4,2);
          pecas.newPeca(18,5,2);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[0].cells[5].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[1].cells[5].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[0].cells[5].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(0,4,2);
          pecas.newPeca(0,5,2);
          pecas.newPeca(1,4,2);
          pecas.newPeca(1,5,2);
        }
        break;
      case 3:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[19].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[18].cells[4].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[17].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[17].cells[5].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[19].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[17].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[17].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(19,4,3);
          pecas.newPeca(18,4,3);
          pecas.newPeca(17,4,3);
          pecas.newPeca(17,5,3);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[2].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[2].cells[5].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(0,4,3);
          pecas.newPeca(1,4,3);
          pecas.newPeca(2,4,3);
          pecas.newPeca(2,5,3);
        }
        break;
      case 4:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[19].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[18].cells[4].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[17].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[17].cells[3].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[19].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[17].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[17].cells[3].classList.add('blockPecaAtual');

          pecas.newPeca(19,4,4);
          pecas.newPeca(18,4,4);
          pecas.newPeca(17,4,4);
          pecas.newPeca(17,3,4);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[2].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[2].cells[3].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[3].classList.add('blockPecaAtual');

          pecas.newPeca(0,4,4);
          pecas.newPeca(1,4,4);
          pecas.newPeca(2,4,4);
          pecas.newPeca(2,3,4);
        }
        break;
      case 5:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[19].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[18].cells[3].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[18].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[18].cells[5].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[19].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[3].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(19,4,5);
          pecas.newPeca(18,3,5);
          pecas.newPeca(18,4,5);
          pecas.newPeca(18,5,5);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[3].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[1].cells[5].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[3].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(0,4,5);
          pecas.newPeca(1,3,5);
          pecas.newPeca(1,4,5);
          pecas.newPeca(1,5,5);
        }
        break;            
      case 6:
        let imgPeca4 = document.createElement('img');
        imgPeca4.src="..\\Images\\Pecas\\Peca6.png";

        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[19].cells[3].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[19].cells[5].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[18].cells[3].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[18].cells[4].appendChild(totalPecas[3]);
          bodyTabelaTetris.rows[18].cells[5].appendChild(imgPeca4);

          bodyTabelaTetris.rows[19].cells[3].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[19].cells[5].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[3].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[18].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(19,3,6);
          pecas.newPeca(19,5,6);
          pecas.newPeca(18,3,6);
          pecas.newPeca(18,4,6);
          pecas.newPeca(18,5,6);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[3].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[0].cells[5].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[1].cells[3].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[3]);
          bodyTabelaTetris.rows[1].cells[5].appendChild(imgPeca4);

          bodyTabelaTetris.rows[0].cells[3].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[0].cells[5].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[3].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[4].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[5].classList.add('blockPecaAtual');

          pecas.newPeca(0,3,6);
          pecas.newPeca(0,5,6);
          pecas.newPeca(1,3,6);
          pecas.newPeca(1,4,6);
          pecas.newPeca(1,5,6);
        }
        break;        
      case 7:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[19].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[19].cells[4].classList.add('blockPecaAtual');

          pecas.newPeca(19,4,7);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');

          pecas.newPeca(0,4,7);
        }
        break;
    }     
      
      pecas.retornarTodasPecas().reverse();
      return pecas;
}

function movimentarPecas(e)
{

  if (e.keyCode == 38)
  {
    girarPecas(pecas);
  }

  let bodyTabelaTetris = document.getElementById('tableTabelaTetris');    
  let pecaChegouFim = false;
  let pecaColidiu = false;
  let pecaAuxiliar = null;
  let linhaAuxiliar = null;
  let colunaAuxiliar = null;
  
  pecaColidiu = verificaSeVaiColidir(e.keyCode)

  ajustarOrdemPecas(e.keyCode);
    
  for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
  {    
    let peca = pecas.pecas[qtdPecas];

    peca.pecaColidiu = false;
    
    let linhaAntiga = peca.linha;
    let colunaAntiga = peca.coluna;

    let linhaNova = -1;
    let colunaNova = -1;

    switch (e.keyCode)
    { 
      case 37: 
        linhaNova = linhaAntiga;
        colunaNova = colunaAntiga - 1;
        break;               
      case 39: 
        linhaNova = linhaAntiga;
        colunaNova = colunaAntiga + 1
        break;
      case 40:       
        linhaNova = tabuleiroGirado ? linhaAntiga - 1 : linhaAntiga + 1;
        colunaNova = colunaAntiga;
        break;
      default:
        return;        
    }

    if (!pecaChegouFim)
      pecaChegouFim = (tabuleiroGirado ? linhaNova == 0 : linhaNova == 19) && e.keyCode == 40;

      if ((tabuleiroGirado ? linhaNova >= 0 : linhaNova < 20) && (colunaNova >= 0 && colunaNova < 10))
      {
        if (!pecaColidiu)
        {
          let pecaHTML = bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML;
            
          bodyTabelaTetris.rows[linhaNova].cells[colunaNova].innerHTML = pecaHTML;
  
          if (pecaAuxiliar == null && bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaAtual"))
          {
            pecaAuxiliar = peca;
            linhaAuxiliar = linhaAntiga;
            colunaAuxiliar = colunaAntiga;
          }
          else
          {
            bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML = null;
          }
  
          bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].classList.remove('blockPecaAtual');
  
          peca.linha = linhaNova;
          peca.coluna = colunaNova;
  
          if (peca.numeroPeca != 5 && peca.numeroPeca != 6)
          {          
            if (pecaAuxiliar != null && peca != pecaAuxiliar)
            {
              let pecaHTML = bodyTabelaTetris.rows[linhaAuxiliar].cells[colunaAuxiliar].innerHTML;
              
              bodyTabelaTetris.rows[pecaAuxiliar.linha].cells[pecaAuxiliar.coluna].innerHTML = pecaHTML;
              bodyTabelaTetris.rows[linhaAuxiliar].cells[colunaAuxiliar].innerHTML = null;
  
              bodyTabelaTetris.rows[pecaAuxiliar.linha].cells[pecaAuxiliar.coluna].classList.add('blockPecaAtual');
              bodyTabelaTetris.rows[linhaAuxiliar].cells[colunaAuxiliar].classList.remove('blockPecaAtual');
  
              pecaAuxiliar = null;
            }
          }
        }
        else if (e.keyCode == 40)
        {        
          pecaChegouFim = true;
        }
        else
        {
          break;
        }
      }
    }

  if (pecaChegouFim)
  {
    for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
    {    
      let peca = pecas.pecas[qtdPecas];

      bodyTabelaTetris.rows[peca.linha].cells[peca.coluna].classList.add('blockPecaTabuleiro');
      bodyTabelaTetris.rows[peca.linha].cells[peca.coluna].classList.remove('blockPecaAtual');

      if (!fimDeJogo)
        fimDeJogo = (tabuleiroGirado ? peca.linha == 19 : peca.linha == 0);
    }

    apagaLinhaCompleta();

    if (!fimDeJogo)
      adicionarPecasTabela();
    else
    {
      alert("O jogo acabou")
      document.onkeydown = null;
      clearInterval(myTimer);
    }
  }
}

function apagaLinhaCompleta()
{  
  let todasColunasPreenchidas = true;
  let linhaPossuiPecaEspecial = false;
  let qtdLinhasEliminadas = 0;
  let pecaLinha = -1;

  pecas.retornarTodasPecas().reverse();
  for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
  {        
    let peca = pecas.pecas[qtdPecas];

    if (pecaLinha != peca.linha)
    {
      todasColunasPreenchidas = true;
      pecaLinha = peca.linha;

      for (let colunas = 0; colunas < 10; colunas++)
      {
        if (bodyTabelaTetris.rows[pecaLinha].cells[colunas].innerHTML == "")
          todasColunasPreenchidas = false;

        if (!linhaPossuiPecaEspecial)
          linhaPossuiPecaEspecial = bodyTabelaTetris.rows[pecaLinha].cells[colunas].innerHTML.includes("7");
      }
    }
    else
    {
      todasColunasPreenchidas = false;
    }

    if (todasColunasPreenchidas)
    {      
      for (let colunas = 0; colunas < 10; colunas++)
      {
        if (tabuleiroGirado)
        {
          for (let linhas = pecaLinha; linhas < 19; linhas++)
          {
            bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML = bodyTabelaTetris.rows[linhas+1].cells[colunas].innerHTML;
            
            if (bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML != "")
            {            
              bodyTabelaTetris.rows[linhas].cells[colunas].classList.add('blockPecaTabuleiro');      
            }
            else
            {
              bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaTabuleiro');
            }

            bodyTabelaTetris.rows[linhas+1].cells[colunas].innerHTML = null;

            bodyTabelaTetris.rows[linhas+1].cells[colunas].classList.remove('blockPecaAtual');
            bodyTabelaTetris.rows[linhas+1].cells[colunas].classList.remove('blockPecaTabuleiro');
          }
        }
        else
        {
          for (let linhas = pecaLinha; linhas > 0; linhas--)
          {
            bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML = bodyTabelaTetris.rows[linhas-1].cells[colunas].innerHTML;            
            
            if (bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML != "")
            {            
              bodyTabelaTetris.rows[linhas].cells[colunas].classList.add('blockPecaTabuleiro');      
            }
            else
            {
              bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaTabuleiro');
            }

            bodyTabelaTetris.rows[linhas-1].cells[colunas].innerHTML = null;

            bodyTabelaTetris.rows[linhas-1].cells[colunas].classList.remove('blockPecaAtual');
            bodyTabelaTetris.rows[linhas-1].cells[colunas].classList.remove('blockPecaTabuleiro');
          }
        }
      }

      qtdLinhasEliminadas++;

      if (linhaPossuiPecaEspecial)
        girarTabuleiro();
    }
  }
  
  pontuacaoTotal += (10 * qtdLinhasEliminadas) * qtdLinhasEliminadas;
  qtdLinhasEliminadasTotal += qtdLinhasEliminadas;
  if (pontuacaoTotal != 0)
    nivelTotal = Math.ceil((pontuacaoTotal / 300), 0);
  
  let formulaVelocidade = 1200 - (nivelTotal * 300);

  console.log(formulaVelocidade);
  if (formulaVelocidade >= 300)
  {
    //clearInterval(myTimer);
    // BOTÃO PARA BAIXO
    var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 40 });
    //myTimer = setInterval(function(){ movimentarPecas(keyboardEvent)}, formulaVelocidade);    
  }

  document.getElementById("textPontuacao").textContent = "Pontuação: " + pontuacaoTotal;
  document.getElementById("textLinhasEliminadas").textContent = "Linhas Eliminadas: " +  qtdLinhasEliminadasTotal;
  document.getElementById("textNivel").textContent = "Nível: " + nivelTotal;
}

function girarTabuleiro()
{  
  let linhaNova = 0;
  let qtdLinhasMover = 21;

  for (let colunas = 0; colunas < 10; colunas++)
  {
    qtdLinhasMover = 21;
    if (tabuleiroGirado)
    {      
      for (let linhas = 0; linhas < 10; linhas++)
      {
        qtdLinhasMover = qtdLinhasMover - 2;
        linhaNova = linhas + qtdLinhasMover;        

        bodyTabelaTetris.rows[linhaNova].cells[colunas].innerHTML = bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML;
        
        if (bodyTabelaTetris.rows[linhaNova].cells[colunas].innerHTML != "")
        {        
          bodyTabelaTetris.rows[linhaNova].cells[colunas].classList.add('blockPecaTabuleiro');      
        }
        else
        {
          bodyTabelaTetris.rows[linhaNova].cells[colunas].classList.remove('blockPecaTabuleiro');
        }

        bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML = null;

        bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaAtual');
        bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaTabuleiro');
      }
    }
    else
    {      
      for (let linhas = 19; linhas > 10; linhas--)
      {
        qtdLinhasMover = qtdLinhasMover - 2;
        linhaNova = linhas - qtdLinhasMover;

        bodyTabelaTetris.rows[linhaNova].cells[colunas].innerHTML = bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML;
        
        if (bodyTabelaTetris.rows[linhaNova].cells[colunas].innerHTML != "")
        {        
          bodyTabelaTetris.rows[linhaNova].cells[colunas].classList.add('blockPecaTabuleiro');      
        }
        else
        {
          bodyTabelaTetris.rows[linhaNova].cells[colunas].classList.remove('blockPecaTabuleiro');
        }

        bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML = null;

        bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaAtual');
        bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaTabuleiro');
      }
    }
  }

  tabuleiroGirado = !tabuleiroGirado;
}

function realizarRotacaoPeca(linhaAntiga, colunaAntiga, linhaNova, colunaNova, peca)
{
  let pecaHTML = bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML;
          
  bodyTabelaTetris.rows[linhaNova].cells[colunaNova].innerHTML = pecaHTML;

  if (pecaAuxiliar == null && bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaAtual"))
  {        
    pecaAuxiliar = peca;
    linhaAuxiliar = linhaAntiga;
    colunaAuxiliar = colunaAntiga;
  }
  else
  {
    bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML = null;
  }

  bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.add('blockPecaAtual');
  bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].classList.remove('blockPecaAtual');

  peca.linha = linhaNova;
  peca.coluna = colunaNova;
}

function verificaSeVaiColidir(keyCode)
{
  let pecaColidiu = false;

  if (keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40)  
    return false;

  for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
  {
    let peca = pecas.pecas[qtdPecas];

    let linhaAntiga = peca.linha;
    let colunaAntiga = peca.coluna;

    let {linhaNova, colunaNova} = adicionaPosicaoPeca(keyCode, linhaAntiga, colunaAntiga);    
    
    if ((tabuleiroGirado ? linhaNova >= 0 : linhaNova < 20) && (colunaNova >= 0 && colunaNova < 10))
    {
      if (!pecaColidiu)
        pecaColidiu = bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaTabuleiro");
    }
    else
    {
      pecaColidiu = true;
    }    
  }

  return pecaColidiu;
}

function adicionaPosicaoPeca(keyCode, linhaAntiga, colunaAntiga)
{
  let linhaNova = -1;
  let colunaNova = -1;

  switch (keyCode)
  {
    case 37: 
      linhaNova = linhaAntiga;
      colunaNova = colunaAntiga - 1;
      break;               
    case 39: 
      linhaNova = linhaAntiga;
      colunaNova = colunaAntiga + 1
      break; 
    case 40:       
      linhaNova = tabuleiroGirado ? linhaAntiga - 1 : linhaAntiga + 1;
      colunaNova = colunaAntiga;
      break;
    default:
      break;
  }

  return {
    linhaNova : linhaNova,
    colunaNova: colunaNova
  };
}

function girarPecas(pecas)
{
  let informacoesNovasPosicoes = null;
  let peca = null;
  let posicaoPeca = 0;
  
  switch (pecas.pecas[0].numeroPeca)
  {
    case 1:
    case 11:
      for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
      { 
        informacoesNovasPosicoes = calcularNovasPosicoes(qtdPecas);

        linhaNova = informacoesNovasPosicoes.linhaNova;
        colunaNova = informacoesNovasPosicoes.colunaNova;

        peca = pecas.pecas[qtdPecas];

        if (!pecas.algumaPecaColidiu())
        {
          moverPeca(peca);
        }

        if (qtdPecas == 3)
        {
          let pecaAuxiliar = pecas.pecas[3];
          pecas.pecas[3] = pecas.pecas[0];
          pecas.pecas[0] = pecaAuxiliar;

          pecaAuxiliar = pecas.pecas[2];
          pecas.pecas[2] = pecas.pecas[1];
          pecas.pecas[1] = pecaAuxiliar;          
        }
      }
      break;
    case 2:        
      break;
    case 3:
      posicaoPeca = 0;
      for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)      
      {
        console.log(pecas.pecas[qtdPecas].linha, pecas.pecas[qtdPecas].coluna)
        if (qtdPecas == 0)
        {
          if (pecas.pecas[0].coluna - pecas.pecas[0].linha >= 5)
          {
            //pecas.retornarTodasPecas().reverse();
          }

          if (pecas.pecas[2].coluna == pecas.pecas[3].coluna && pecas.pecas[0].coluna == pecas.pecas[1].coluna + 1)
          {
            posicaoPeca = 1;
          }
          else if (pecas.pecas[2].linha == pecas.pecas[3].linha && pecas.pecas[0].coluna == pecas.pecas[1].coluna)
          {
            posicaoPeca = 2;
          }
          else if (pecas.pecas[2].coluna == pecas.pecas[3].coluna && pecas.pecas[0].coluna + 1 == pecas.pecas[1].coluna)
          {
            posicaoPeca = 3;
          }
          else if (pecas.pecas[2].linha == pecas.pecas[3].linha && pecas.pecas[2].coluna == pecas.pecas[3].coluna + 1)
          {
            posicaoPeca = 4;            
          }
          else
          {
            posicaoPeca = 0;
          }
        }
        
        switch (posicaoPeca)
        {
          case 1:
            if (qtdPecas == 0)
            {
              linhaNova = pecas.pecas[qtdPecas].linha;
              colunaNova = pecas.pecas[qtdPecas].coluna - 2;
            }
            else if (qtdPecas == 1)
            {
              linhaNova = pecas.pecas[qtdPecas].linha - 1;
              colunaNova = pecas.pecas[qtdPecas].coluna - 1;
            }
            else if (qtdPecas == 3)
            {
              linhaNova = pecas.pecas[qtdPecas].linha + 1;
              colunaNova = pecas.pecas[qtdPecas].coluna + 1;
            }
            else
            {
              linhaNova = pecas.pecas[qtdPecas].linha;
              colunaNova = pecas.pecas[qtdPecas].coluna;
            }
            break;
          case 2:
              if (qtdPecas == 0)
              {
                linhaNova = pecas.pecas[qtdPecas].linha - 2;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              else if (qtdPecas == 1)
              {
                linhaNova = pecas.pecas[qtdPecas].linha - 1;
                colunaNova = pecas.pecas[qtdPecas].coluna + 1;
              }
              else if (qtdPecas == 3)
              {          
                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna - 1;
              }
              else
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              break;
            case 3:
              if (qtdPecas == 0)
              {
                linhaNova = pecas.pecas[qtdPecas].linha + 2;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              else if (qtdPecas == 1)
              {
                peca = pecas.pecas[3];
                linhaNova = peca.linha + 1;
                colunaNova = peca.coluna - 1;

                moverPeca(peca);

                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              else if (qtdPecas == 2)
              {          
                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna + 1;
              }
              else if (qtdPecas == 3)
              {
                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna + 1;
              }
              else
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              break;
            case 4:              
              if (qtdPecas == 0)
              {
                peca = pecas.pecas[2];
                linhaNova = peca.linha - 1;
                colunaNova = peca.coluna - 1;

                moverPeca(peca);

                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna + 2;
              }
              else if (qtdPecas == 1)
              {
                peca = pecas.pecas[3];
                linhaNova = peca.linha - 2;
                colunaNova = peca.coluna;

                moverPeca(peca);

                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna - 1;
              }
              else
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              break;
          default:
            linhaNova = pecas.pecas[qtdPecas].linha;
            colunaNova = pecas.pecas[qtdPecas].coluna;
        }

        peca = pecas.pecas[qtdPecas];

        if (!pecas.algumaPecaColidiu())
        {
          moverPeca(peca);
        }
      }

      break;
    case 4:
      posicaoPeca = 0;
      for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
      {        
        if (qtdPecas == 0)
        {
          if (pecas.pecas[2].coluna == pecas.pecas[3].coluna && pecas.pecas[0].coluna + 1 == pecas.pecas[1].coluna)
          {
            posicaoPeca = 1;
          }
          else if (pecas.pecas[2].linha == pecas.pecas[3].linha && pecas.pecas[0].coluna == pecas.pecas[1].coluna)
          {
            posicaoPeca = 2;
          }
          else if (pecas.pecas[2].coluna == pecas.pecas[3].coluna && pecas.pecas[0].coluna - 1 == pecas.pecas[1].coluna)
          {
            posicaoPeca = 3;
          }
          else if (pecas.pecas[2].linha == pecas.pecas[3].linha && pecas.pecas[2].coluna == pecas.pecas[3].coluna + 1)
          {
            posicaoPeca = 4;            
          }
          else
          {
            posicaoPeca = 0;
          }
        }
        
        switch (posicaoPeca)
        {
          case 1:
            if (qtdPecas == 0)
            {
              linhaNova = pecas.pecas[qtdPecas].linha - 2;
              colunaNova = pecas.pecas[qtdPecas].coluna;
            }
            else if (qtdPecas == 1)
            {
              linhaNova = pecas.pecas[qtdPecas].linha - 1;
              colunaNova = pecas.pecas[qtdPecas].coluna - 1;
            }
            else if (qtdPecas == 3)
            {
              linhaNova = pecas.pecas[qtdPecas].linha + 1;
              colunaNova = pecas.pecas[qtdPecas].coluna + 1;
            }
            else
            {
              linhaNova = pecas.pecas[qtdPecas].linha;
              colunaNova = pecas.pecas[qtdPecas].coluna;
            }
            break;
          case 2:
              if (qtdPecas == 0)
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna + 2;
              }
              else if (qtdPecas == 1)
              {
                linhaNova = pecas.pecas[qtdPecas].linha - 1;
                colunaNova = pecas.pecas[qtdPecas].coluna + 1;
              }
              else if (qtdPecas == 3)
              {          
                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna - 1;
              }
              else
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              break;
            case 3:
              if (qtdPecas == 0)
              {
                linhaNova = pecas.pecas[qtdPecas].linha + 2;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              else if (qtdPecas == 1)
              {
                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna - 1;
              }
              else if (qtdPecas == 2)
              {          
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna + 1;
              }
              else if (qtdPecas == 3)
              {          
                linhaNova = pecas.pecas[qtdPecas].linha - 1;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              else
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              break;
            case 4:              
              if (qtdPecas == 0)
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna - 2;
              }
              else if (qtdPecas == 1)
              {
                linhaNova = pecas.pecas[qtdPecas].linha + 1;
                colunaNova = pecas.pecas[qtdPecas].coluna + 1;
              }
              else if (qtdPecas == 2)
              {
                peca = pecas.pecas[3];
                linhaNova = peca.linha - 1;
                colunaNova = peca.coluna;

                moverPeca(peca);

                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna - 1;
              }
              else
              {
                linhaNova = pecas.pecas[qtdPecas].linha;
                colunaNova = pecas.pecas[qtdPecas].coluna;
              }
              break;
          default:
            linhaNova = pecas.pecas[qtdPecas].linha;
            colunaNova = pecas.pecas[qtdPecas].coluna;
        }

        peca = pecas.pecas[qtdPecas];

        if (!pecas.algumaPecaColidiu())
        {
          moverPeca(peca);
        }      
    }
    break;
    case 5:
      console.log("GirarPeca2")
      break;
    case 6:
      console.log("GirarPeca2")
      break;
  }
}

function calcularNovasPosicoes(qtdPecas)
{
  let peca = null;
  let linhaNova = 0;
  let colunaNova = 0;

  switch (pecas.pecas[0].numeroPeca)
  {
    case 1:
    case 11:
      if (qtdPecas == 0)
      {
        let pecaAuxiliar = pecas.pecas[0];
        pecas.pecas[0] = pecas.pecas[3];
        pecas.pecas[3] = pecaAuxiliar;

        pecaAuxiliar = pecas.pecas[1];
        pecas.pecas[1] = pecas.pecas[2];
        pecas.pecas[2] = pecaAuxiliar;          
      }

      if (qtdPecas == 0)
        verificaSeRotacaoVaiColidir();

      peca = pecas.pecas[qtdPecas];

      if (pecas.pecas[0].linha == pecas.pecas[3].linha)
      {
        linhaNova = peca.linha + qtdPecas;    
        colunaNova = pecas.pecas[0].coluna;
        peca.numeroPeca = 1;
      }
      else
      {
        linhaNova = pecas.pecas[0].linha;
        colunaNova = peca.coluna + qtdPecas;
        peca.numeroPeca = 11;
      }
      break;    
    case 3:
      if (qtdPecas == 0)
        verificaSeRotacaoVaiColidir();

      peca = pecas.pecas[qtdPecas];

      if (pecas.pecas[0].linha == pecas.pecas[3].linha)
      {
        linhaNova = peca.linha + qtdPecas;    
        colunaNova = pecas.pecas[0].coluna;
        peca.numeroPeca = 1;
      }
      else
      {
        linhaNova = pecas.pecas[0].linha;
        colunaNova = peca.coluna + qtdPecas;
        peca.numeroPeca = 11;
      }
      break;
  }
      return {linhaNova: linhaNova, colunaNova: colunaNova};
}

function verificaSeRotacaoVaiColidir()
{     
  let linhaNova = 0;
  let colunaNova = 0;
  let peca = null;

  for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
  {
    linhaNova = 0;
    colunaNova = 0;

    switch (pecas.pecas[0].numeroPeca)
    {
      case 1:
      case 11:      
          peca = pecas.pecas[qtdPecas];

          if (pecas.pecas[0].linha == pecas.pecas[3].linha)
          {
            linhaNova = peca.linha + qtdPecas;    
            colunaNova = pecas.pecas[0].coluna;      
          }
          else
          {
            linhaNova = pecas.pecas[0].linha;
            colunaNova = peca.coluna + qtdPecas;
          }

          if ((linhaNova < 20) && (colunaNova >= 0 && colunaNova < 10))
          {
            if (!peca.pecaColidiu)
            {
              peca.pecaColidiu = bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaTabuleiro");     
            }
          }
          else
          {
            peca.pecaColidiu = true;
          }
          break;
      case 3:
          peca = pecas.pecas[qtdPecas];

          if (pecas.pecas[0].coluna == pecas.pecas[2].coluna && pecas.pecas[2].linha == pecas.pecas[3].linha)
          {
            linhaNova = peca.linha + qtdPecas;
            colunaNova = pecas.pecas[0].coluna;      
          }
          else
          {
            linhaNova = pecas.pecas[0].linha;
            colunaNova = peca.coluna + qtdPecas;
          }

          if ((linhaNova < 20) && (colunaNova >= 0 && colunaNova < 10))
          {
            if (!peca.pecaColidiu)
            {
              peca.pecaColidiu = bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaTabuleiro");     
            }
          }
          else
          {
            peca.pecaColidiu = true;
          }
        break;
    }
  }
}

function moverPeca(peca)
{
  let linhaAntiga = peca.linha;
  let colunaAntiga = peca.coluna;

  let pecaHTML = bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML;

  bodyTabelaTetris.rows[linhaNova].cells[colunaNova].innerHTML = pecaHTML;
  if (linhaNova != linhaAntiga || colunaNova != colunaAntiga)
    bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML = null;

  bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.add('blockPecaAtual');
  bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].classList.remove('blockPecaAtual');

  peca.linha = linhaNova;
  peca.coluna = colunaNova;
}

function ajustarOrdemPecas(keyCode)
{
  if (pecas.pecas[0].numeroPeca == 11)
  {
    if (keyCode == 37 && pecas.pecas[0].coluna > pecas.pecas[1].coluna)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  
    if (keyCode == 39 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)  
    {
      pecas.retornarTodasPecas().reverse();
    }
  }

  console.log(pecas);

  if (pecas.pecas[0].numeroPeca == 3)
  {    
    if (keyCode == 37 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)
    {      
      console.log("?")
      pecas.retornarTodasPecas().reverse();
    }
  
    if (keyCode == 39 && pecas.pecas[1].coluna < pecas.pecas[2].coluna)  
    {
      pecas.retornarTodasPecas().reverse();
    }

    if (keyCode == 40 && pecas.pecas[0].linha < pecas.pecas[3].linha)
    {
      pecas.retornarTodasPecas().reverse();
    }
  }

  if (pecas.pecas[0].numeroPeca == 5)
  {
    if (keyCode == 37 && pecas.pecas[1].coluna > pecas.pecas[2].coluna)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  
    if (keyCode == 39 && pecas.pecas[1].coluna < pecas.pecas[2].coluna)  
    {
      pecas.retornarTodasPecas().reverse();
    }

    if (keyCode == 40 && pecas.pecas[0].linha < pecas.pecas[1].linha)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  }

  if (pecas.pecas[0].numeroPeca == 6)
  {
    if (keyCode == 37 && pecas.pecas[0].coluna > pecas.pecas[1].coluna)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  
    if (keyCode == 39 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)  
    {
      pecas.retornarTodasPecas().reverse();
    }

    if (keyCode == 40 && pecas.pecas[1].linha < pecas.pecas[2].linha)
    {     
      pecas.retornarTodasPecas().reverse();
    }
  }
}

function contabilizarTempoPartida(){
  var segundos = 1;
  var minutos = 0;
  var timer = setInterval(function(){
      document.getElementById('textTempo').textContent = "Tempo: " + (minutos > 0 ? "0" + minutos : "00") + ":" + (segundos >= 10 ? segundos : "0" + segundos);
      segundos++;
      if (segundos == 60)
      {
        segundos = 0;
        minutos++;
      }
  }, 1000);
}

class AppLayout{
    constructor(props){
      this.navEl = document.querySelector('nav');  
      this.main = document.querySelector('main');  
      this.menuContainer = document.querySelector(props.menuContainer);
      this.menuButton = document.querySelector(props.menuButton);
      this.menuRetractionButton = document.querySelector(props.menuRetractionButton);
       
      //this.menuButton.addEventListener('click', () => this.toggleMenu()); 
      //this.menuRetractionButton.addEventListener('click', () => this.retractMenu()); 
    } 
  
    toggleMenu(){
      let menuWidth = getComputedStyle(this.main).getPropertyValue('--opened-menu-width');
      let mainWidth = 100 - ~~menuWidth.replace('vw','') + 'vw';    
      
      if(this.menuContainer.className === 'hidden'){    
        this.main.style.width = mainWidth;
        this.main.style.left = menuWidth;           
        
        this._changeClass(this.menuContainer, 'active');
      } else {      
        this.main.style.width = '100vw';
        this.main.style.left = '0';  
        
        this._changeClass(this.menuContainer, 'hidden');
      }
    } 
     
    retractMenu(){
      let menuWidth = getComputedStyle(this.main).getPropertyValue('--retracted-menu-width');
      let activeMenuWidth = getComputedStyle(this.main).getPropertyValue('--opened-menu-width');
      let mainWidth = '90vw';
      
      if (this.menuContainer.className === 'active'){ 
        this._changeClass(this.menuContainer, 'retracted');
        
        this.main.style.width = mainWidth;
        this.main.style.left = menuWidth;      
      } else {
        this._changeClass(this.menuContainer, 'active');
        
        console.log(100 - ~~activeMenuWidth.replace('vw','') + 'vw');
        
        this.main.style.width = 100 - ~~activeMenuWidth.replace('vw','') + 'vw';
        this.main.style.left = activeMenuWidth;     
      }        
    }
    
    _changeClass(el, clazz){
      el.className = clazz;
    }
  }
  let appLayout = new AppLayout({
    menuContainer: '#menu',
    menuButton: '#menu-button',
    menuRetractionButton: '#menu-retract'
  });