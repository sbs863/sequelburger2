'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('burgers', [{
      burger_name: 'Ruta Bag A Burger',
      devoured: false,
   
    }, {
      burger_name: '50 Ways to Leave Your Guava Burger',
      devoured: true,
   
    }, {
      burger_name: 'The Cauliflower\'s Cumin from Inside the House',
      devoured: false,
    
      
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('burgers', null, {});
  }
};