const express = require('express');
const asyncHandler = require('express-async-handler');

const { restoreUser, requireAuth } = require('../../utils/auth');
const { Song } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

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
    console.log('woo', req.body)
    const { title, url, userId } = req.body;
    const song = await Song.createSong({title, url, userId});

    return res.json({
      song
    });
  })
);

module.exports = router;
