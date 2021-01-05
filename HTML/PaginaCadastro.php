<?php 
    session_start();

?>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Cadastro</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../CSS/styleCadastro.css">
	</head>
	
    <body>
        <div id="backArrow" onclick="location.href='PaginaInicial.php'"> </div>

        <div class="container">

            <div class="container-left"> 
                <a href="#" id="btn-acessar">CADASTRAR</a>  
			</div>
			
            <div class="container-right">
                <form method="post" action="cadastro.php">
					<h4>Controle de acesso</h4>
					
                    <div class="input-container">
                        <input type="text" id="nome" name ="nome" placeholder="Nome Completo" required/>
                        <label for="nome">Nome Completo</label>
					</div>
					
                    <div class="input-container">
                        <input type="text" id="username" name ="username" placeholder="Username" required/>
                        <label for="nome">Username</label>
					</div>

                    <div class="input-container">
                        <input type="date" id="data_nascimento" name="data_nascimento" required/>
                        <label for="data_nascimento">Data de nascimento</label>
					</div>
					
                    <div class="input-container">
                        <input type="text" id="telefone" name="telefone" placeholder="Telefone" required/>
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
                        <input type="password" id="password" name = "senha" placeholder="Senha" required/>
                        <label for="password">Senha</label>

					</div>
					
                    <input type="submit" value="Cadastrar" class="button"/>
                </form>
            </div>
		</div>
		
		<script src="../JavaScript/Utils.js"> </script>		
    </body>
</html>