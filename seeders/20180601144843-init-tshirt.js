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
    var tshirts = [
      {
        name: "Áo thun trắng I Love You",
        type: "tee",
        color: ['white','blue'],
        cost: 100000,
        size: ['L','XL'],
        origin: "Khai silk",
        image: "/img/sample1.jpg",
        description: "Với thiết kế trẻ trung, năng động, áo thun League Legends sẽ tạo cho khách hàng của bạn cảm giác thoải mái nhất khi mặc.",
        sellof: 0,
        number: 10,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      },
      {
        name: "Áo thun Phượt thủ",
        type: "tee",
        color: ['black'],
        cost: 50000,
        size: ['M','L','XL'],
        origin: "Khai silk",
        image: "/img/sample2.jpg",
        description: "Với thiết kế trẻ trung, năng động, áo thun League Legends sẽ tạo cho khách hàng của bạn cảm giác thoải mái nhất khi mặc.",
        sellof: 0,
        number: 10,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()')
      }
    ];
    return queryInterface.bulkInsert('TShirts', tshirts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('TShirts', null, {});
  }
};
