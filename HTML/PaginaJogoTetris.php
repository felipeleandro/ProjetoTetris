<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="..\CSS\styleJogoTetris.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">    
    <script src="..\JavaScript\Peca.js"></script>
    <script src="..\JavaScript\Tabuleiro.js"></script>
    <script src="..\JavaScript\UI.js"></script>
    <script src="..\JavaScript\PaginaJogoTetris.js"></script>

    <title>
        Tetris
    </title>
</head>

<body>
    <header>
        <div id="header-menu-container">
            <a href="#" id="menu-button"><i class="fa fa-bars"></i></a>

            <div id="title-header">
                <h1>Tetris</h1>
            </div>

            <div class="container-information">
                <h1 id="textTempo" class="text">Tempo: 00:00</h1>
                <h1 id="textPontuacao" class="text">Pontuação: 0</h1>
                <h1 id="textLinhasEliminadas" class="text">Linhas Eliminadas: 0</h1>
                <h1 id="textNivel" class="text">Nível: 1</h1>
            </div>
        </div>

        <div id="menu-container">
            <div id="menu" class="active">
                <nav>
                    <ul>
                        <li class="active"><a href="PaginaJogoTetris.html"><i class="fas fa-gamepad"></i><span>Jogo</span></a></li>
                        <li><a href="PaginaInicial.php"><i class="fa fa-home"></i><span>Tela inicial</span></a></li>
                        <li><a href="PaginaPerfil.php"><i class="fas fa-user-circle"></i><span>Perfil</span></a></li>
                        <li><a href="RankingGlobal.php"><i class="fas fa-medal"></i><span>Ranking Global</span></a></li>
                        <li><a href="PaginaLogin.php"><i class="fas fa-sign-out-alt"></i><span>Sair</span></a></li>
                    </ul>
                </nav>

                <i id="menu-retract" class="fas fa-angle-left"></i>
            </div>
        </div>
    </header>

    <main>
        <div class="container-pai">
            <div id="divTabelaTetris" class="container-jogo">
                <div id ="divOpcaoTabuleiro">
                    <input type="radio" name="radioTipoTabuleiro" id="radioOpcaoMenor" value="Tabuleiro Clássico (10x20)">
                    <label for="radioMasculino">Tabuleiro Clássico (10x20)</label><br>                
                    <input type="radio" name="radioTipoTabuleiro" id="radioOpcaoMaior" value="Tabuleiro Maior (22x44)">
                    <label for="radioFeminino">Tabuleiro Maior (22x44)</label><br>

                    <button id="btnIniciarJogo" onclick="criarTabelaTetris()">Jogar</button>
                </div>
            </div>

            <div>
            
                <form action="Pontuacao.php" method="get">
                    <div class="container-ranking-pai">
                    <div class="container-ranking">
                        <ul>

                            <form action="gravarRanking.php" method="POST" id="formRanking">
                                <input type="hidden" name="Subtempo" id="Subtempo">
                                <input type="hidden" name="Subpontuacao" id="Subpontuacao">
                                <input type="hidden" name="Sublinhas_eliminadas" id="Sublinhas_eliminadas">
                                <input type="hidden" name="Subnivel_dificuldade" id="Subnivel_dificuldade">
                            </form>

                            <h1>Histórico de Pontuações</h1>
                            <h3>Felipe Souza</h3>
                            <li><i class="fas fa-arrow-circle-up"></i><span>Nivel 2</span></li>
                            <li><i class="fas fa-hourglass-start"></i><span>20 minutos</span></li>
                            <li><i class="fas fa-medal"></i><span>Pontuação 5</span></li>
                        </ul>
                    </div>
                <form>
                </div>
            

                <div class="container-ranking-pai">
                    <div class="container-ranking">
                        <ul>

                        <form action="gravarRanking.php" method="POST" id="formRanking">
                                <input type="hidden" name="Subtempo" id="Subtempo">
                                <input type="hidden" name="Subpontuacao" id="Subpontuacao">
                                <input type="hidden" name="Sublinhas_eliminadas" id="Sublinhas_eliminadas">
                                <input type="hidden" name="Subnivel_dificuldade" id="Subnivel_dificuldade">
                        </form>


                            <h1>Histórico de Pontuações</h1>
                            <h3>Felipe Souza</h3>
                            <li><i class="fas fa-arrow-circle-up"></i><span>Nivel 2</span></li>
                            <li><i class="fas fa-hourglass-start"></i><span>20 minutos</span></li>
                            <li><i class="fas fa-medal"></i><span>Pontuação 5</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>

</body>

</html>