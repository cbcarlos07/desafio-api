

## SOLID

https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899

## Migrate

    node_modules\.bin\sequelize migration:create --name=create-status

    node_modules\.bin\sequelize db:migrate:undo

Seed

Criar
    node_modules/.bin/sequelize seed:generate --name=Usuario

Inserir
    node_modules\.bin\sequelize db:seed:all

Especificar

    node_modules\.bin\sequelize db:seed --seed src\config\db\database\seeders\20201027185507-Produto.js

