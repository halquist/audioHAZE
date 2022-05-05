const express = require('express');
const asyncHandler = require('express-async-handler');

const { restoreUser, requireAuth } = require('../../utils/auth');
const { Song, User, Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// get all comments for a particular song
router.get(
  '/:id',
  asyncHandler( async (req, res) => {
    const commentId = req.params.id;
    const comments = await Comment.findAll({where: {
      songId: commentId
  },
  include: [
      { model: User },
      { model: Song }
  ],
  order: [['createdAt', 'DESC']]});
    return res.json(comments);
  })
);

// new comment validation
const validateComment = [
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('A comment cannot be empty'),
  handleValidationErrors
]

// create new comment
router.post(
  '/',
  validateComment, requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { body, userId, songId } = req.body;
    const comment = await Comment.createComment({ body, userId, songId });

    return res.json({
      comment
    });
  })
);


module.exports = router;
