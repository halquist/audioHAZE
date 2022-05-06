'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Comments', [
    {
      body: 'Oh what a great vibe 🤤',
      userId: 6,
      songId: 2,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 2,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 2,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 2,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 2,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    {
      body: 'Another winner',
      userId: 7,
      songId: 1,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 1,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 1,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 1,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 1,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'niceee',
      userId: 1,
      songId: 3,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 3,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 3,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 3,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 3,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Oh what a great vibe 🤤',
      userId: 1,
      songId: 4,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 4,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 4,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 8,
      songId: 4,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 9,
      songId: 4,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'awesome tune!',
      userId: 1,
      songId: 5,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 5,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 5,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 5,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 11,
      songId: 5,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Nice work 🔥',
      userId: 1,
      songId: 6,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 6,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 6,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 6,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 11,
      songId: 6,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'uwu',
      userId: 1,
      songId: 7,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 7,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 7,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 7,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 7,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Dreaming in squiggly lines & white noise.',
      userId: 1,
      songId: 8,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 8,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 8,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 8,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 8,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'c o o l :D',
      userId: 1,
      songId: 9,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 9,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 9,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 9,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 9,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Wow this is really good !',
      userId: 1,
      songId: 10,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 10,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 10,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 10,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 10,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'bruh',
      userId: 1,
      songId: 11,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 11,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 11,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 11,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 11,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'very nice track :)',
      userId: 1,
      songId: 12,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 12,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 12,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 12,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 12,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'oh that is the stuff right thr',
      userId: 1,
      songId: 13,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 13,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 13,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 13,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 13,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Wow just wow',
      userId: 1,
      songId: 14,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 14,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 14,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 14,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 14,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'That nostalgia',
      userId: 1,
      songId: 15,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 15,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 15,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 15,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 15,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Totally belongs in beverley hills cop',
      userId: 1,
      songId: 16,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 16,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 16,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 16,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 16,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Who is in 2077?',
      userId: 1,
      songId: 17,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 17,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 17,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 17,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 17,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'upload more i love you',
      userId: 1,
      songId: 18,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 18,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 18,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 18,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 18,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'D O P E !',
      userId: 1,
      songId: 19,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 19,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 19,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 19,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 19,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'n o s t a l g a',
      userId: 1,
      songId: 20,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 20,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 20,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 20,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 20,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Nice bass',
      userId: 1,
      songId: 21,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 21,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 21,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 21,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 21,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'beautiful sound',
      userId: 1,
      songId: 22,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 22,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 22,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 22,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 22,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Oooo thats heavy',
      userId: 1,
      songId: 23,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 23,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 23,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 23,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 23,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'sci-fi....',
      userId: 1,
      songId: 24,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 24,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 24,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 24,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 24,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Doooooood',
      userId: 1,
      songId: 25,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 25,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 25,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 25,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 25,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'So many sparkles in the room right now... Nice, guys!',
      userId: 1,
      songId: 26,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 26,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 26,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 26,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 26,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Nice snare sound',
      userId: 1,
      songId: 27,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 27,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 27,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 27,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 27,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'great hypnotic melody',
      userId: 1,
      songId: 28,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 28,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 28,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 28,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 28,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'perfect for writing school reports without time',
      userId: 1,
      songId: 29,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 29,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 29,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 29,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 29,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'more love for this song please',
      userId: 1,
      songId: 30,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 30,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 30,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 30,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 30,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'really great emotion and energy',
      userId: 1,
      songId: 31,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 31,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 31,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 31,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 31,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'this reminds me of the songs they play in the 80s workout videos',
      userId: 1,
      songId: 32,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 32,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 32,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 32,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 32,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'Love the synth here',
      userId: 1,
      songId: 33,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 33,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 33,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 33,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 33,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
    ///////////////////////////////////////
    {
      body: 'ahh such a classic sound',
      userId: 1,
      songId: 34,
      createdAt: '2022-04-01 18:11:23.873-05',
      updatedAt: '2022-04-01 18:11:23.873-05'
    },
    {
      body: 'This track made me discover synthwave 5 years ago, so thank you',
      userId: 2,
      songId: 34,
      createdAt: '2022-04-02 18:11:23.873-05',
      updatedAt: '2022-04-02 18:11:23.873-05'
    },
    {
      body: 'Rockin',
      userId: 3,
      songId: 34,
      createdAt: '2022-04-03 18:11:23.873-05',
      updatedAt: '2022-04-03 18:11:23.873-05'
    },
    {
      body: 'you have mastered Synthwave.',
      userId: 4,
      songId: 34,
      createdAt: '2022-04-04 18:11:23.873-05',
      updatedAt: '2022-04-04 18:11:23.873-05'
    },
    {
      body: 'yessss',
      userId: 5,
      songId: 34,
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    ///////////////////////////////////////
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
