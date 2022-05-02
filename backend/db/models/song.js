'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' })
    Song.hasMany(models.Comment, { foreignKey: 'songId', onDelete: 'CASCADE', hooks: true })
  };
  return Song;
};
