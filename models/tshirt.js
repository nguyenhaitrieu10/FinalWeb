'use strict';
module.exports = (sequelize, DataTypes) => {
  var TShirt = sequelize.define('TShirt', { 
    name: DataTypes.STRING,
    type: DataTypes.ENUM('tee', 'polo'),
    color: DataTypes.ARRAY(DataTypes.STRING),  //'white','grey','black','red','blue'
    cost: DataTypes.BIGINT,
    size: DataTypes.ARRAY(DataTypes.STRING), // 'M', 'L', 'XL', 'XXL'
    origin: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    sellof: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {});
  TShirt.associate = function(models) {
    // associations can be defined here
  };
  return TShirt;
};