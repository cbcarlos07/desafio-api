const md5 = require('md5')
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('usuario', [
        {
          nome: 'Carlos Bruno',
          email: 'carlos@email.com',
          telefone: '92999999999',
          senha: md5('123'),
          endereco: 'R. Lagora Vermelhar, 22'
        },
        {
          nome: 'Gisely Brito',
          email: 'gysa@mail.com',
          telefone: '92988888888',
          senha: md5('1234'),
          endereco: 'R. Lagora Azul, 25'
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('usuario', null, {});
    
  }
};
