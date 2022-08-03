'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    userId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    playlist: {
      type: DataTypes.ARRAY({
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Song,
          key: 'songId'
        }
      }),
      defaultValue: [],
    },

  }, {});

  Playlist.createOne = async function ({ userId, title }) {
    // console.log(title, '&&&&&&&&&&&&&&&&&&&&&&&')
    const playlist = await Playlist.create({
      userId,
      title
    });
    return await Playlist.findByPk(playlist.id);
  }

  Playlist.delete = async function ( id ) {
    // console.log('%%%%%%%%%%%%%%%', id)
    const playlistFind = await Playlist.findByPk(id)
    await playlistFind.destroy();
    // console.log('destroyed ^^^^^^^^^^^^^^^^^^^')
    return {
      message: 'Success'
    }
  }

  Playlist.add = async function ( playlistId, songId ) {
    // console.log('id id id', playlistId, songId)
    const playlist = await Playlist.findByPk(playlistId);
    // const playlistArr = playlistFind.playlist;
    playlist.playlist = [...playlist.playlist, songId];
    // playlist.playlist.push(songId);
    await playlist.save();
    return playlist;
  }

  Playlist.remove = async function ( playlistId, index ) {
    const playlistFind = await Playlist.findByPk(playlistId);
    playlistFind.playlist.splice(index, 1);
    const newPlaylist = playlistFind.playlist
    playlistFind.playlist = newPlaylist
    await playlistFind.save();
    return playlistFind;
  }

  Playlist.update = async function (playlist, id) {
    const playlistFind = await Playlist.findByPk(id);
    playlistFind.playlist = playlist
    await playlistFind.save();
    return playlistFind;
  }

  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsTo(models.User, { foreignKey: 'userId'})
    Playlist.belongsTo(models.Song, { foreignKey: 'playlist'})
  };
  return Playlist;
};
