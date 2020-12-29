<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="..\CSS\styleLogin.css">
</head>

<body>
    <div id="backArrow" onclick="location.href='PaginaInicial.php'"> </div>

        <div class="container">        

            <div class="container-left">
                <a href="#" id="btn-acessar">ENTRAR</a>
            </div>

            <div class="container-right">
                <form method="post" action="login.php">
                    <legend>Controle de acesso</legend>

                    <div class="input-container">
                        <input type="text" id="user" name="login" placeholder="Usuário" required/>
                        <label for="user">Usuário</label>
                    </div>

                    <div class="input-container">
                        <input type="password" id="password" name ="senha" placeholder="Senha" required/>
                        <label for="password">Senha</label>
                    </div>

                    <input type="submit" value="Entrar" name = "entrar" class="button" />

                    <div class="input-container">
                        <a href="PaginaCadastro.php" id="linkCadastro">Não possui cadastro?</a>                    
                    </div>

                </form>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="../JavaScript/Utils.js">
    </script>
</body>

</html>