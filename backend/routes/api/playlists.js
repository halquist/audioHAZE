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
  asyncHandler( async (req, res) => {
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

// get one playlist by id
router.get(
  '/:id(\\d+)',
  asyncHandler( async (req, res) => {
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

// add song validation
const validatePlaylistAdd = [
  check('songId')
    .isInt()
    .withMessage('Error please try again')
    .bail(),
  check('userId')
    .exists({ checkFalsy: true })
    .withMessage('Error please try again')
    .bail(),
  check('playlistId')
    .exists({ checkFalsy: true })
    .withMessage('Error please try again')
    .bail(),
  handleValidationErrors
]

// add song to playlist
router.put(
  '/add',
  validatePlaylistAdd, requireAuth, restoreUser,
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
