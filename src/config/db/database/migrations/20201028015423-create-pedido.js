'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('pedido', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          comment: 'ID da tabela'
        },
        forma_pagamento: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: 'DINHEIRO, CARTÃO'
        },
        endereco_entrega: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Preenchimento de endereço'
        },
        dt_criacao: {
          type: Sequelize.DATE,
          allowNull: false,
          comment: 'Data da criação',
          defaultValue: Sequelize.fn('now')
        },
        valor_total: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          comment: 'Valor total'          
        },
        status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: 'Codigo do status',
          references: { model: 'status', key: 'id' },
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION',
          defaultValue: 1
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('pedido');
    
  }
};
