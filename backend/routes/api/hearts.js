const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song, User, Heart } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth');

const router = express.Router();

// get all hearts
router.get(
  '/',
  asyncHandler( async (req, res) => {
    // const songId = req.params.id;
    const hearts = await Heart.findAll({
  include: [
      { model: User },
      { model: Song }
  ]});
    return res.json(hearts);
  })
);

// create new heart
router.post(
  '/',
 requireAuth, restoreUser,
  asyncHandler( async (req, res) => {
    const { userId, songId } = req.body;
    const heart = await Heart.createHeart({ userId, songId });
    const findHeart = await Heart.findByPk(heart.id, {include: [User, Song]});
    return res.json({
      findHeart
    });
  })
);

router.delete(
  '/',
  requireAuth, restoreUser,
  asyncHandler( async (req, res, next) => {

    const { id } = req.body;
    const findHeart = await Heart.findByPk(id.id, {include: [User, Song]});
    if (findHeart.User.id === req.user.id) {
      const heart = await Heart.deleteHeart({ id });
      return res.json({
        heart
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
