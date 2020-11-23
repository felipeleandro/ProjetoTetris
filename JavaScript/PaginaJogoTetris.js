class Peca
{
    constructor(linha, coluna, numeroPeca)
    {
      this.linha = linha;
      this.coluna = coluna;
      this.numeroPeca = numeroPeca;
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
}

document.onkeydown = function(e) { movimentarPecas(e) };

let pecas = new Pecas();

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

    adicionarPecasTabela();    

    // BOTÃO PARA BAIXO
    var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 40 });    
    
    //setInterval(function(){ movimentarPecas(keyboardEvent)}, 1000);
}

function adicionarPecasTabela()
{
    let numeroPeca = Math.floor(Math.random() * 7) + 1;   
    numeroPeca = 4;

    pecas.pecas = [];

    let totalPecas = [];
    for (let qtdPecas = 0; qtdPecas < 4; qtdPecas++)
    {
        let imgPeca = document.createElement('img');
        imgPeca.setAttribute("id", "imgPeca" + qtdPecas);
        totalPecas.push(imgPeca);
            
        totalPecas[qtdPecas].src="..\\Images\\Peca.png";
    }

    let bodyTabelaTetris = document.getElementById('bodyTabelaTetris');    

    switch(numeroPeca) {
        case 1:
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
            break;
        case 2:
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
            break;
        case 3:
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
            break;
        case 4:
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
            break;
        case 5:
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
            break;
        case 6:
            let imgPeca4 = document.createElement('img');
            imgPeca4.src="..\\Images\\Peca.png";

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
            break;        
        case 7:
            bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
            bodyTabelaTetris.rows[0].cells[4].classList.add('blockPecaAtual');

            pecas.newPeca(0,4,7);
            break;
      }     
      
      pecas.retornarTodasPecas().reverse();
      return pecas;
}

function movimentarPecas(e)
{
  let bodyTabelaTetris = document.getElementById('tableTabelaTetris');    
  let pecaChegouFim = false;
  let pecaColidiu = false;
  let pecaAuxiliar = null;
  let linhaAuxiliar = null;
  let colunaAuxiliar = null;
  
  pecaColidiu = verificaSeVaiColidir(e.keyCode)
  console.log(e.keyCode);
  console.log(pecas)

  if (pecas.pecas[0].numeroPeca == 5)
  {
    if (e.keyCode == 37 && pecas.pecas[1].coluna > pecas.pecas[2].coluna)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  
    if (e.keyCode == 39 && pecas.pecas[1].coluna < pecas.pecas[2].coluna)  
    {
      pecas.retornarTodasPecas().reverse();
    }

    if (e.keyCode == 40 && pecas.pecas[0].linha < pecas.pecas[1].linha)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  }

  if (pecas.pecas[0].numeroPeca == 6)
  {
    if (e.keyCode == 37 && pecas.pecas[0].coluna > pecas.pecas[1].coluna)  
    {      
      pecas.retornarTodasPecas().reverse();
    }
  
    if (e.keyCode == 39 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)  
    {
      pecas.retornarTodasPecas().reverse();
    }

    if (e.keyCode == 40 && pecas.pecas[1].linha < pecas.pecas[2].linha)
    {     
      pecas.retornarTodasPecas().reverse();
    }
  }
    
  for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
  {    
    let peca = pecas.pecas[qtdPecas];    
    
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
        linhaNova = linhaAntiga + 1;
        colunaNova = colunaAntiga;
        break;
      default:
        return;        
    }

    if (!pecaChegouFim)
      pecaChegouFim = linhaNova == 19;

    if ((linhaNova < 20) && (colunaNova >= 0 && colunaNova < 10))
    {
      if (!pecaColidiu)
      {
        let pecaHTML = bodyTabelaTetris.rows[linhaAntiga].cells[colunaAntiga].innerHTML;
          
        bodyTabelaTetris.rows[linhaNova].cells[colunaNova].innerHTML = pecaHTML;        

        //console.log("1 - " + peca.linha + " " + peca.coluna)

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
    }

    adicionarPecasTabela();      
  }
}

function verificaSeVaiColidir(keyCode)
{
  let pecaColidiu = false;  

  for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
  {
    let peca = pecas.pecas[qtdPecas];

    let linhaAntiga = peca.linha;
    let colunaAntiga = peca.coluna;

    let {linhaNova, colunaNova} = adicionaPosicaoPeca(keyCode, linhaAntiga, colunaAntiga);    

    if (!pecaColidiu)
      pecaColidiu = bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaTabuleiro");
  }

  return pecaColidiu
}

function adicionaPosicaoPeca(keyCode, linhaAntiga, colunaAntiga)
{

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
      linhaNova = linhaAntiga + 1;
      colunaNova = colunaAntiga;      
      break;
    default:
      return;
  }

  return {
    linhaNova : linhaNova,
    colunaNova: colunaNova
  };
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