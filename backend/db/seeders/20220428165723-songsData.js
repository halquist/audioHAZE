'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Songs', [
    {
      title: "10,000 People Chanting, I'm an Individual",
      userId: 1,
      url: "https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/10%2C000%2BPeople%2BChanting%2C%2B-I'm%2Ban%2BIndividual-.mp3",
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/50109154523_606c3f5f71_b.jpg',
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    {
      title: "A Melody for Those Who Seek Truth",
      userId: 2,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/A%2BMelody%2Bfor%2BThose%2BWho%2BSeek%2BTruth.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/80s-background.svg',
      createdAt: '2021-05-04 18:11:23.873-05',
      updatedAt: '2021-05-04 18:11:23.873-05'
    },
    {
      title: "A Sense of Purpose",
      userId: 3,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/A%2BSense%2Bof%2BPurpose.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/8machine-_-_1QVCj7Bd5s-unsplash.jpg',
      createdAt: '2021-09-14 18:11:23.873-05',
      updatedAt: '2021-09-14 18:11:23.873-05'
    },
    {
      title: "Absolute Terror",
      userId: 4,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Absolute%2BTerror.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/agnis-leznins-DXa7-nmPKSk-unsplash.jpg',
      createdAt: '2021-09-25 18:11:23.873-05',
      updatedAt: '2021-09-25 18:11:23.873-05'
    },
    {
      title: "Artifice",
      userId: 5,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Artifice.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/alek-kalinowski-Sj_3Jdr19L4-unsplash.jpg',
      createdAt: '2020-09-22 18:11:23.873-05',
      updatedAt: '2020-09-22 18:11:23.873-05'
    },
    {
      title: "At the Time of Encounter, Two Hands Joining Together",
      userId: 6,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/At%2Bthe%2BTime%2Bof%2BEncounter%2C%2BTwo%2BHands%2BJoining%2BTogether.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/antoine-j-r3XvSBEQQLo-unsplash.jpg',
      createdAt: '2022-02-03 18:11:23.873-05',
      updatedAt: '2022-02-03 18:11:23.873-05'
    },
    {
      title: "Bush Week",
      userId: 7,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Bush%2BWeek.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/cash-IKEQNt9wYb4-unsplash.jpg',
      createdAt: '2022-03-06 18:11:23.873-05',
      updatedAt: '2022-03-06 18:11:23.873-05'
    },
    {
      title: "Dasein",
      userId: 8,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Dasein.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/city-5848267_1280.jpg',
      createdAt: '2022-04-16 18:11:23.873-05',
      updatedAt: '2022-04-16 18:11:23.873-05'
    },
    {
      title: "Disconnected",
      userId: 9,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Disconnected.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/david-arrowsmith-Dbg-_oA5Q1s-unsplash.jpg',
      createdAt: '2022-03-11 18:11:23.873-05',
      updatedAt: '2022-03-11 18:11:23.873-05'
    },
    {
      title: "Dream Sunlight",
      userId: 10,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Dream%2BSunlight.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/DJ_podium_med_palmer_og_diskokugle.jpg',
      createdAt: '2022-01-12 18:11:23.873-05',
      updatedAt: '2022-01-12 18:11:23.873-05'
    },
    {
      title: "Endless Blue",
      userId: 11,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Endless%2BBlue.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/eduardo-pastor-gH3hDhmkdFo-unsplash.jpg',
      createdAt: '2022-01-25 18:11:23.873-05',
      updatedAt: '2022-01-25 18:11:23.873-05'
    },
    {
      title: "Glimmer",
      userId: 12,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Glimmer.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/glass-scifi-violet-ultraviolet.jpg',
      createdAt: '2021-01-21 18:11:23.873-05',
      updatedAt: '2021-01-21 18:11:23.873-05'
    },
    {
      title: "Hedgehog's Dilemma",
      userId: 1,
      url: "https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Hedgehog's%2BDilemma%2B(Instrumental%2BVersion).mp3",
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/krzysztof-hepner-ymx8g15pxD4-unsplash.jpg',
      createdAt: '2022-04-29 18:11:23.873-05',
      updatedAt: '2022-04-29 18:11:23.873-05'
    },
    {
      title: "Imposter",
      userId: 2,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Imposter.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/landscape-vector-6204101_1280.jpg',
      createdAt: '2022-02-21 18:11:23.873-05',
      updatedAt: '2022-02-21 18:11:23.873-05'
    },
    {
      title: "In the Belly of the Whale",
      userId: 3,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/In%2Bthe%2BBelly%2Bof%2Bthe%2BWhale.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/Layout-16-scaled.webp',
      createdAt: '2022-03-21 18:11:23.873-05',
      updatedAt: '2022-03-21 18:11:23.873-05'
    },
    {
      title: "Laconic",
      userId: 4,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Laconic.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg',
      createdAt: '2020-02-20 18:11:23.873-05',
      updatedAt: '2020-02-20 18:11:23.873-05'
    },
    {
      title: "Moonlit Skyline",
      userId: 5,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Moonlit%2BSkyline.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/lorenzo-herrera-VFiQvZPlm2k-unsplash.jpg',
      createdAt: '2021-01-20 18:11:23.873-05',
      updatedAt: '2021-01-20 18:11:23.873-05'
    },
    {
      title: "Morning Bell",
      userId: 6,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Morning%2BBell.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/maxim-berg-9XunOfueKKI-unsplash.jpg',
      createdAt: '2021-06-20 18:11:23.873-05',
      updatedAt: '2021-06-20 18:11:23.873-05'
    },
    {
      title: "Motion Blur",
      userId: 7,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Motion%2BBlur.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/maxim-berg-kE8-rUKjtQU-unsplash.jpg',
      createdAt: '2021-03-13 18:11:23.873-05',
      updatedAt: '2021-03-13 18:11:23.873-05'
    },
    {
      title: "Noctivagant",
      userId: 8,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Noctivagant.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/maxim-berg-PiFzbqDClGk-unsplash.jpg',
      createdAt: '2021-11-12 18:11:23.873-05',
      updatedAt: '2021-11-12 18:11:23.873-05'
    },
    {
      title: "Oblivious",
      userId: 9,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Oblivious.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/maxim-berg-ZePAAZDt4XU-unsplash.jpg',
      createdAt: '2021-12-12 18:11:23.873-05',
      updatedAt: '2021-12-12 18:11:23.873-05'
    },
    {
      title: "Our Ships Line The Ocean Floor",
      userId: 10,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Our%2BShips%2BLine%2BThe%2BOcean%2BFloor.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/neon-light-street-silhouette-vaporwave-aesthetic.jpg',
      createdAt: '2021-10-16 18:11:23.873-05',
      updatedAt: '2021-10-16 18:11:23.873-05'
    },
    {
      title: "Panthalassa",
      userId: 11,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Panthalassa.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/pandhuya-niking-WdrJ0eBflsE-unsplash.jpg',
      createdAt: '2021-05-16 18:11:23.873-05',
      updatedAt: '2021-05-16 18:11:23.873-05'
    },
    {
      title: "Reaching out My Hand I'm Running, Chasing your Shadow",
      userId: 12,
      url: "https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Reaching%2Bout%2BMy%2BHand%2BI'm%2BRunning%2C%2BChasing%2Byour%2BShadow.mp3",
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/pattern-3288824_1280.webp',
      createdAt: '2021-05-24 18:11:23.873-05',
      updatedAt: '2021-05-24 18:11:23.873-05'
    },
    {
      title: "Reawakening Memories Closed Up in His Chest",
      userId: 1,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Reawakening%2BMemories%2BClosed%2BUp%2Bin%2BHis%2BChest%2B-%2Bless20mb.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/perturbator-a-lausanne-2019-low-04.jpg',
      createdAt: '2021-07-24 18:11:23.873-05',
      updatedAt: '2021-07-24 18:11:23.873-05'
    },
    {
      title: "Samsara",
      userId: 2,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Samsara.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/preview16.jpg',
      createdAt: '2021-07-17 18:11:23.873-05',
      updatedAt: '2021-07-17 18:11:23.873-05'
    },
    {
      title: "Sparkwood & 21",
      userId: 3,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Sparkwood%2B%26%2B21.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/street-sign-neon-light.jpg',
      createdAt: '2021-12-17 18:11:23.873-05',
      updatedAt: '2021-12-17 18:11:23.873-05'
    },
    {
      title: "Terminant",
      userId: 4,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Terminant.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/sun-5682667_1280.webp',
      createdAt: '2021-12-02 18:11:23.873-05',
      updatedAt: '2021-12-02 18:11:23.873-05'
    },
    {
      title: "The Absurd",
      userId: 5,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/The%2BAbsurd.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/synthwave-3941721_1280.jpg',
      createdAt: '2021-09-02 18:11:23.873-05',
      updatedAt: '2021-09-02 18:11:23.873-05'
    },
    {
      title: "The Author Never Dies (instrumental)",
      userId: 6,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/The%2BAuthor%2BNever%2BDies%2B(instrumental).mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/Synthwave.jpg',
      createdAt: '2021-09-18 18:11:23.873-05',
      updatedAt: '2021-09-18 18:11:23.873-05'
    },
    {
      title: "The Bright Lights of Summer",
      userId: 7,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/The%2BBright%2BLights%2Bof%2BSummer.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/vaporwave.svg',
      createdAt: '2021-03-25 18:11:23.873-05',
      updatedAt: '2021-03-25 18:11:23.873-05'
    },
    {
      title: "The Melody That Flutters Before the Shining Stars and the Sunset",
      userId: 8,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/The%2BMelody%2BThat%2BFlutters%2BBefore%2Bthe%2BShining%2BStars%2Band%2Bthe%2BSunset.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/yasmin-dangor-DlnuMGrvJWE-unsplash.jpg',
      createdAt: '2021-03-14 18:11:23.873-05',
      updatedAt: '2021-03-14 18:11:23.873-05'
    },
    {
      title: "Where There Is No Darkness",
      userId: 9,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Where%2BThere%2BIs%2BNo%2BDarkness.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/yasmin-dangor-tkQiexmKwj0-unsplash.jpg',
      createdAt: '2020-03-21 18:11:23.873-05',
      updatedAt: '2020-03-21 18:11:23.873-05'
    },
    {
      title: "Woven Hands",
      userId: 10,
      url: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedSongs/Woven%2BHands.mp3',
      imageUrl: 'https://neoeononebucket.s3.us-east-2.amazonaws.com/audiohazeSeedImages/yasmin-dangor-xgK2rnc4YF4-unsplash.jpg',
      createdAt: '2020-10-21 18:11:23.873-05',
      updatedAt: '2020-10-21 18:11:23.873-05'
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete("Songs", null, {});
  }
};
