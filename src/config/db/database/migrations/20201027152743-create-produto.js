'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produto', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'ID da tabela'
      },
      nome: {
        type: Sequelize.STRING( 100 ),
        allowNull: false,
        comment: 'Nome do produto'
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: 'Descrição da produto'
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comment: 'Preco do produto'
      },
      imagem: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: 'Nome da imagem'
      },
      tags: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: 'tags'
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produto');
  }
};
