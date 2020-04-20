## Requisitos para rodar o projeto

O projeto foi feito utilizando o framework React.
É um requisito para rodar o projeto ter o Node.js instalado localmente.
Também é necessário ter o node package manager, NPM, pra baixar as dependencias do projeto.

pode ser baiaxado aqui: [https://nodejs.org/en/]

### Rodando versão de desenvolvimento

Para rodar a versão de desenvolvimento do projeto, acesse a pasta raiz através de um terminal ou cmd no windows e rode o comando:

<code>npm start</code>

### Rodando versão de produção

Para rodar a versão de produção em um servidor local, no terminal, digite os seguintes comandos:

Para buildar o projeto:

<code>npm run build</code>

Lodo após, os seguintes comandos:

<code>
npm install -g serve
serve -s build
</code>

### Teste

para testar a aplicação, na pasta raiz, no terminal, rode o comando:

<code>npm run test</code>
