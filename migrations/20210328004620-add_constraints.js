'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: false
    })

    await queryInterface.removeColumn("Users", "age")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: true
    })
    await queryInterface.addColumn("Users", "age", Sequelize.STRING)
  }
};
