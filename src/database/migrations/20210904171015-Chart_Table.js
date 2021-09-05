'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Chart',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Name:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      Age:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Gender:{
        type: Sequelize.STRING(1),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Chart');
  }
};
