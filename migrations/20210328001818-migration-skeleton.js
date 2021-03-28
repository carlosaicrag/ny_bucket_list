'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn("Users", "birtday", "dateOfBirth")
    await queryInterface.renameColumn("Users", "hashed_password", "hashedPassword")

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn("Users", "dateOfBirth", "birtday")
    await queryInterface.renameColumn("Users", "hashedPassword", "hashed_password")
  }
};
