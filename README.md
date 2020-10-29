# Desafio Backend

## [Introdução](#intro)
## [O que foi usado](#uso)
## [Script para inicialização do banco](#antes)
## [Banco de dados](#db)

## <a id="intro">Introdução

Este projeto é para avaliação técnica de uma desafio backend.

Este projeto foi desenvolvido em NodeJS (12.18.3) com TypeScript (^3.9.3)

## <a id="uso"> O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

* <b>Express</b>

Framework NodeJS para a criação de servidor 

* <b>Sequelize</b>

ORM para auxiliar na comunicação com o banco de dados

* <b>JSON Web Token</b>

Responsável pela geração do token de acesso às rotas protegidas

* <b>CRON </b>

Para configurar a expiração do carrinho de compras

* <b>MySQL 8.0 </b>

O banco de dados usado no projeto

## <a id="base"> O Banco de Dados

O Banco de dados utilizado no projeto foi o MySQL na versão 8.0.

O repositório do Docker Compose do banco de dados utilizado encontra-se [aqui](https://github.com/cbcarlos07/docker-mysql)

Na pasta db deste projeto encontram-se o MER (Modelo Entidade Relacionamento) e o arquivo sql.sql com inserts já realizados




## Script para inicialização do banco

Antes de rodar o projeto faz-se necessária a execução do seguinte comando na pasta raiz

    npm i 

Isso irá instalar os pacotes necessários para o projeto

Após instalados os pacotes necessários, é necessário executar o seguinte comando

    npm run base

Esse script criará o banco de dados, as tabelas e ainda insere dados de teste



## Lista do que foi feito

Para ver a lista do que foi feito, basta [clicar aqui](https://www.notion.so/Api-Produtos-5b5f774c3a1642178bc3ebe40e5c1d36)


## SOLID

https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899

## Migrate

    node_modules\.bin\sequelize migration:create --name=create-status

    node_modules\.bin\sequelize db:migrate:undo

### Apagar banco de dados

    node_modules/.bin/sequelize db:drop

## Seed


Criar
    node_modules/.bin/sequelize seed:generate --name=Usuario

Inserir
    node_modules\.bin\sequelize db:seed:all

Especificar

    node_modules\.bin\sequelize db:seed --seed src\config\db\database\seeders\20201027185507-Produto.js

Desfazer
    node_modules\.bin\sequelize db:seed:undo

Desfazer Tudo
    node_modules\.bin\sequelize db:seed:undo:all


