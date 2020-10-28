const { DataTypes, Sequelize } = require('sequelize')
'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('carrinho', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          comment: 'ID da tabela'
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now')
        }

       });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('carrinho');
    
  }
};
