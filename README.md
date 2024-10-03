Repositório criado para colocar alguns testes/desafios.

# Desafio 1 - ReactJS + Vite - Bolinhas 

 Instruções:
 - O usuário pode clicar em qualquer lugar da página.
 - Deve-se renderizar um pequeno círculo na posição clicada.
 - A cada clique, mantêm-se os círculos já criados e renderiza-se um novo.
 - Deve haver duas funcionalidades para a aplicação: desfazer e refazer.

# Desafio 2 - ReactJS + Vite - Validação de Login

 Instruções:
 - Você tem um formulário de login INCOMPLETO.
 - Não é permitido adicionar novos elementos HTML.
 - Não é permitido usar refs.
 - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
 - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
 - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de login.
 - Desabilite o botão de Login enquanto você está executando o login.
 - Mostre um alerta caso o login seja efetuado com sucesso (JavaScript alert). Investigue a função login() para entender como ter sucesso na requisição.

 # Desafio 3 - ReactJS + Vite - Progresso de Formulário

Instruções:
 - Criar um formulário e seus 4 campos (com controlled inputs) juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
 - Crie a barra de progresso com um elemento pai chamado .bar-container e seu filho .bar
 - Espera-se que o formulário tenha 4 campos ao todo. Quando o usuário preencher o primeiro campo, a barra de progresso deve assumir 25% do tamanho total, o segundo campo, 50% e assim por diante...
 - Crie também validações para cada campo conforme instruções abaixo.
 - input - nome completo - válido se digitar no mínimo dois nomes,
 - input - email - válido se digitar um e-mail.
 - Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 - select - estado civil.
 - radio - gênero.
 - Caso o usuário não tenha definido valores para os elementos de select e radio, os mesmos não devem ser considerados como preenchidos até então.
 - Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio, fazendo com que a barra de progresso regrida novamente.
 - Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.
 - Ao enviar deve-se apresentar um alert javascript com sucesso, limpar todos os campos do formulário e zerar a barra de progresso novamente.

# Desafio 4 - ReactJS + Vite - Tic Tac Toe

 - Crie um board de 3x3
 - Dois jogadores
 - Ao clicar em um quadrado, preencher com a jogada
 - Avisar quando o jogo finalizar, caso dê empate avisar também
 - Fazer um risco na sequência vencedora, caso houver