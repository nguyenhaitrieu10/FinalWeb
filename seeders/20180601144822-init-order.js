'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var orders = [
      {
        status: "waiting",
        deliver: Sequelize.literal('NOW()'),
        cost: "250000",
        address: "Đại học Khoa học Tự nhiên, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.Hồ Chí Minh",
        idOwner: 1,
        idCard: -1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        status: "shipping",
        deliver: Sequelize.literal('NOW()'),
        cost: "50000",
        address: "Đại học Khoa học Tự nhiên, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.Hồ Chí Minh",
        idOwner: 2,
        idCard: -1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }
    ];
    return queryInterface.bulkInsert('Orders', orders, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Orders', null, {});
  }
};