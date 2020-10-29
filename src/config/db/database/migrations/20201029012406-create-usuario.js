'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('usuario', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          comment: 'ID da tabela'
        },
        nome: {
          type: Sequelize.STRING( 255 ),
          allowNull: false,
          comment: 'Nome do usuário'
        },
        email: {
          type: Sequelize.STRING( 100 ),
          allowNull: false,
          comment: 'Email do usuário',
          unique: true
        },
        telefone: {
          type: Sequelize.STRING( 50 ),
          allowNull: true,
          comment: 'Telefone do usuário',
          unique: true
        },
        senha: {
          type: Sequelize.STRING( 255 ),
          allowNull: false,
          comment: 'Senha do usuário'
        },
        endereco: {
          type: Sequelize.STRING( 255 ),
          allowNull: false,
          comment: 'Endereço do usuário'
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('usuario');
    
  }
};
