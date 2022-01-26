'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        validate: {
          isAlpha: true,
        }
      },
      lastName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        validate: {
          isAlpha: true,
        }
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      passwordHash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};