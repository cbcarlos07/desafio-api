'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('status', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'ID da tabela'
      },
      descricao: {
        type: Sequelize.STRING( 100 ),
        allowNull: false,
        comment: 'Descrição da tabela'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('status');
  }
};
