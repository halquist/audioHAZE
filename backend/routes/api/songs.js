const express = require('express');
const asyncHandler = require('express-async-handler');

const { restoreUser, requireAuth } = require('../../utils/auth');
const { Song, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { db } = require('../../config');

const router = express.Router();

// get all songs
router.get(
  '/',
  asyncHandler( async (_req, res) => {
    const songs = await Song.findAll( {include: { model: User}} );
    return res.json(songs);
  })
);

// get one song
router.get(
  '/:id',
  asyncHandler( async (req, res) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId, {include: { model: User}})
    return res.json(song);
  })
);

// new song validation
const validateSong = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title for your song'),
  check('url')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a URL link to your song file'),
  check('url')
    .isURL({ checkFalsy: true })
    .withMessage('Please provide a valid URL link to your song file'),
  handleValidationErrors
]

// create new song
router.post(
  '/',
  validateSong, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { title, url, userId, imageUrl } = req.body;
    const song = await Song.createSong({title, url, userId, imageUrl});
    return res.json({
      song
    });
  })
);

// edit song
router.put(
  '/',
  validateSong, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { songId, title, url, imageUrl, userId } = req.body;
    const findSong = await Song.findByPk(songId, {include: { model: User}});

    if (findSong.User.id === req.user.id) {
    const song = await Song.updateSong({songId, title, url, imageUrl, userId});
    return res.json({
      song
    });
  } else {
    res.errors = new Error('Unauthorized');
    err.errors = errors;
    err.status = 403;
    err.title = 'Unauthorized';
    next(err);
  }
  })
)

router.delete(
  '/',
  requireAuth, restoreUser,
  asyncHandler( async (req, res, next) => {

    console.log('req.user', req.user.id)
    const { id } = req.body;
    const findSong = await Song.findByPk(id.songId, {include: { model: User}});

    if (findSong.User.id === req.user.id) {
      const song = await Song.deleteSong({ id });
      return res.json({
        song
      });
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
