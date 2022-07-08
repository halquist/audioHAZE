const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// sign up validation
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email')
    .isLength({min: 4, max: 256})
    .withMessage('Please provide an email between 4 and 256 characters'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({min: 4, max: 30})
      .withMessage('Please provide a username between 4 and 30 characters'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6})
      .withMessage('Password must be 6 character or more'),
    handleValidationErrors
];

// sign up
router.post(
  '/',
  validateSignup,
  asyncHandler( async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


module.exports = router;
