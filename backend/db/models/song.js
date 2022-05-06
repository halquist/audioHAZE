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
    },
    imageUrl: {
      type: DataTypes.TEXT
    },
  }, {});

  Song.createSong = async function ({ title, url, userId, imageUrl }) {
    const song = await Song.create({
      title,
      url,
      userId,
      imageUrl
    });
    return await Song.findByPk(song.id);
  };

  Song.updateSong = async function ({ songId, title, url, imageUrl, userId }) {
    const song = await Song.findByPk(songId)

    song.title = title;
    song.url = url;
    song.imageUrl = imageUrl;
    await song.save();
    return song;
  };

  Song.deleteSong = async function ({ id }) {
    const song = await Song.findByPk(id.songId);
    await song.destroy();
    return {
      message: 'Success'
    }
  }

  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' })
    Song.hasMany(models.Comment, { foreignKey: 'songId', onDelete: 'CASCADE', hooks: true })
    Song.hasMany(models.Heart, { foreignKey: 'songId', onDelete: 'CASCADE', hooks: true })
  };
  return Song;
};
