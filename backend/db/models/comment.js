'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});

  Comment.createComment = async function ({ body, userId, songId }) {
    const comment = await Comment.create({
      body,
      userId,
      songId
    });
    return await Comment.findByPk(comment.id);
  };

  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Song, { foreignKey: 'songId' })
  };
  return Comment;
};
