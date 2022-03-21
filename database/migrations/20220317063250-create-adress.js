'use strict';

const { sequelize } = require('../../models/Adress')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('adresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      district: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      street: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING(250)
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('adresses');
  }
};
