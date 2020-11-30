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
let posicaoPeca = 0;
let largura = 0;
let altura = 0;

function criarTabelaTetris()
{
  if (document.getElementById('radioOpcaoMenor').checked)
  {
    largura = 10;
    altura = 20;
    tabuleiroMaior = false;
  }
  else if (document.getElementById('radioOpcaoMaior').checked)
  {
    largura = 44;
    altura = 22;
    tabuleiroMaior = true;
  }
  else
  {
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

  document.onkeydown = function(e) { movimentarPecas(e) };

  adicionarPecasTabela();
  contabilizarTempoPartida();

  // BOTÃO PARA BAIXO
  var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 40 });
  myTimer = setInterval(function(){ movimentarPecas(keyboardEvent)}, 900);
}

function adicionarPecasTabela()
{
    let numeroPeca = Math.floor(Math.random() * 7) + 1;    

    pecas.pecas = [];

    let totalPecas = [];
    for (let qtdPecas = 0; qtdPecas < 4; qtdPecas++)
    {
        let imgPeca = document.createElement('img');
        imgPeca.setAttribute("id", "imgPeca" + qtdPecas);
        imgPeca.classList.add(largura == 44 ? "tabuleiroMaior" : "tabuleiroMenor")
        totalPecas.push(imgPeca);
            
        totalPecas[qtdPecas].src="..\\Images\\Pecas\\Peca" + numeroPeca + ".png";
    }

    let bodyTabelaTetris = document.getElementById('bodyTabelaTetris');
    coluna = largura/2;
    linha = altura-1;

    switch(numeroPeca)
    {
      case 1:
        if (tabuleiroGirado)
        { 
          bodyTabelaTetris.rows[linha-3].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha-2].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[linha].cells[coluna-1].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[linha-3].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-2].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(linha-3,coluna-1,1);
          pecas.newPeca(linha-2,coluna-1,1);
          pecas.newPeca(linha-1,coluna-1,1);
          pecas.newPeca(linha,coluna-1,1);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[2].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[3].cells[coluna-1].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[3].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-1,1);
          pecas.newPeca(1,coluna-1,1);
          pecas.newPeca(2,coluna-1,1);
          pecas.newPeca(3,coluna-1,1);
        }
        break;
      case 2:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[linha-1].cells[coluna].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[linha].cells[coluna].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[linha].cells[coluna-1].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[linha-1].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(linha-1,coluna,2);
          pecas.newPeca(linha-1,coluna-1,2);
          pecas.newPeca(linha,coluna,2);
          pecas.newPeca(linha,coluna-1,2);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[0].cells[coluna].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[1].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[1].cells[coluna].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[0].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-1,2);
          pecas.newPeca(0,coluna,2);
          pecas.newPeca(1,coluna-1,2);
          pecas.newPeca(1,coluna,2);
        }
        break;
      case 3:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[linha-2].cells[coluna].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha-2].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[linha].cells[coluna-1].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[linha-2].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-2].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(linha-2,coluna,3);
          pecas.newPeca(linha-2,coluna-1,3);
          pecas.newPeca(linha-1,coluna-1,3);
          pecas.newPeca(linha,coluna-1,3);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[2].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[2].cells[coluna].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[coluna].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-1,3);
          pecas.newPeca(1,coluna-1,3);
          pecas.newPeca(2,coluna-1,3);
          pecas.newPeca(2,coluna,3);
        }
        break;
      case 4:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[linha-2].cells[coluna-2].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha-2].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[linha].cells[coluna-1].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[linha-2].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-2].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(linha-2,coluna-2,4);
          pecas.newPeca(linha-2,coluna-1,4);
          pecas.newPeca(linha-1,coluna-1,4);
          pecas.newPeca(linha,coluna-1,4);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[2].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[2].cells[coluna-2].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[2].cells[coluna-2].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-1,4);
          pecas.newPeca(1,coluna-1,4);
          pecas.newPeca(2,coluna-1,4);
          pecas.newPeca(2,coluna-2,4);
        }
        break;
      case 5:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[linha-1].cells[coluna-2].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[linha-1].cells[coluna].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[linha].cells[coluna-1].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[linha-1].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(linha-1,coluna-2,5);
          pecas.newPeca(linha-1,coluna-1,5);
          pecas.newPeca(linha-1,coluna,5);
          pecas.newPeca(linha,coluna-1,5);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[1].cells[coluna-2].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[1].cells[coluna-1].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[1].cells[coluna].appendChild(totalPecas[3]);

          bodyTabelaTetris.rows[0].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-1,5);
          pecas.newPeca(1,coluna-2,5);
          pecas.newPeca(1,coluna-1,5);
          pecas.newPeca(1,coluna,5);
        }
        break;            
      case 6:
        let imgPeca4 = document.createElement('img');
        imgPeca4.src="..\\Images\\Pecas\\Peca6.png";
        imgPeca4.classList.add(largura == 44 ? "tabuleiroMaior" : "tabuleiroMenor")

        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[linha-1].cells[coluna-2].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[linha-1].cells[coluna].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[linha].cells[coluna-2].appendChild(totalPecas[3]);
          bodyTabelaTetris.rows[linha].cells[coluna].appendChild(imgPeca4);

          bodyTabelaTetris.rows[linha-1].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha-1].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[linha].cells[coluna].classList.add('blockPecaAtual');

          pecas.newPeca(linha-1,coluna-2,6);
          pecas.newPeca(linha-1,coluna-1,6);
          pecas.newPeca(linha-1,coluna,6);
          pecas.newPeca(linha,coluna-2,6);
          pecas.newPeca(linha,coluna,6);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-2].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[0].cells[coluna].appendChild(totalPecas[1]);
          bodyTabelaTetris.rows[1].cells[coluna-2].appendChild(totalPecas[2]);
          bodyTabelaTetris.rows[1].cells[coluna-1].appendChild(totalPecas[3]);
          bodyTabelaTetris.rows[1].cells[coluna].appendChild(imgPeca4);

          bodyTabelaTetris.rows[0].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[0].cells[coluna].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-2].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna-1].classList.add('blockPecaAtual');
          bodyTabelaTetris.rows[1].cells[coluna].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-2,6);
          pecas.newPeca(0,coluna,6);
          pecas.newPeca(1,coluna-2,6);
          pecas.newPeca(1,coluna-1,6);
          pecas.newPeca(1,coluna,6);
        }
        break;        
      case 7:
        if (tabuleiroGirado)
        {
          bodyTabelaTetris.rows[linha].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[linha].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(linha,coluna-1,7);
        }
        else
        {
          bodyTabelaTetris.rows[0].cells[coluna-1].appendChild(totalPecas[0]);
          bodyTabelaTetris.rows[0].cells[coluna-1].classList.add('blockPecaAtual');

          pecas.newPeca(0,coluna-1,7);
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
      pecaChegouFim = (tabuleiroGirado ? linhaNova == 0 : linhaNova == altura - 1) && e.keyCode == 40;

      if ((tabuleiroGirado ? linhaNova >= 0 : linhaNova < altura) && (colunaNova >= 0 && colunaNova < largura))
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
        fimDeJogo = (tabuleiroGirado ? peca.linha == altura - 1 : peca.linha == 0);
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

      for (let colunas = 0; colunas < largura; colunas++)
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
      for (let colunas = 0; colunas < largura; colunas++)
      {
        if (tabuleiroGirado)
        {
          for (let linhas = pecaLinha; linhas < altura - 1; linhas++)
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
  
  if (formulaVelocidade >= 300)
  {
    clearInterval(myTimer);
    // BOTÃO PARA BAIXO
    var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 40 });
    myTimer = setInterval(function(){ movimentarPecas(keyboardEvent)}, formulaVelocidade);    
  }

  document.getElementById("textPontuacao").textContent = "Pontuação: " + pontuacaoTotal;
  document.getElementById("textLinhasEliminadas").textContent = "Linhas Eliminadas: " +  qtdLinhasEliminadasTotal;
  document.getElementById("textNivel").textContent = "Nível: " + nivelTotal;
}

function girarTabuleiro()
{  
  let linhaNova = 0;
  let qtdLinhasMover = altura + 1;

  for (let colunas = 0; colunas < largura; colunas++)
  {
    qtdLinhasMover = altura + 1;
    if (tabuleiroGirado)
    {      
      for (let linhas = 0; linhas < (altura/2); linhas++)
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
      for (let linhas = altura-1; linhas > (altura/2); linhas--)
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
    
    if ((tabuleiroGirado ? linhaNova >= 0 : linhaNova < altura) && (colunaNova >= 0 && colunaNova < largura))
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

          if ((linhaNova < altura) && (colunaNova >= 0 && colunaNova < largura))
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
  if (tabuleiroGirado)
  {
    if (pecas.pecas[0].numeroPeca == 1)
    {
      if (keyCode == 40 && pecas.pecas[0].linha > pecas.pecas[1].linha)
      {
        pecas.retornarTodasPecas().reverse();
      }
    }

    if (pecas.pecas[0].numeroPeca == 2)
    {
      if (keyCode == 40 && pecas.pecas[1].linha > pecas.pecas[2].linha)
      {
        pecas.retornarTodasPecas().reverse();
      }
    }

    if (pecas.pecas[0].numeroPeca == 3)
    {
      if (keyCode == 40 && pecas.pecas[0].linha > pecas.pecas[3].linha)
      {
        pecas.retornarTodasPecas().reverse();
      }
    }

    if (pecas.pecas[0].numeroPeca == 4)
    {
      if (keyCode == 40 && pecas.pecas[0].linha > pecas.pecas[3].linha)
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

      if (keyCode == 40 && pecas.pecas[0].linha > pecas.pecas[1].linha)  
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

      if (keyCode == 40 && pecas.pecas[1].linha > pecas.pecas[2].linha)
      {     
        pecas.retornarTodasPecas().reverse();
      }
    }  

  }
  else
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

    if (pecas.pecas[0].numeroPeca == 3)
    {    
      if (keyCode == 37 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)
      {
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

    if (pecas.pecas[0].numeroPeca == 4)
    {    
      if (keyCode == 37 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)
      {
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