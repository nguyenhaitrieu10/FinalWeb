'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    status: DataTypes.ENUM('waiting','shipping','delivered','cancled'),
    deliver: DataTypes.DATE,
    cost: DataTypes.BIGINT,
    address: DataTypes.STRING,
    idOwner: DataTypes.INTEGER,
    idCard: DataTypes.INTEGER 
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};