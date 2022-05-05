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
    const findComment = await Comment.findByPk(comment.id, {include: { model: User}});
    return res.json(
      findComment
    );
  })
);

router.delete(
  '/',
  requireAuth, restoreUser,
  asyncHandler( async (req, res, next) => {

    const { id } = req.body;
    const findComment = await Comment.findByPk(id, {include: { model: User}});

    if (findComment.User.id === req.user.id) {
      const comment = await Comment.deleteComment({ id });
      return res.json({
        comment
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
