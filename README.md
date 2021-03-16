# Backend para autenticação de login usado JWT

API básica na qual é necessário autenticar por login para poder requisitar a lista de clientes.
Utilizando o Json Web Token é possível recuperar um token por meio de login e utilizá-lo para validar as demais requisições.

1. src/index.js -> Arquivo principal de execução.
2. src/routes/ -> Arquivos responsáveis pelas rotas para as requisições.
3. src/auth/Verify.js -> Arquivo responsável pelas autenticações de token.