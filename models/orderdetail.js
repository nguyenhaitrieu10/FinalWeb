'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderDetail = sequelize.define('OrderDetail', {
    number: DataTypes.INTEGER,
    color: DataTypes.ENUM('white','grey','black','red','blue'),
    size: DataTypes.ENUM('M','L','XL','XXL'),
    idOrder: DataTypes.INTEGER,
    idTShirt: DataTypes.INTEGER
  }, {});
  OrderDetail.associate = function(models) {
    // associations can be defined here
  };
  return OrderDetail;
};