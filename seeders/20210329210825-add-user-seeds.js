'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users", [{
      firstName: "Carlos",
      lastName: "Garcia",
      username: "carlosaicrag",
      email: "carlosaicrag@gmail.com",
      hashedPassword: bcrypt.hashSync("password", 10),
      createdAt: new Date(),
      updatedAt: new Date()
   },{
      firstName: "Cassandra",
      lastName: "Moua",
      username: "cassandraauom",
      email: "moua.cassandra@gmail.com",
      hashedPassword: bcrypt.hashSync("password", 10),
      createdAt: new Date(),
      updatedAt: new Date()
   }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
  }
};
