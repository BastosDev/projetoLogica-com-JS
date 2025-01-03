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
- Para chamar o usuario especifico é -> console.log("Ola", listaNome[0])
- .length pega o numero de arrays da lista
    - Ex.: const numeroDeUsuarios = listaNomes.length(nesse caso é 4)
    - Ou em while pode usar sem definir a variavel
        Ex.: while (i < listaNomes.length)
- .push acrescente o valor na lista
    - Ex .:
        - while (i < listaDeNumeros.length){
            if (listaDeNumeros[i] % 2 === 0) {
                numerosPar.push(listaDeNumeros[i])
            }
            else {
                numeroImpar.push(listaDeNumeros[i])
            }
            i += 1
           }

## Formata automaticamente :
- npx eslint --fix *.js
    - formata todos os arquivos .js para remover erros de identação

## Converter para boole
- "!!" converte para valores booleanos

## Comparação Truthy e Falsy
- (!![] ; !!{} ; !!num > 0 ; !!"String") == True(Truthy)
- (!!null ; !!undefined ; !!NaN; !!num = 0; !!"" -> string vazia) == False(Falsy)

## Teste de verificação
- Use ? V:F para teste de verificação

## While
- É uma linha de repetição que funciona da seguinte forma:
    - let rodouNVezes = 0
    - const vezesQueDevoRodar = 4
    - while (rodouNVezes < vezesQueDevoRodar) {
        console.log("Continuara rodando ate que as variaveis não atendam ao requisito")
        rodouNVezes = rodouNVezes + 1
    }
    - F2 para mudar o nome das variaveis todas as vezes que ele aparece

## For
- É mais robusto que while
- variável contadora declarada dentro do próprio for
    - Ex.: for(let i = 0 ; i < x.length ; i++)
    - Ex(for of) .: for( let elements of names ) --> lista os elementos dos names
    - Ex(for in) .: for( const elements in animals ) --> lista um elemento especifico dos names, podendo ser alterado de for mais específica --> if elements == "habitat" -> ...
        - O for in é utilizado em momentos que o for of não pode ser utilizado
            - Ex.: Quando é para percorrer objetos
            - O for in não é normalmente utilizado para arrays tambem