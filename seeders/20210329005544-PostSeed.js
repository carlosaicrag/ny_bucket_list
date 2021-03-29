'use strict';

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
    await queryInterface.bulkInsert("Posts", [{
      name: "Empire State Building",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Statue of Liberty",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Central Park",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Rucker Park",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Williams Burgh Bridge",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Time Square",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Madison Square Garden",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Twin Tower Memorial",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Washington Square Park",
      date: new Date(),
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
    queryInterface.bulkDelete('Posts', null, {});
  }
};
