## Widget (NLW Return)

Um widget criado durante as aulas do NLW Return da Rocketseat.

### Front End

- Vite
- Tailwind
- Typescript
- React

### Back End

- SQLite
- Prisma
- Express

### Execução

#### Dev

1. `yarn` para instalação de dependências

2. `yarn run dev` para inicializar.


#### Prod

`yarn run build`

-----------------------------------------------------------------------------------------------------------------------------------

# Aula 1

## Feedget

A idéia é construir um widget que pode ser utilizado em qualquer site; como se fosse um projeto não específico a qualquer aplicação.

"Qual o aprendizado que desejo ao iniciar um novo projeto?"


- Fluxo de um SPA

Em uma aplicação web, temos dois formatos comuns atualmente:

> SSR (Server side rendered)

Exemplos: Wordpress, Ruby & Rails (Github), Magento...

Temos apenas dois atores atuando em nossa aplicação: A aplicação em si (Back-end + Front-end, integrados!) e o Usuário (Browser).

O Browser realiza uma requisição para nossa aplicação (hospedada em algum servidor), por exemplo, "eu quero acessar a lista de usuários em nossa aplicação (/users)".

Então, o backend irá entender a requisição, gerando o HTML e outros assets (CSS, JS, imagens).

Conforme as aplicações cresceram e novos dispositivos que consomem a aplicação surgiram, houve a necessidade de gerar um output compatível com tais dispositivos.

Sistema Mobile com iOS ou Android, por exemplo, não entendem HTML/CSS/Javascript. A versão inicial da plataforma agora trabalha em um nicho específico e restrito.

O que muitos costumam fazer é bolar uma API que irá receber os dados em JSON, por exemplo.


> SPA (Single Page Application)

Exemplos: AngularJS, Vue, React, Svelte, Aurelia...

A estrutura básica continua a mesma que SSR; o grande diferencial é que o back-end passa a ser separado do front-end.

Ou seja: ambos passam a ser aplicações diferentes. Uma requisição do browser será recebida pelo backend, que então retorna uma estrutura de dados (JSON - Javascript Object Notation, XML) a ser tratado pelo front.

[
  { id: 1, name: "Diego"},
  { id: 2, name: "Fulano"},
]

Por exemplo, o backend passa a usar Node e o front-end usa React. Também é possível adicionar um outro lado, para Mobile (React Native).


- Typescript

Permite realizar tipagem estática do seu código.



- vite

É uma ferramenta que permite que nosso navegador entenda o Javascript mais moderno; ele converte o código para que possa ser utilizado em todos os navegadores.

"Você já deve ter ouvido falar de webpack ou babel. Hoje em dia, nós não precisamos de nada disso. Porquê?"

O webpack era muito utilizado para criar um bundle a partir de vários arquivos javascript, para que o navegador possa ler nosso arquivo.

Isso era necessário pois, por padrão, os navegadores não entendiam importações entre arquivos.

Já o babel, era utilizado para converter o código javascript mais recente para uma versão mais antiga, para fins de compatibilidade.

O vite faz o mesmo que o babel, mas ele não precisa substituir o webpack. Pois ele utiliza uma feature recente no javascript, chamada esmodules, que permite a importação de módulos em javascript.


- Arquivos TSX

São resultantes da combinação entre o TypeScript e JSX.

TypeScript é o JavaScript com tipagem estática.

JSX é uma sintaxe que nasceu no React, que permite escrever HTML dentro do JavaScript.


- Root

Em toda SPA (seja Angular, React, Vue ou outros), nosso HTML é gerado em tempo de execução pelo JavaScript; ou seja, no momento em que o usuário acessar a página, dentro da div
com id de "root".


- Conceitos do React

Componente: Uma função que retorna HTML. Sempre deve possuir a primeira letra maiúscula, pois isso auxila o React a diferenciar nossos componentes de tags HTML.

Propriedade: Não podemos ter vários componentes um abaixo do outro, sem um pai que encapsula todos.

Renderizar: "mostrar em tela".


Com TypeScript, toda vez que eu recebo parâmetros em uma função, eu preciso informar qual o formato desses parâmetros. Ou seja, o que é esperado.

Isso é facilitado através do uso de *interface*.


- Tailwind

É útil para melhorar a produtividade da equipe, pois ele possui várias classes embutidas que irão facilitar a forma que trabalhamos com CSS atualmente.

Instalando junto do PostCSS e autoprefixer: npm install -D tailwindcss postcss autoprefixer


- Unidade REM

É uma unidade de medida relativa ao tamanho de fonte que o usuário está usando no navegador.

Conforme o usuário aumenta o tamanho de fonte, isso permite uma consistência entre as dimensões de cada elemento em tela.

É muito importante para acessibilidade.

Embora o tailwind polua ligeiramente o nosso HTML, também vale a pena pelos benefícios de produtividade.

Algumas classes:

- 'p-1' utiliza a medida *rem*. Cada unidade equivale a 0.25rem (ou 4px).
- 'px' é padding lateral.
- 'h-10' é height. Equivale a 2.5rem (ou 40px).

Também é possível aplicar as classes no arquivo css.

Exemplo:

.button {
  @apply bg-violet-500 px-4 h-10 rounded;
}

**Bolar um helper que converte as unidades de px para REM**


- Prosseguindo com o widget

phosphor é uma ferramenta que trata dos ícones. Ela possui integração com o React, portanto pode ser instalada com:

npm install phosphor-react

Ela é bem versátil, muito customizável: com propriedades como *size*, *weight*.

Dentro do *tailwing.config.js*, eu posso adicionar quaisquer cores que eu quiser no objeto *extend* dentre de *theme*. Só inserir o parâmetro *colors* e as cores desejadas,
no exemplo do arquivo.

No Tailwing, a classe "group" indica que aquele elemento é um agrupamento de outros elementos.

Já a classe "group-hover" pode ser usada para o item o qual você deseja sofrer alterações durante o hover.


- Estado

O texto "Hello World" foi incluso no widget. Como faço para exibí-lo somente ao clicar no botão?

Através da manipulação de *estados*.

O *estado* é uma variável como qualquer outra no JavaScript, porém ela é observada constantemente pelo React e, toda vez que tal variável tiver seu valor alterado,
ele irá redesenhar a interface com base naquele novo valor do estado.


- Acessibilidade

Ao clicar no botão, o texto "Hello World" é exibido. Porém, em um leitor de tela, o usuário não é informado que um novo elemento surgiu em tela.

Por isso, as tags "ARIA" são úteis.

Também existem várias bibliotecas úteis para esse aspecto: reakit (ariakit), radix ou headlessui (usada neste projeto).

headlessui foi criada pela equipe do Tailwind e já é altamente integrada com o mesmo.

Como já possuímos tal biblioteca, o uso de state no widget torna-se desnecessário.

**Fim da aula 1**

# Aula 2

`type FeedbackType = keyof typeof feedbackTypes;`

keyof: Pega SOMENTE as chaves (BUG, IDEA e OTHER).
typeof: Retorna a tipagem de cada valor.


Object.entries(feedbackTypes) => retorna um "array de arrays".

Cada array dentro do array pai é referente a um dos itens no objeto "feedbackTypes" definido acima.
O primeiro valor deste array interno ("vetor com duas posições") é o nome do item, e os três pontos representam TODAS os valores do mesmo.

Tal vetor é um conjunto de chave e valor ("key and value").

[
  ['BUG', {...}],
  ['IDEA', {...}],
  ['THOUGHT', {...}]
]

O Tailwind possui vários plugins: Typography, Forms, Aspect Ratio e Line Clamp.

O item correspondente a Forms possui estilos prontos para uma espécie de reset.

Para incluí-lo, é só entrar no arquivo *tailwind.config.js* e realizar o require na seção plugins (linha 12).

Outra opção é o tailwind-scrollbar, que traz estilizações básicas prontas para uso.

# Aula 3

- Fluxo da aplicação

Uma única rota simples com o máximo de funcionalidades, ou seja, um único endpoint com o qual o frontend irá se comunicar toda vez que houver o envio de um feedback.

Ao realizar o envio de um feedback, o backend da aplicação irá receber essa informação, salvá-la no banco de dados para uma consulta posterior e também enviar um email para o "dono"
do site que recebe os feedbacks (com informações como a screenshot tirada, o tipo de feedback, comentário).

Inclui testes automatizados.


`yarn add typescript @types/node ts-node-dev -D`

*@types/node* é uma dependência que traz as tipagens específicas do ecossistema Node para a nossa aplicação.

*ts-node-dev* é um pacote que reinicia o servidor node, após cada alteração em nossos arquivos. Ou seja, live-reload.


`npx tsc --init`

Cria um arquivo, *tsconfig.json*.


`npx tsc`

Cria um arquivo compilado, a partir do que temos em *src*.

O mesmo será gerado, considerando a versão da ECMAScript definida em *tsconfig.json*.


## Express

É um mini-framework que trabalha a parte HTTP do nosso servidor backend; usado para a parte de rotas.

`http://localhost:3333/contatos`

"Dado que o usuário acessou o endereço acima, eu preciso realizar tal ação quando ele entrar na página de *contatos*".

`app.get('/users', (request, response) => {  } );`

*request* -> são as informações que recebo no momento que o usuário chama essa rota.

Ex.: Se eu estou chamando um endereço de criação de novo usuário, a requisição irá retornar as informações do usuário que desejo criar: nome, email, endereço, etc.

*response* -> define a resposta para o usuário.


## SQLite

Usado por dois motivos:

- Não requer instalação de uma nova dependência na máquina, pois o banco de dados é salvo em um arquivo físico na máquina;

- Prisma: É uma ferramenta que facilita operações com banco de dados, mudando a forma que nos comunicamos com o mesmo, abstraindo o processo.

Ao invés de escrever querys tradicionais, o mesmo utiliza instruções em JavaScript. Então, o mesmo é convertido para SQL.

Ele suporta vários bancos de dados e é portátil entre cada um.

Existem outros pontos importantes, mas que se tornam óbvios durante a prática.

`yarn add prisma -D` -> para instalar a dependência, usada em dev.

`yarn add @prisma/client` -> uso no modo de produção.

- Para inicializar: `npx prisma init`

O comando cria uma pasta chamada 'prisma' com um arquivo *schema.prisma*, um arquivo .env e um .gitignore. 

Dentro do schema.prisma, definimos que vamos usar o SQLite.

Para criar a tabela no banco:

dev: `npx prisma migrate dev`
produção: `npx prisma migrate deploy`

`npx prisma studio` - abre uma interface para navegar pelas tabelas do banco de dados.

*Migrations* -> é uma forma de manter um controle de versão do nosso banco de dados, ou seja, temos um histórico de todas as alterações que foram feitos no banco de dados.


## Insomnia

Rode o `npm run dev` para rodar o servidor e então abra o Insomnia, acessando a URL: http://localhost:3333/feedbacks

## nodemailer

É uma dependência utilizada para envio de emails.

`yarn add nodemailer`

`yarn add @types/nodemailer -D`

**servidor SMTP do GMAIL**, mailgun, sparkpost, mailchimp.

O serviço usado é o https://mailtrap.io/.

## SOLID

É uma sigla para cinco princípios da programação, usados para manter um código mais testável, escalável e de fácil manutenção.

1. S: Single Responsibility Principle
2. O: Open/Closed Principle
3. L: Liskov Substitution Principle
4. I: Interface Segregation Principle
5. D: Dependency Inversion Principle

-------------------------------------------

1. Cada classe ou função tem uma responsabilidade única;
2. As classes da aplicação devem ser abertas para extensão, mas fechadas para modificação; ou seja, uma classe que extende outra *não* deve alterar a classe original.
3. Nós devemos ser capazes de substituir uma classe pai por uma herança dela e tudo continuar funcionando.

Ex.: Ave => Gavião; se eu trocar ambos de posição, o projeto deve continuar a funcionar sem problemas.

4. 
5. É uma forma de inverter as dependências da nossa classe.

Ex.: Eu possuo uma classe de criação de feedback; essa classe depende do nodemailer para enviar email, ou seja, depende de algo externo à mesma.

A idéia é evitar que a classe procure as dependências que ela precisa. O contexto externo deve falar à mesma quais dependências devem ser usadas.
