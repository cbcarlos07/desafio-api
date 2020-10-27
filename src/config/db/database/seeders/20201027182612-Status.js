'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('status', [{
          descricao: 'Ativo'
        },
        {
          descricao: 'Inativo'
        }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status', null, {});     
  }
};
