<?php 
    session_start();

    if(!isset($_SESSION['login'])){
        header("Location: PaginaLogin.php");
        exit;
    }

?>
<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="../CSS/styleJogoTetris.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">    
    <script src="../JavaScript/Peca.js"></script>
    <script src="../JavaScript/Tabuleiro.js"></script>
    <script src="../JavaScript/UI.js"></script>
    <script src="../JavaScript/PaginaJogoTetris.js"></script>

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
                        <li class="active"><a href="PaginaJogoTetris.php"><i class="fas fa-gamepad"></i><span>Jogo</span></a></li>
                        <li><a href="PaginaInicial.php"><i class="fa fa-home"></i><span>Tela inicial</span></a></li>
                        <li><a href="PaginaPerfil.php"><i class="fas fa-user-circle"></i><span>Perfil</span></a></li>
                        <li><a href="RankingGlobal.php"><i class="fas fa-medal"></i><span>Ranking Global</span></a></li>
                        <li><a href="desconectar.php"><i class="fas fa-sign-out-alt"></i><span>Sair</span></a></li>
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
                    <label> Tabuleiro Clássico (10x20)</label><br>                
                    <input type="radio" name="radioTipoTabuleiro" id="radioOpcaoMaior" value="Tabuleiro Maior (22x44)">
                    <label> Tabuleiro Maior (22x44)</label><br>

                    <button id="btnIniciarJogo" onclick="criarTabelaTetris()">Jogar</button>
                </div>
            </div>

            <div>
                    <div class="container-ranking-pai">
                    <div class="container-ranking">
                        <ul>
						<li>
                            <form action="GravarRanking.php" method="POST" id="formRanking">
                                <input type="hidden" name="tempo" id="tempo">
                                <input type="hidden" name="pontuacao" id="pontuacao">
                                <input type="hidden" name="linhasEliminadas" id="linhasEliminadas">
                                <input type="hidden" name="nivelDificuldade" id="nivelDificuldade">
                            </form>
            <?php
 
            $connect = mysqli_connect('localhost','root','', 'tetris');
            $user = $_SESSION['login'];
            $query_select = "SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(u.login, ' ', 1), ' ', -1) AS NOME , E.NIVEL, E.TEMPO_PARTIDA AS TEMPO, PONTUACAO FROM PONTUACAO E JOIN usuarios U on E.NOME = U.email
            WHERE E.NOME = '$user'ORDER BY PONTUACAO DESC";
            $qry = mysqli_query($connect, $query_select);
  
            //Pegando os nomes dos campos
            $num_fields = mysqli_num_fields($qry);//Obtém o número de campos do resultado
  
            for($i = 0;$i<$num_fields; $i++){//Pega o nome dos campos
                 $fields[] = mysqli_field_name($qry,$i);
                }
  
            //Montando o cabeçalho da tabela
            $table = '<table><tr>';
  
            for($i = 0;$i < $num_fields; $i++){
                $table .= '<th>'.$fields[$i].'</th>';
            }
  
                //Montando o corpo da tabela
            $table .= '<tbody>';
            while($r = mysqli_fetch_array($qry)){
                $table .= '<tr>';
                for($i = 0;$i < $num_fields; $i++){
                    $table .= '<td>'.$r[$fields[$i]].'</td>';
                }
                $table .= '</tr>';
            }
  
            //Finalizando a tabela
            $table .= '</tbody></table>';
  
            function mysqli_field_name($result, $field_offset)
            {
                $properties = mysqli_fetch_field_direct($result, $field_offset);
                return is_object($properties) ? $properties->name : null;
            }
            //Imprimindo a tabela
            echo $table;
  
            ?>
            </div>
        </div>
    </main>

</body>

</html>