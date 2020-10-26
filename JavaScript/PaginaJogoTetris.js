
function criarTabelaTetris()
{
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
}

function adicionarPecasTabela()
{
    let numeroPeca = Math.floor(Math.random() * 7) + 1;
    numeroPeca = 1;

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
            break;
        case 2:
            bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
            bodyTabelaTetris.rows[0].cells[5].appendChild(totalPecas[1]);
            bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[2]);
            bodyTabelaTetris.rows[1].cells[5].appendChild(totalPecas[3]);
            break;
        case 3:
            bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
            bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[1]);
            bodyTabelaTetris.rows[2].cells[4].appendChild(totalPecas[2]);
            bodyTabelaTetris.rows[2].cells[5].appendChild(totalPecas[3]);
            break;
        case 4:
            bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
            bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[1]);
            bodyTabelaTetris.rows[2].cells[4].appendChild(totalPecas[2]);
            bodyTabelaTetris.rows[2].cells[3].appendChild(totalPecas[3]);
            break;
        case 5:
            bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);
            bodyTabelaTetris.rows[1].cells[3].appendChild(totalPecas[1]);
            bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[2]);
            bodyTabelaTetris.rows[1].cells[5].appendChild(totalPecas[3]);
            break;
        case 6:
            let imgPeca4 = document.createElement('img');
            imgPeca4.src="..\\Images\\Peca.png";

            bodyTabelaTetris.rows[0].cells[3].appendChild(totalPecas[0]);
            bodyTabelaTetris.rows[0].cells[5].appendChild(totalPecas[1]);
            bodyTabelaTetris.rows[1].cells[3].appendChild(totalPecas[2]);
            bodyTabelaTetris.rows[1].cells[4].appendChild(totalPecas[3]);
            bodyTabelaTetris.rows[1].cells[5].appendChild(imgPeca4);
            break;        
        case 7:
            bodyTabelaTetris.rows[0].cells[4].appendChild(totalPecas[0]);            
            break;        
      }


      return numeroPeca;
}

function movimentarPecasParaBaixo()
{
    let bodyTabelaTetris = document.getElementById('tableTabelaTetris');

    let linha = 0;
    let pecaAntiga = bodyTabelaTetris.rows[linha].cells[4].innerHTML;
    
    while(pecaAntiga == "")
    {
        linha++;
        pecaAntiga = bodyTabelaTetris.rows[linha].cells[4].innerHTML;        
    }

    bodyTabelaTetris.rows[linha+4].cells[4].innerHTML = pecaAntiga;
    bodyTabelaTetris.rows[linha].cells[4].innerHTML = null;
}

class AppLayout{
    constructor(props){
      this.navEl = document.querySelector('nav');  
      this.main = document.querySelector('main');  
      this.menuContainer = document.querySelector(props.menuContainer);
      this.menuButton = document.querySelector(props.menuButton);
      this.menuRetractionButton = document.querySelector(props.menuRetractionButton);
       
      this.menuButton.addEventListener('click', () => this.toggleMenu()); 
      this.menuRetractionButton.addEventListener('click', () => this.retractMenu()); 
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
  
  

