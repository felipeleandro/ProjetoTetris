<?php

$tempo = $_POST["tempo"];
$pontuacao = $_POST["pontuacao"];
$linhasEliminadas = $_POST["linhasEliminadas"];
$nivel = $_POST["nivelDificuldade"];
$connect = mysqli_connect('localhost','root','', 'tetris');


$query = "INSERT INTO pontuacao (TEMPO_PARTIDA,PONTUACAO,LINHAS_ELIMINADAS,NIVEL) VALUES ('$tempo','$pontuacao','$linhasEliminadas','$nivel')";
$insert = mysqli_query($connect,$query);

if($insert){
    echo"<script language='javascript' type='text/javascript'>
    alert('Pontuação Salva com Sucesso!');window.location.
    href='PaginaJogoTetris.php'</script>";
  }else{
    echo"<script language='javascript' type='text/javascript'>
    alert('Não foi possível salvar pontuação');window.location
    .href='PaginaJogoTetris.php'</script>";
  }
?>
