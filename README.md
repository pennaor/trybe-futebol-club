# Trybe Futebol Club

A aplicação consiste em um website completo que provê ao usuário o serviço de leitura, e se caso autenticado, possibilidade de criar, atualizar e remover times e partidas de futebol. De acordo com o desempenho dos times, uma tabela de classificação é gerada através de críterios previamente estabelicidos.

O desenvolvimento do back-end teve como objetivo consolidar meus conhecimentos sobre TypeScript, Programação Orientada a Objetos (POO), e princípios SOLID, sendo utilizado Express seguindo os princípios REST e arquitetura MSC (Model, Service, Controller).

O front-end foi desenvolvido pela [Trybe](https://www.betrybe.com/) com intuito de apenas exibir as informações processadas pelo back-end, assim como os arquivos de orquestração do docker, exceto os `Dockerfile`, que foram de minha autoria. 

⚠️ É recomendado utilização do Docker para rodar a aplicação.

⚠️ Usa localStorage do browser para autenticação de usuário.

<details>
<summary><strong>Quick start</strong></summary>

<strong>Using Docker</strong>

⚠️ É possível alterar as variáveis de ambiente relacionadas aos containers no diretório `/trybe-futebol-club/app/docker-compose.yml`

⚠️ `npm run compose:up` deve ser executado na raíz projeto!

Clone o repositório, mude para a pasta raíz do projeto e suba os containers:

```bash
git clone git@github.com:pennaor/trybe-futebol-club.git
cd trybe-futebol-club
npm run compose:up
```

<strong>Without Docker</strong>

⚠️ MySQL deve estar sendo executado para o funcionamento da aplicação

⚠️ A versão do Node usada deve ser 16 LTS

⚠️ É possível alterar as variáveis de ambiente em um arquivo `.env` que deve ser criado nos diretórios dos respectivos segmentos da aplicação de acordo com `.env.example` do segmento:

- `/trybe-futebol-club/app/frontend/.env`
- `/trybe-futebol-club/app/backend/.env`

1. Clone o repositório, mude para a pasta raíz do projeto e instale as depedências do front-end e back-end:

```bash
git clone git@github.com:pennaor/trybe-futebol-club.git
cd trybe-futebol-club
npm run postinstall
```

2. Mude para o diretório `app/backend/` e execute `npm start`

```bash
cd app/backend
npm start
```

3. Em outro terminal, mude para o diretório `app/frontend` e execute `npm start`

```bash
cd app/frontend
npm start
```

</details>

<details>
<summary><strong>Features</strong></summary>

- Buscar clubes cadastrados
- Buscar partidas em andamento e partidas finalizadas
- Autenticar usuários cadastrados através do login
- Cadastrar partidas em andamento e atualizar o placar conforme necessidade
- Finalizar partida em andamento
- Criar tabela de classificação dos times ordenada de acordo com desempenho calculado por critérios avaliativos previamente estabelecidos nas modalidades: `home`, `away`, `all`.
 
</details>

<details>
<summary><strong>Tests</strong></summary>

O back-end foi coberto por testes de integração desenvolvidos sob o princípio Test Driven Development (TDD) com as bibliotecas: `Mocha`, `Chai`, `Sinon`.

Os testes podem ser executados com o comando `npm test` configurado no diretório do back-end.

⚠️ Utilizando Docker, é necessário que o comando seja executado no container do back-end!

</details>

<details>
<summary><strong>Tools</strong></summary>
  
- Front-end:
  - [ReactJS](https://reactjs.org/)
  - [Axios](https://axios-http.com/docs/intro)
- Back-end:
  - [TypeScript](https://www.typescriptlang.org/)
  - [ExpressJS](https://expressjs.com/pt-br/)
  - [Sequelize](https://sequelize.org/)
  - [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
  - [Joi](https://joi.dev/)
  - [Mocha](https://mochajs.org/)
  - [Chai](https://www.chaijs.com/)
  - [Sinon](https://sinonjs.org/)
- General:
  - [Docker](https://www.docker.com/)
  - [Eslint](https://eslint.org/)

</details>

<details>
<summary><strong>Trybe</strong></summary>

  - São de total autoria da [Trybe](https://www.betrybe.com/):
  	 - Front-end
  	 - Docker-compose
  	 - Regras de Lint
	 - npm scripts

</details>