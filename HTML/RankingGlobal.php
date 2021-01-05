<?php 
    session_start();

    if(!isset($_SESSION['login'])){
        header("Location: PaginaLogin.php");
        exit;
    }

?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
 
	<link rel="stylesheet" href="../CSS/styleJogoTetris.css">
    <link rel="stylesheet" href="../CSS/styleRankingGlobal.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css">    

    <title>
        Projeto Tetris - Ranking Global
    </title>

    <meta charset="utf-8">
</head>

<body>
    <header>
        <div id="logo-menu-container">
            <a href="#" id="menu-button"><i class="fa fa-bars"></i></a>

            <div id="title-header">
                <h1>Tetris</h1>
            </div>

            <div class="container-information">
                <h2>Ranking Global</h1>
            </div>
        </div>

        <div id="menu-container">
            <div id="menu" class="active">
                <nav>
                    <ul>
                        <li><a href="PaginaJogoTetris.php"><i class="fas fa-gamepad"></i><span>Jogo</span></a></li>
                        <li><a href="PaginaInicial.php"><i class="fa fa-home"></i><span>Tela inicial</span></a></li>
                        <li><a href="PaginaPerfil.php"><i class="fas fa-user-circle"></i><span>Perfil</span></a></li>
                        <li class="active"><a href="RankingGlobal.php"><i class="fas fa-medal"></i><span>Ranking Global</span></a></li>
                        <li><a href="desconectar.php"><i class="fas fa-sign-out-alt"></i><span>Sair</span></a></li>
                    </ul>
                </nav>
                <i id="menu-retract" class="fas fa-angle-left"></i>
            </div>
        </div>
    </header>

    <main>
            <div class="cont_rankingGlobal">
            <?php
 
            //Conexão e consulta ao Mysql
            $connect = mysqli_connect('localhost','root','', 'tetris');
            $query_select = "SELECT * FROM pontuacao ORDER BY PONTUACAO DESC";
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
    </main>
</body>

</html>