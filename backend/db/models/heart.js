'use strict';
module.exports = (sequelize, DataTypes) => {
  const heart = sequelize.define('Heart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  heart.associate = function(models) {
    // associations can be defined here
  };
  return heart;
};
