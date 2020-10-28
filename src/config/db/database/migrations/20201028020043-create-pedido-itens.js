'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('pedido_itens', { 
        pedido_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Codigo do pedido',
          references: { model: 'pedido', key: 'id' },
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION',
          defaultValue: 1
        },
        produto_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Codigo do produto',
          references: { model: 'produto', key: 'id' },
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION',
          defaultValue: 1
        },
        preco: {
          type: Sequelize.DOUBLE,
          comment: 'Quantidade de produto',          
        },
        qtde: {
          type: Sequelize.INTEGER,
          comment: 'Quantidade de produto',          
        } 
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('users');
    
  }
};
