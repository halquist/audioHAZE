const express = require('express');
const asyncHandler = require('express-async-handler');

const { restoreUser, requireAuth } = require('../../utils/auth');
const { Song, User, Heart } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload, singleMulterUpload, multipleMulterUpload } = require('../../awsS3')


const router = express.Router();

// get all songs
router.get(
  '/',
  asyncHandler( async (_req, res) => {
    const songs = await Song.findAll( {
      include: [
        { model: User },
        { model: Heart }
      ]
    });
    return res.json(songs);
  })
);

// get one song
router.get(
  '/:id',
  asyncHandler( async (req, res) => {
    const songId = req.params.id;
    const song = await Song.findByPk(songId, {
      include: [
        { model: User },
        { model: Heart }
      ]
    })
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
  // check('url')
    // .isURL({ checkFalsy: true })
    // .withMessage('Please provide a valid URL link to your song file'),
  handleValidationErrors
]

// create new song
router.post(
  '/',
  multipleMulterUpload([
    {name: 'url', maxCount: 1},
    {name: 'imageUrl', maxCount: 1}
  ]),
  validateSong, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { title, url, userId, imageUrl } = req.body;
    console.log('%%%%%%%%%%%%%%%%%%%%%', title, url, imageUrl)
    const s3SongUrl = await singlePublicFileUpload(url);
    const s3ImageUrl = await singlePublicFileUpload(imageUrl);
    const song = await Song.createSong({ title, url: s3SongUrl, userId, imageUrl: s3ImageUrl });
    const findSong = await Song.findByPk(song.id, {
      include: [
        { model: User },
        { model: Heart }
      ]
    })
    return res.json({
      findSong
    });
  })
);

// edit song
router.put(
  '/',
  validateSong, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { songId, title, url, imageUrl, userId } = req.body;
    const updateSong = await Song.findByPk(songId, {
      include: [
        { model: User },
        { model: Heart }
      ]
    });

    if (updateSong.User.id === req.user.id) {
    const song = await Song.updateSong({songId, title, url, imageUrl, userId});
    const findSong = await Song.findByPk(song.id, {
      include: [
        { model: User },
        { model: Heart }
      ]
    })
    return res.json({
      findSong
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
