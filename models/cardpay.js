'use strict';
module.exports = (sequelize, DataTypes) => {
  var CardPay = sequelize.define('CardPay', {
    ownerName: DataTypes.STRING,
    cardType: DataTypes.STRING,
    CVV: DataTypes.STRING,
    cardCode: DataTypes.STRING
  }, {});
  CardPay.associate = function(models) {
    // associations can be defined here
  };
  return CardPay;
};