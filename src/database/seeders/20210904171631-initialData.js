'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Chart",[
      {
        Name:"Rubi",
        Age:32,
        Gender:"F"
      },
      {
        Name:"Randy",
        Age:32,
        Gender:"M"
      },
      {
        Name:"Apple",
        Age:18,
        Gender:"F"
      },
      {
        Name:"Mango",
        Age:14,
        Gender:"F"
      },
      {
        Name:"Ferry",
        Age:37,
        Gender:"M"
      },
      {
        Name:"Johnson",
        Age:55,
        Gender:"M"
      },
      {
        Name:"Larry",
        Age:45,
        Gender:"M"
      },
      {
        Name:"Ryne",
        Age:12,
        Gender:"F"
      },
      {
        Name:"Christopher",
        Age:24,
        Gender:"M"
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
