# Desafio Backend

## Script para inicialização do banco
Após feita a criação do projeto com `npm i` executar o script

Esse script cria o banco de dados, as tabelas e ainda insere dados de teste

    npm run base


## Lista do que foi feito

Para ver a lista do que foi feito, basta [clicar aqui](https://www.notion.so/Api-Produtos-5b5f774c3a1642178bc3ebe40e5c1d36)


## SOLID

https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899

## Migrate

    node_modules\.bin\sequelize migration:create --name=create-status

    node_modules\.bin\sequelize db:migrate:undo

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


