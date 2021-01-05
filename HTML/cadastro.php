<?php

$login = $_POST['nome'];
$data_nascimento = $_POST['data_nascimento'];
$telefone = $_POST['telefone'];
$cpf = $_POST['cpf'];
$email = $_POST['email'];
$senha = MD5($_POST['senha']);
$username = $_POST['username'];
$user = $_SESSION['login'];


$connect = mysqli_connect('localhost','root','', 'tetris');
$query_select = "SELECT username FROM usuarios WHERE username = '$user'";
$select = mysqli_query($connect,$query_select);
$array = mysqli_fetch_array($select);
$logarray = $array['username'];

  if($login == "" || $login == null){
    echo"<script language='javascript' type='text/javascript'>
    alert('O campo login deve ser preenchido');window.location.href='
    cadastro.php';</script>";

    }else{
      if($logarray == $login){

        echo"<script language='javascript' type='text/javascript'>
        alert('Esse login já existe');window.location.href='
        PaginaInicial.php';</script>";
        die();

      }else{
        $query = "INSERT INTO usuarios (login,data_nascimento,telefone,cpf,email,senha, username) VALUES ('$login','$data_nascimento','$telefone','$cpf','$email','$senha', '$username')";
        $insert = mysqli_query($connect,$query);

        if($insert){
          echo"<script language='javascript' type='text/javascript'>
          alert('Usuário cadastrado com sucesso!');window.location.
          href='PaginaInicial.php'</script>";
        }else{
          echo"<script language='javascript' type='text/javascript'>
          alert('Não foi possível cadastrar esse usuário');window.location
          .href='PaginaInicial.php'</script>";
        }
      }
    }
?>