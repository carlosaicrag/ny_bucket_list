'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("Users", "firstName", {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn("Users", "lastName", {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn("Users", "hashedPassword", {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.addColumn("Users", "username", {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("Users", "firstName", {
      type: Sequelize.STRING,
      allowNull: true
    })
    await queryInterface.changeColumn("Users", "lastName", {
      type: Sequelize.STRING,
      allowNull: true
    })
    await queryInterface.changeColumn("Users", "hashedPassword", {
      type: Sequelize.STRING,
      allowNull: true
    })
    await queryInterface.removeColumn("Users","username")
  }
};
