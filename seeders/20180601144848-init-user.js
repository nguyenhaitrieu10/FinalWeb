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
    var users = [
      {
        email: "nva@gmail.com",
        password: "123123",
        address: "Đại học Khoa học Tự nhiên, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.Hồ Chí Minh",
        phone: "0753846521",
        status: true,
        birth: Sequelize.literal('NOW()'),
        idCard: -1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
       {
        email: "htb@gmail.com",
        password: "123123",
        address: "Đại học Khoa học Tự nhiên, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.Hồ Chí Minh",
        phone: "0753846521",
        status: true,
        birth: Sequelize.literal('NOW()'),
        idCard: -1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
       {
        email: "ttc@gmail.com",
        password: "123123",
        address: "Đại học Khoa học Tự nhiên, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.Hồ Chí Minh",
        phone: "0753846521",
        status: true,
        birth: Sequelize.literal('NOW()'),
        idCard: -1,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }
    ];
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
