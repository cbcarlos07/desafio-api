'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('produto', [{
        nome: 'TV PLASMA',
        descricao: 'TV',
        preco: 1200.0,
        tags: 'eletronico'
      },
      {
        nome: 'MOUSE USB',
        descricao: 'MOUSE',
        preco: 25.0,
        tags: 'informatica'
      },
      {
        nome: 'TECLADO',
        descricao: 'TECLADO',
        preco: 30.0,
        tags: 'informatica'
      },
      {
        nome: 'MONITOR',
        descricao: 'MONITOR',
        preco: 250.0,
        tags: 'informatica'
      },
      {
        nome: 'GABINETE',
        descricao: 'GABINETE',
        preco: 100.0,
        tags: 'informatica'
      },
      {
        nome: 'PLACA DE REDE',
        descricao: 'PLACA DE REDE',
        preco: 350.0,
        tags: 'informatica'
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produto', null, {});
     
  }
};
