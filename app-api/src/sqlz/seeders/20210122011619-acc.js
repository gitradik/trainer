'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accs', [{
      id: 1,
      name: 'Rodion',
      email: 'admin@trainer.com',
      pwd: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accs', null, {});
  }
};
