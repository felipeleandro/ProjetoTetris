let pecas = new Pecas();
let myTimer = null;
let tabuleiroGirado = false;

function adicionarPecasTabuleiro()
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
        totalPecas[qtdPecas].src = "..\\Images\\Pecas\\Peca" + numeroPeca + ".png";
    }    
    
    coluna = largura / 2;
    linha = tabuleiroGirado ? altura - 1 : 3;

    switch (numeroPeca)
    {
        case 1:            
            adicionarPecaSingular(linha-3, coluna-1, numeroPeca, 0);
            adicionarPecaSingular(linha-2, coluna-1, numeroPeca, 1);
            adicionarPecaSingular(linha-1, coluna-1, numeroPeca, 2);
            adicionarPecaSingular(linha, coluna-1, numeroPeca, 3);
            break;
        case 2:
            if (tabuleiroGirado)
            {
                adicionarPecaSingular(linha-1, coluna, numeroPeca, 0);
                adicionarPecaSingular(linha-1, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha, coluna, numeroPeca, 2);
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 3);
            }
            else
            {
                linha = 0;
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 0);
                adicionarPecaSingular(linha, coluna, numeroPeca, 1);
                adicionarPecaSingular(linha+1, coluna-1, numeroPeca, 2);
                adicionarPecaSingular(linha+1, coluna, numeroPeca, 3);
            }
            break;
        case 3:
            if (tabuleiroGirado)
            {
                adicionarPecaSingular(linha-2, coluna, numeroPeca, 0);
                adicionarPecaSingular(linha-2, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha-1, coluna-1, numeroPeca, 2);
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 3);
            }
            else
            {
                linha = 0;
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 0);
                adicionarPecaSingular(linha+1, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha+2, coluna-1, numeroPeca, 2);
                adicionarPecaSingular(linha+2, coluna, numeroPeca, 3);
            }
            break;
        case 4:
            if (tabuleiroGirado)
            {
                adicionarPecaSingular(linha-2, coluna-2, numeroPeca, 0);
                adicionarPecaSingular(linha-2, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha-1, coluna-1, numeroPeca, 2);
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 3);
            }
            else
            {
                linha = 0;
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 0);
                adicionarPecaSingular(linha+1, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha+2, coluna-1, numeroPeca, 2);
                adicionarPecaSingular(linha+2, coluna-2, numeroPeca, 3);
            }
            break;
        case 5:
            if (tabuleiroGirado)
            {
                adicionarPecaSingular(linha-1, coluna-2, numeroPeca, 0);
                adicionarPecaSingular(linha-1, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha-1, coluna, numeroPeca, 2);
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 3);
            }
            else
            {
                linha = 0;
                adicionarPecaSingular(linha, coluna-1, numeroPeca, 0);
                adicionarPecaSingular(linha+1, coluna-2, numeroPeca, 1);
                adicionarPecaSingular(linha+1, coluna-1, numeroPeca, 2);
                adicionarPecaSingular(linha+1, coluna, numeroPeca, 3);
            }
            break;
        case 6:
            if (tabuleiroGirado)
            {
                adicionarPecaSingular(linha-1, coluna-2, numeroPeca, 0);
                adicionarPecaSingular(linha-1, coluna-1, numeroPeca, 1);
                adicionarPecaSingular(linha-1, coluna, numeroPeca, 2);
                adicionarPecaSingular(linha, coluna-2, numeroPeca, 3);
                adicionarPecaSingular(linha, coluna, numeroPeca, 4);
            }
            else
            {
                linha = 0;
                adicionarPecaSingular(linha, coluna-2, numeroPeca, 0);
                adicionarPecaSingular(linha, coluna, numeroPeca, 1);
                adicionarPecaSingular(linha+1, coluna-2, numeroPeca, 2);
                adicionarPecaSingular(linha+1, coluna-1, numeroPeca, 3);
                adicionarPecaSingular(linha+1, coluna, numeroPeca, 4);
            }
            break;
        case 7:
            adicionarPecaSingular(linha, coluna-1, numeroPeca, 0);
            break;
    }

    pecas.retornarTodasPecas().reverse();
    return pecas;
}

function adicionarPecaSingular(linha, coluna, numeroPeca, qtdPecas)
{
    let imgPeca = document.createElement('img');
    imgPeca.setAttribute("id", "imgPeca" + qtdPecas);
    imgPeca.classList.add(largura == 44 ? "tabuleiroMaior" : "tabuleiroMenor")
    imgPeca.src = "..\\Images\\Pecas\\Peca" + numeroPeca + ".png";

    bodyTabelaTetris.rows[linha].cells[coluna].appendChild(imgPeca);
    bodyTabelaTetris.rows[linha].cells[coluna].classList.add('blockPecaAtual');
    pecas.newPeca(linha, coluna, numeroPeca);
}

function movimentarPecasTabuleiro(e)
{
    if (e.keyCode == 38)    
        girarPecas(pecas);
    
    let pecaChegouFim = false;
    let pecaColidiu = false;
    let pecaAuxiliar = null;
    let linhaAuxiliar = null;
    let colunaAuxiliar = null;
    pecaColidiu = verificaColisaoPeca(e.keyCode)

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
            adicionarPecasTabuleiro();
        else
        {
            alertarFimDeJogo();
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
                        if (!linhaPossuiPecaEspecial)
                            linhaPossuiPecaEspecial = bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML.includes("7");

                        bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML = bodyTabelaTetris.rows[linhas + 1].cells[colunas].innerHTML;

                        if (bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML != "")
                        {
                            bodyTabelaTetris.rows[linhas].cells[colunas].classList.add('blockPecaTabuleiro');
                        }
                        else
                        {
                            bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaTabuleiro');
                        }

                        bodyTabelaTetris.rows[linhas + 1].cells[colunas].innerHTML = null;
                        bodyTabelaTetris.rows[linhas + 1].cells[colunas].classList.remove('blockPecaAtual');
                        bodyTabelaTetris.rows[linhas + 1].cells[colunas].classList.remove('blockPecaTabuleiro');
                    }
                }
                else
                {
                    for (let linhas = pecaLinha; linhas > 0; linhas--)
                    {
                        if (!linhaPossuiPecaEspecial)
                            linhaPossuiPecaEspecial = bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML.includes("7");

                        bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML = bodyTabelaTetris.rows[linhas - 1].cells[colunas].innerHTML;

                        if (bodyTabelaTetris.rows[linhas].cells[colunas].innerHTML != "")
                        {
                            bodyTabelaTetris.rows[linhas].cells[colunas].classList.add('blockPecaTabuleiro');
                        }
                        else
                        {
                            bodyTabelaTetris.rows[linhas].cells[colunas].classList.remove('blockPecaTabuleiro');
                        }

                        bodyTabelaTetris.rows[linhas - 1].cells[colunas].innerHTML = null;
                        bodyTabelaTetris.rows[linhas - 1].cells[colunas].classList.remove('blockPecaAtual');
                        bodyTabelaTetris.rows[linhas - 1].cells[colunas].classList.remove('blockPecaTabuleiro');
                    }
                }
            }

            qtdLinhasEliminadas++;

            if (linhaPossuiPecaEspecial) 
                girarTabuleiro();
        }
    }

    atualizarPontuacaoTela(qtdLinhasEliminadas);    
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
            for (let linhas = 0; linhas < (altura / 2); linhas++)
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
            for (let linhas = altura - 1; linhas > (altura / 2); linhas--)
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