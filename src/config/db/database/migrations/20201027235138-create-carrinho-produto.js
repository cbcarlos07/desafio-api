'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('carrinho_produto', { 

        carrinho_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Codigo do carrinho',
          references: { model: 'carrinho', key: 'id' },
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION'
        },
        produto_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Codigo do produto',
          references: { model: 'produto', key: 'id' },
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION'
        },
        qtde: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Quantidade de produto',          
        }

      }
    );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('carrinho_produto');
  
  }
};
