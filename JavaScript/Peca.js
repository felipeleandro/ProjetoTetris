let posicaoPeca = 0;
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

    newPeca(linha, celula, numeroPeca)
    {
        let peca = new Peca(linha, celula, numeroPeca);
        this.pecas.push(peca);
        return peca;
    }

    retornarTodasPecas()
    {
        return this.pecas;
    }

    quantidadePecas()
    {
        return this.pecas.length;
    }

    algumaPecaColidiu()
    {
        return this.pecas.some(x => x.pecaColidiu);
    }
}

function verificaColisaoPeca(keyCode)
{
    let pecaColidiu = false;

    if (keyCode != 37 && keyCode != 38 && keyCode != 39 && keyCode != 40) 
        return false;

    for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
    {
        let peca = pecas.pecas[qtdPecas];
        let linhaAntiga = peca.linha;
        let colunaAntiga = peca.coluna;
        let { linhaNova, colunaNova } = adicionaPosicaoPeca(keyCode, linhaAntiga, colunaAntiga);

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
        linhaNova: linhaNova,
        colunaNova: colunaNova
    };
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

function girarPecas(pecas)
{
    let informacoesNovasPosicoes = null;
    let peca = null;

    if (pecas.pecas[0].numeroPeca == 1)
    {
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
    }
}

function calcularNovasPosicoes(qtdPecas)
{
    let peca = null;
    let linhaNova = 0;
    let colunaNova = 0;

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
        verificaColisaoRotacaoPeca();

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

    return {
        linhaNova: linhaNova,
        colunaNova: colunaNova
    };
}

function verificaColisaoRotacaoPeca()
{
    let linhaNova = 0;
    let colunaNova = 0;
    let peca = null;
    for (let qtdPecas = 0; qtdPecas < pecas.quantidadePecas(); qtdPecas++)
    {
        linhaNova = 0;
        colunaNova = 0;
        if (pecas.pecas[0].numeroPeca == 1)
        {            
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
                    peca.pecaColidiu = bodyTabelaTetris.rows[linhaNova].cells[colunaNova].classList.contains("blockPecaTabuleiro");
            }
            else
            {
                peca.pecaColidiu = true;
            }
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
            if (keyCode == 37 && pecas.pecas[0].coluna > pecas.pecas[1].coluna)
            {
                pecas.retornarTodasPecas().reverse();
            }
            if (keyCode == 39 && pecas.pecas[0].coluna < pecas.pecas[1].coluna)
            {
                pecas.retornarTodasPecas().reverse();
            }

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
        if (pecas.pecas[0].numeroPeca == 1)
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