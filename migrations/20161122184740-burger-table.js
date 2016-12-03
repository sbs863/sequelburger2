'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.createTable('burgers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            burger_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            devoured: Sequelize.BOOLEAN,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
               
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
               
            }
        });
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.dropTable('burgers');
    }
};