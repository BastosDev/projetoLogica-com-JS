# Explicação de comandos

## Como instalar o Node.js e o TypeScript?
- primeiro instalamos o Node na maquina junto com o npm
- dentro da IDE instalamos a extenção do ESlint e o Prettier
- no terminal da pasta ou no proprio VSCode executamos os seguintes comandos para instalação:
    - npm install
        - instalar as dependencias do npm no arquivo de desenvolvimento
    - npm i -g json-server
        - instalar o json server
    - npm i -d typescript (-d flag para dev ; -g flag para global)
        - instalar o typescript
    - npm i -D eslint eslint-config-prettier eslint-plugin-prettier
        - instalar o ESlint e o Prettier
    - npx eslint --init
        - iniciar o eslint para configurar as dependencias

## Onde achar Requests?
- // http mozila - codes request

## Onde testar as urls do servidor?
- ThunderClient
    - Quais as funções do TC?
        - GET: Obter dados.
        - POST: Enviar dados para criar um novo recurso.
        - PUT: Atualizar ou substituir um recurso.
        - PATCH: Atualizar parcialmente um recurso.
        - DELETE: Excluir um recurso.
        - HEAD: Obter cabeçalhos sem o corpo da resposta.
        - OPTIONS: Verificar os métodos permitidos para um recurso.
        - TRACE: Verificar o caminho percorrido pela requisição.
        - CONNECT: Estabelecer um túnel de comunicação.

## const e let:
- Const é utilizado para variáveis inalteradas
- Let é utilizado para variáveis que podem mudar no meio do código

## Regra para definir variáveis
- Devem começar com uma letra (a-z, A-Z), um símbolo de sublinhado (_) ou o cifrão ($).
- Podem incluir números, mas não podem começar com números.
- Não podem ser palavras reservadas (como for, if, let, etc.).

## Como chamar uma variável em um texto?
- Inicie com acrase, sifrão, chaves e variável: `Ola, meu nome é ${nome} `

## Como fazer uma lista?
- const listaNomes = ['João', 'Andre', 'Paoulo', 'Pablo'...]
- Solução à const nome1 =; const nome2 =...