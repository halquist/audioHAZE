'use strict';
module.exports = (sequelize, DataTypes) => {
  const Heart = sequelize.define('Heart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  Heart.createHeart = async function ({ userId, songId }) {
    const newHeart = await Heart.create({
      userId,
      songId
    });
    return await Heart.findByPk(newHeart.id);
  };

  Heart.deleteHeart = async function ({ id }) {
    const heart = await Heart.findByPk(id.id);
    await heart.destroy();
    return {
      message: 'Success'
    }
  }


  Heart.associate = function(models) {
    // associations can be defined here
    Heart.belongsTo(models.User, { foreignKey: 'userId' })
    Heart.belongsTo(models.Song, { foreignKey: 'songId' })
  };
  return Heart;
};
