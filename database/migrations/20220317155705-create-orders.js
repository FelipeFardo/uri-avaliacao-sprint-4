'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "users", key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_flavors: {
        type: Sequelize.INTEGER,
        references: {model: "flavors", key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      obs: {
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
    await queryInterface.dropTable('orders');
  }
};
