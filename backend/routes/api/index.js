const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js');
const commentsRouter = require('./comments.js');
const heartsRouter = require('./hearts.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songsRouter);

router.use('/comments', commentsRouter);

router.use('/hearts', heartsRouter);

module.exports = router;
