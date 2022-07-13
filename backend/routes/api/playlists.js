const express = require('express');
const asyncHandler = require('express-async-handler');

const { Playlist, Song, User, Heart } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// get all playlists for a user
router.get(
  '/user/:id(\\d+)',
  asyncHandler( async (_req, res) => {
    const userId = req.params.id;
    const playlists = await Playlist.findAll({
      where: {
        userId: userId
      },
      include: [
        { model: User }
      ],
      order: [['createdAt', 'DESC']],
    });
    return res.json(playlists);
  })
);

// new song validation
const validatePlaylist = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title for your playlist')
    .bail()
    .isLength({min:0, max:100})
    .withMessage('Title must be 100 characters or less'),
  handleValidationErrors
]

// create new playlist
router.post(
  '/',
  validatePlaylist, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { userId, title } = req.body;
    const playlist = await Playlist.createOne({ userId, title });
    const findPlaylist = await Playlist.findByPk(playlist.id, {include: { model: User}})
    return res.json(findPlaylist);
  })
);

// add song to playlist
router.put(
  '/add',
  requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { userId, playlistId, songId } = req.body;
    const addPlaylist = await Playlist.findByPk(playlistId);

    if (addPlaylist.userId === userId) {
      const updatePlaylist = await Playlist.add( playlistId, songId );
      return res.json(updatePlaylist)
    } else {
      res.errors = new Error('Unauthorized');
      err.errors = errors;
      err.status = 403;
      err.title = 'Unauthorized';
      next(err);
    }
  })
)

module.exports = router;
