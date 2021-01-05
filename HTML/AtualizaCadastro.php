<?php

session_start();

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$senha = MD5($_POST['senha']);
$user = $_SESSION['login'];


$connect = mysqli_connect('localhost','root','', 'tetris');
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }

  if($nome != null || $nome != ''){
    $sql = "UPDATE usuarios SET nome = '$nome' where username = '$user'";
    if ($connect->query($sql) === TRUE) {
        echo"<script language='javascript' type='text/javascript'>
        alert('Cadastro Atualizado com sucesso!');window.location
        .href='
        PaginaPerfil.php';</script>";

      } else {
        echo"<script language='javascript' type='text/javascript'>
        alert('Não foi possivel atualizar cadastro!');window.location.href='
        PaginaPerfil.php';</script>";

      }

  } 
  
   if($email != null || $email != ''){
    $sql = "UPDATE usuarios SET email = '$email' where username = '$user'";
    if ($connect->query($sql) === TRUE) {
        echo"<script language='javascript' type='text/javascript'>
        alert('Cadastro Atualizado com sucesso!');window.location.href='
        PaginaPerfil.php';</script>";

      } else {
        echo"<script language='javascript' type='text/javascript'>
        alert('Não foi possivel atualizar cadastro!');window.location.href='
        PaginaPerfil.php';</script>";

      }
 
  }
 
   if($telefone != null || $telefone != ''){
    $sql = "UPDATE usuarios SET telefone = '$telefone' where username = '$user'";
    if ($connect->query($sql) === TRUE) {
        echo"<script language='javascript' type='text/javascript'>
        alert('Cadastro Atualizado com sucesso!');window.location.href='
        PaginaPerfil.php';</script>";

      } else {
        echo"<script language='javascript' type='text/javascript'>
        alert('Não foi possivel atualizar cadastro!');window.location.href='
        PaginaPerfil.php';</script>";

      }
  
  }
  
   if($senha != null || $senha != ''){
    $sql = "UPDATE usuarios SET senha = '$senha' where username = '$user'";
    if ($connect->query($sql) === TRUE) {
        echo"<script language='javascript' type='text/javascript'>
        alert('Cadastro Atualizado com sucesso!');window.location.href='
        PaginaPerfil.php';</script>";

      } else {
        echo"<script language='javascript' type='text/javascript'>
        alert('Não foi possivel atualizar cadastro!');window.location.href='
        PaginaPerfil.php';</script>";

      }
 
     
  }

  header("Location:PaginaPerfil.php");
 
 $connect->close();

?>