<?php 
    session_start();
    if(!isset($_SESSION['login'])){
        header("Location: PaginaLogin.php");
        exit;
    }

?>
<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="../CSS/stylePerfil.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.1/css/all.css">    
    
    <title>
        Projeto Tetris - SI401A
    </title>
</head>

<body>
    <header>
        <div id="logo-menu-container">
            <a href="#" id="menu-button"><i class="fa fa-bars"></i></a>

            <div id="title-header">
                <h1>Tetris</h1>
            </div>

            <div class="container-information">
                <h2>Perfil</h1>
            </div>

        </div>

        <div id="menu-container">
            <div id="menu" class="active">
                <nav>
                    <ul>
                        <li><a href="PaginaJogoTetris.php"><i class="fas fa-gamepad"></i><span>Jogo</span></a></li>
                        <li><a href="PaginaInicial.php"><i class="fa fa-home"></i><span>Tela inicial</span></a></li>
                        <li class="active"><a href="PaginaPerfil.php"><i class="fas fa-user-circle"></i><span>Perfil</span></a></li>
                        <li><a href="RankingGlobal.php"><i class="fas fa-medal"></i><span>Ranking Global</span></a></li>
                        <li><a href="desconectar.php"><i class="fas fa-sign-out-alt"></i><span>Sair</span></a></li>
                    </ul>
                </nav>

                <i id="menu-retract" class="fas fa-angle-left"></i>
            </div>
        </div>
    </header>

    <main>
        <div class="container-dados">
            <?php
            $connect = mysqli_connect('localhost','root','', 'tetris');
            $user = $_SESSION['login'];
            $query_select = "SELECT *  FROM usuarios WHERE Login = '$user'";
            $qry = mysqli_query($connect, $query_select);
            
            ?>
            <div>
            <?php while ($dado = mysqli_fetch_array($qry)){?>
                <i class="fas fa-user-circle"></i>
                <p><?php echo $dado[0]; ?></p>
                <p><?php echo $dado[1]; ?></p>
                <p><?php echo $dado[2]; ?></p>
                <p><?php echo $dado[3]; ?></p>
                <p><?php echo $dado[4]; ?></p>
            <?php } ?>             
            </div>
        </div>

        <div class="container-ranking-pai">
            
            <form>                
                <div class="input-container-1">
                    <div class="input-container">
                        <input type="text" id="user" placeholder="Nome Completo" required />
                        <label for="user">Nome Completo</label>
                    </div>

                    <div class="input-container">
                        <input type="text" id="dataNascimento" placeholder="Data de nascimento" readonly="readonly" required />
                        <label for="dataNascimento">Data de nascimento</label>
                    </div>

                    <div class="input-container">
                        <input type="text" id="telefone" placeholder="Telefone" required />
                        <label for="telefone">Telefone</label>
                    </div>

                    <div class="input-container">
                        <input type="text" id="cpf" placeholder="CPF" readonly="readonly" required />
                        <label for="cpf">CPF</label>
                    </div>
                </div>

                <div class="input-container-2">
                    <div class="input-container">
                        <input type="text" id="email" placeholder="E-mail" required />
                        <label for="email">E-mail</label>
                    </div>

                    <div class="input-container">
                        <input type="password" id="username" placeholder="Username" readonly="readonly" required />
                        <label for="username">Senha</label>
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" placeholder="Senha" required />
                        <label for="password">Senha</label>
                        <input type="button" value="Editar" class="button" onclick="location.href='PaginaJogoTetris.php'" />
                    </div>
                </div>
            </form>
        </div>
    </main>

</body>

</html>