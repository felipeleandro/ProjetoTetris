<?php

$connect = mysqli_connect('localhost','root','', 'tetris');
$usuario = $_POST("")
$tempo = $_POST("tempo")
$pontuacao = $_POST("pontuacao")
$linhasEliminadas = $_POST("linhasEliminadas")
$nivel = $_POST("nivelDificuldade")

$query = "INSERT INTO pontuacao (NOME,TEMPO_PARTIDA,PONTUACAO,LINHAS_ELIMINADAS,NIVEL) VALUES ('$usuario','$tempo','$pontuacao','$linhasEliminadas','$nivel')";
$insert = mysqli_query($connect,$query);

if($insert){
    echo"<script language='javascript' type='text/javascript'>
    alert('Pontuação Salva com Sucesso!');window.location.
    href='PaginaInicial.php'</script>";
  }else{
    echo"<script language='javascript' type='text/javascript'>
    alert('Não foi possível salvar pontuação');window.location
    .href='PaginaInicial.php'</script>";
  }

?>
