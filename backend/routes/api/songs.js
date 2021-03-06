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
    console.log('%%%%%%%%%%%%%%', songId)
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
    .withMessage('Please provide a title for your song')
    .isLength({min:0, max:100})
    .withMessage('Title must be 100 characters or less'),
  // check('url')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Please provide a song file'),
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
    // console.log('req body &&&&&&&&&', req.files.url)
    const { title, userId } = req.body;
    // console.log('%%%%%%%%%%%%%%%%%%%%%', title, url, imageUrl)
    const s3Url = await singlePublicFileUpload(req.files.url);
    let s3ImageUrl;
    if (req.files.imageUrl) {
      s3ImageUrl = await singlePublicFileUpload(req.files.imageUrl);
    } else {
      s3ImageUrl = 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/city-5848267_1280.jpg'
    }
    const song = await Song.createSong({ title, url: s3Url, userId, imageUrl: s3ImageUrl });
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
  multipleMulterUpload([
    {name: 'url', maxCount: 1},
    {name: 'imageUrl', maxCount: 1}
  ]),
  validateSong, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { songId, title, userId } = req.body;
    let s3Url;
    if (req.files.url) {
      s3Url = await singlePublicFileUpload(req.files.url);
    }
    let s3ImageUrl;
    if (req.files.imageUrl) {
      s3ImageUrl = await singlePublicFileUpload(req.files.imageUrl);
    }

    const updateSong = await Song.findByPk(songId, {
      include: [
        { model: User },
        { model: Heart }
      ]
    });

    if (updateSong.User.id === req.user.id) {
    const song = await Song.updateSong({songId, title, url: s3Url, imageUrl: s3ImageUrl, userId});
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
