<?php 
    session_start();

?>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Cadastro</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="..\CSS\styleCadastro.css">
	</head>
	
    <body>
        <div id="backArrow" onclick="location.href='PaginaInicial.php'"> </div>

        <div class="container">

            <div class="container-left"> 
                <a href="#" id="btn-acessar">CADASTRAR</a>  
			</div>
			
            <div class="container-right">
                <form method="post" action="cadastro.php">
					<legend>Controle de acesso</legend>
					
                    <div class="input-container">
                        <input type="text" id="nome" name ="nome" placeholder="Nome Completo" required/>
                        <label for="nome">Nome Completo</label>
					</div>
					
                    <div class="input-container">
                        <input type="date" id="data_nascimento" name="data_nascimento" placeholder="Data de nascimento" required/>
                        <label for="data_nascimento">Data de nascimento</label>
					</div>
					
                    <div class="input-container">
                        <input type="text" id="telefone" name="telefone"  required/>
                        <label for="telefone">Telefone</label>
					</div>
					
                    <div class="input-container">
                        <input type="text" id="cpf" name = "cpf" placeholder="CPF" required/>
                        <label for="cpf">CPF</label>
					</div>
					
                    <div class="input-container">
                        <input type="email" id="email" name = "email" placeholder="E-mail" required/>
                        <label for="email">E-mail</label>
					</div>

                    <div class="input-container">
                        <input type="text" id="username" name ="username" placeholder="UserName" required/>
                        <label for="nome">UserName</label>
					</div>
					
                    <div class="input-container">
                        <input type="password" id="password" name = "senha" placeholder="Senha" required/>
                        <label for="password">Senha</label>
					</div>
					
                    <input type="submit" value="Cadastrar" class="button"/>
                </form>
            </div>
		</div>
		
		<script type="text/javascript" src="../JavaScript/Utils.js"> </script>		
    </body>
</html>