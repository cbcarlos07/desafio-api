'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('status', [{
          descricao: 'Ativo'
        },
        {
          descricao: 'Inativo'
        },
        {
          descricao: 'Novo'
        },
        {
          descricao: 'Aceito'
        },
        {
          descricao: 'Saiu para entrega'
        },
        {
          descricao: 'Entregue'
        },
        {
          descricao: 'Cancelado'
        }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status', null, {});     
  }
};
