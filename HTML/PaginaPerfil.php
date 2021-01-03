<?php 
    session_start();

    if(!isset($_SESSION['user'])){
        header("Location: login.php");
        exit;
    }

?>
<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="..\CSS\stylePerfil.css">
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
                        <li><a href="PaginaLogin.php"><i class="fas fa-sign-out-alt"></i><span>Sair</span></a></li>
                    </ul>
                </nav>

                <i id="menu-retract" class="fas fa-angle-left"></i>
            </div>
        </div>
    </header>

    <main>
        <div class="container-dados">
            <div>
                <i class="fas fa-user-circle"></i>
                <p>Felipe Souza</p>
                <p>22/10/2000</p>
                <p>(19)9956-3472</p>
                <p>08963754231</p>
                <p>Felipe@gmail.com</p>
            </div>
        </div>

        <div class="container-ranking-pai">
            <h1>Controle de acesso</h1>
            <form>                
                <div class="input-container-1">
                    <div class="input-container">
                        <input type="text" id="user" placeholder="Nome Completo" required />
                        <label for="user">Nome Completo</label>
                    </div>

                    <div class="input-container">
                        <input type="text" id="dataNascimento" placeholder="Data de nascimento" readonly="true" required />
                        <label for="dataNascimento">Data de nascimento</label>
                    </div>

                    <div class="input-container">
                        <input type="text" id="telefone" placeholder="Telefone" required />
                        <label for="telefone">Telefone</label>
                    </div>

                    <div class="input-container">
                        <input type="text" id="cpf" placeholder="CPF" readonly="true" required />
                        <label for="cpf">CPF</label>
                    </div>
                </div>

                <div class="input-container-2">
                    <div class="input-container">
                        <input type="text" id="email" placeholder="E-mail" required />
                        <label for="email">E-mail</label>
                    </div>

                    <div class="input-container">
                        <input type="password" id="username" placeholder="Username" readonly="true" required />
                        <label for="username">Senha</label>
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" placeholder="Senha" required />
                        <label for="password">Senha</label>
                        <input type="button" value="Salvar" class="button" onclick="location.href='PaginaJogoTetris.php'" />
                    </div>
                </div>
            </form>
        </div>
    </main>

</body>

</html>