'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Songs', [
    {
      title: "10,000 People Chanting, I'm an Individual",
      userId: 1,
      url: 'https://drive.google.com/file/d/1NuOQ6xkbQM80A-sv9rsJ2PwNEaOL9z0d/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1E9h4SLAsrvQ5nxE_rOdIkc09tAvGt2eo/view?usp=sharing',
      createdAt: '2022-05-04 18:11:23.873-05',
      updatedAt: '2022-05-04 18:11:23.873-05'
    },
    {
      title: "A Melody for Those Who Seek Truth",
      userId: 2,
      url: 'https://drive.google.com/file/d/1kGkHpXZuOtXSRJerCfnwl9kAV4AvSfIA/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1MbXB_vgtMiEgOBckuY9UNcETkv25ghYC/view?usp=sharing',
      createdAt: '2021-05-04 18:11:23.873-05',
      updatedAt: '2021-05-04 18:11:23.873-05'
    },
    {
      title: "A Sense of Purpose",
      userId: 3,
      url: 'https://drive.google.com/file/d/18Hq9wYFdkzdSx3HfdmajK27RUZLgOxp5/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1gOrGbOPr3Cngbytpi25ngUhrPOxoHj60/view?usp=sharing',
      createdAt: '2021-09-14 18:11:23.873-05',
      updatedAt: '2021-09-14 18:11:23.873-05'
    },
    {
      title: "Absolute Terror",
      userId: 4,
      url: 'https://drive.google.com/file/d/1Tcq9YRvLejkTOtCQfmJnoR974M_cPhNz/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1I32jCk7swjL8K69LSSD9MnrwHWFl2ROB/view?usp=sharing',
      createdAt: '2021-09-25 18:11:23.873-05',
      updatedAt: '2021-09-25 18:11:23.873-05'
    },
    {
      title: "Artifice",
      userId: 5,
      url: 'https://drive.google.com/file/d/1nGnZrbI75kbKTf1RSgBWajku8eRadH-U/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1Tb2zzgElld8QLXlXxoHYfIEagimqNuJk/view?usp=sharing',
      createdAt: '2020-09-22 18:11:23.873-05',
      updatedAt: '2020-09-22 18:11:23.873-05'
    },
    {
      title: "At the Time of Encounter, Two Hands Joining Together",
      userId: 6,
      url: 'https://drive.google.com/file/d/1Y4h2JekNij3lctN6UxbLVkf2fF99EpYj/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1OlZt1rr-q-eqlZXeXDuYhH5JU8JLtTIc/view?usp=sharing',
      createdAt: '2022-02-03 18:11:23.873-05',
      updatedAt: '2022-02-03 18:11:23.873-05'
    },
    {
      title: "Bush Week",
      userId: 7,
      url: 'https://drive.google.com/file/d/1jXoitnv-PoKZ6JzjqGAy3jNU2zF-QNpC/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1NE6BGYZLi1A8-uEYWK-qXJKyoMmnisiQ/view?usp=sharing',
      createdAt: '2022-03-06 18:11:23.873-05',
      updatedAt: '2022-03-06 18:11:23.873-05'
    },
    {
      title: "Dasein",
      userId: 8,
      url: 'https://drive.google.com/file/d/1jXoitnv-PoKZ6JzjqGAy3jNU2zF-QNpC/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1cYOJp1-8ejoO2tEeyw-0sSUQwDjrICcJ/view?usp=sharing',
      createdAt: '2022-04-16 18:11:23.873-05',
      updatedAt: '2022-04-16 18:11:23.873-05'
    },
    {
      title: "Disconnected",
      userId: 9,
      url: 'https://drive.google.com/file/d/1vfdkwTGzClF3amPJlQx3nX7MqRZi-l9U/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1pqBUJt-KTXu-OHloMnDOdoOKSMtU5DRc/view?usp=sharing',
      createdAt: '2022-03-11 18:11:23.873-05',
      updatedAt: '2022-03-11 18:11:23.873-05'
    },
    {
      title: "Dream Sunlight",
      userId: 10,
      url: 'https://drive.google.com/file/d/1GPS--K56hRauaJpXupMGz2n715PZHXNV/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1GP5AOEXJ58qWDMw0Xg8BcxYE_EsYCkvA/view?usp=sharing',
      createdAt: '2022-01-12 18:11:23.873-05',
      updatedAt: '2022-01-12 18:11:23.873-05'
    },
    {
      title: "Endless Blue",
      userId: 11,
      url: 'https://drive.google.com/file/d/1FGGF8L59gXR-BIorYNEFZlVvd0vBMPx_/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1A2vN7O-UWzERYw1-Ju4Vw_TgClq_5f7E/view?usp=sharing',
      createdAt: '2022-01-25 18:11:23.873-05',
      updatedAt: '2022-01-25 18:11:23.873-05'
    },
    {
      title: "Glimmer",
      userId: 12,
      url: 'https://drive.google.com/file/d/137E-W5OhmWbRJkD8eHKpsT33qfznpS_1/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/15WWvVLBl6PqYbadR1HZktIu3GQ_cTmJY/view?usp=sharing',
      createdAt: '2021-01-21 18:11:23.873-05',
      updatedAt: '2021-01-21 18:11:23.873-05'
    },
    {
      title: "Hedgehog's Dilemma",
      userId: 1,
      url: 'https://drive.google.com/file/d/1JFbfmDH7yCvB9qaWebhzZ8bXB2eHMd7o/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/17MkkOWi22f9_wq5MCcdM-mYmo0Lu5G1i/view?usp=sharing',
      createdAt: '2022-04-29 18:11:23.873-05',
      updatedAt: '2022-04-29 18:11:23.873-05'
    },
    {
      title: "Imposter",
      userId: 2,
      url: 'https://drive.google.com/file/d/1NslY8Ur1PIaRA2P2dG_I7v_AQWV7RvBk/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1hpOVSNX1Q-9P9RwLtcC6-fd8wn5dp68i/view?usp=sharing',
      createdAt: '2022-02-29 18:11:23.873-05',
      updatedAt: '2022-02-29 18:11:23.873-05'
    },
    {
      title: "In the Belly of the Whale",
      userId: 3,
      url: 'https://drive.google.com/file/d/1b1-OT7UDDX-l3TsFbsWcHuE3XR30isNa/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1oHhmIsYCqec0KKfi-0DMSq1eS2Hf9GTd/view?usp=sharing',
      createdAt: '2022-03-21 18:11:23.873-05',
      updatedAt: '2022-03-21 18:11:23.873-05'
    },
    {
      title: "Laconic",
      userId: 4,
      url: 'https://drive.google.com/file/d/1JHkbLVDyDkzRpXMC97n21qS2UOQqJq6y/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1bfM_QyQDg9oNG45tdhDRJ-6sLHjOzlOr/view?usp=sharing',
      createdAt: '2020-02-20 18:11:23.873-05',
      updatedAt: '2020-02-20 18:11:23.873-05'
    },
    {
      title: "Moonlit Skyline",
      userId: 5,
      url: 'https://drive.google.com/file/d/1S8pLVyYPfg178fvdWVsRBeMAoQYZrt-Z/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1m23q7xuZGW-VH9RoaY6dROSU6W0BEutB/view?usp=sharing',
      createdAt: '2021-01-20 18:11:23.873-05',
      updatedAt: '2021-01-20 18:11:23.873-05'
    },
    {
      title: "Morning Bell",
      userId: 6,
      url: 'https://drive.google.com/file/d/1sJ-fhFpId55D_Uj8hmILIWNfZfkL0C2D/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1JN_dYzVjv9nUteMvyFlX3Ypm63LFQ_ql/view?usp=sharing',
      createdAt: '2021-06-20 18:11:23.873-05',
      updatedAt: '2021-06-20 18:11:23.873-05'
    },
    {
      title: "Motion Blur",
      userId: 7,
      url: 'https://drive.google.com/file/d/1BA51wIVljmRotwrU1v5bLDO77cAPl9Rt/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/18MIFnkNz0nM7BU_4FlVRm2INE95tBrbH/view?usp=sharing',
      createdAt: '2021-03-13 18:11:23.873-05',
      updatedAt: '2021-03-13 18:11:23.873-05'
    },
    {
      title: "Noctivagant",
      userId: 8,
      url: 'https://drive.google.com/file/d/1QXP2PV3uOiaxiA87kPb6huWX217eW9an/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1FCH1S9sgzOcEuJmisky698dXW6V0jtgN/view?usp=sharing',
      createdAt: '2021-11-12 18:11:23.873-05',
      updatedAt: '2021-11-12 18:11:23.873-05'
    },
    {
      title: "Oblivious",
      userId: 9,
      url: 'https://drive.google.com/file/d/184jqxYQeFS8wx58G921wthqiGnjUyJ4X/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1pCneU5RvyFnPFP0lh_fe35hfN7NoUPqb/view?usp=sharing',
      createdAt: '2021-12-12 18:11:23.873-05',
      updatedAt: '2021-12-12 18:11:23.873-05'
    },
    {
      title: "Our Ships Line The Ocean Floor",
      userId: 10,
      url: 'https://drive.google.com/file/d/1cxYE7EWFgqjWDa6GfKjE1lasuOfM49_Z/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/18M5ktI8Wi0qLkuXtoFg0JaC8bveM5rK8/view?usp=sharing',
      createdAt: '2021-10-16 18:11:23.873-05',
      updatedAt: '2021-10-16 18:11:23.873-05'
    },
    {
      title: "Panthalassa",
      userId: 11,
      url: 'https://drive.google.com/file/d/1CP-f4PxEDAijLZKS4ha795437iIfRocD/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1TpejxZwQr_hEdgPvbhK7yJnPg99A-tUj/view?usp=sharing',
      createdAt: '2021-05-16 18:11:23.873-05',
      updatedAt: '2021-05-16 18:11:23.873-05'
    },
    {
      title: "Reaching out My Hand I'm Running, Chasing your Shadow",
      userId: 12,
      url: 'https://drive.google.com/file/d/1Td1xo4piOI79ihrRz__MJykpOHFQ5f_X/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1k4LDhPuhjPPpyeAp-rgmw9yytiJT-YiX/view?usp=sharing',
      createdAt: '2021-05-24 18:11:23.873-05',
      updatedAt: '2021-05-24 18:11:23.873-05'
    },
    {
      title: "Reawakening Memories Closed Up in His Chest",
      userId: 1,
      url: 'https://drive.google.com/file/d/1VAnUNKPO7kqbpcBi6G7wJQcJo0kX8c_x/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1OhwoQAARbmmm_ifnjZPdglgPK8MU5b2m/view?usp=sharing',
      createdAt: '2021-07-24 18:11:23.873-05',
      updatedAt: '2021-07-24 18:11:23.873-05'
    },
    {
      title: "Samsara",
      userId: 2,
      url: 'https://drive.google.com/file/d/1sh4BCpsWuwYrW8z7hftSk0D4j72MJXSg/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1OkC7dcLA6kxlyewsonqtIIkiFyVHlC-D/view?usp=sharing',
      createdAt: '2021-07-17 18:11:23.873-05',
      updatedAt: '2021-07-17 18:11:23.873-05'
    },
    {
      title: "Sparkwood & 21",
      userId: 3,
      url: 'https://drive.google.com/file/d/1roV4g5PrcfFV__VbPeoZDq5RLcnPl4Ob/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1djEj0WaIS7lvniBaHfyVL5G10RylgP1h/view?usp=sharing',
      createdAt: '2021-12-17 18:11:23.873-05',
      updatedAt: '2021-12-17 18:11:23.873-05'
    },
    {
      title: "Terminant",
      userId: 4,
      url: 'https://drive.google.com/file/d/10fBsdtGWNaAIs_AWMLkg9odRFp4ZAGFw/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1Hk6Ir8_UFmxIt_utFcccCft87A9vP4P1/view?usp=sharing',
      createdAt: '2021-12-02 18:11:23.873-05',
      updatedAt: '2021-12-02 18:11:23.873-05'
    },
    {
      title: "The Absurd",
      userId: 5,
      url: 'https://drive.google.com/file/d/1xZs5IgWPiau056Z6vKBCIWMVzJjc6eTt/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1z2AgnU08qbQ9glDwT4XbSOqxUuvSs6BK/view?usp=sharing',
      createdAt: '2021-09-02 18:11:23.873-05',
      updatedAt: '2021-09-02 18:11:23.873-05'
    },
    {
      title: "The Author Never Dies (instrumental)",
      userId: 6,
      url: 'https://drive.google.com/file/d/1oj26slwUaWvPqhmzD4qsHnreFa5sQdpk/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1d3dXoRVEf3PfBNiyG3YY_5EXKeZf8NnW/view?usp=sharing',
      createdAt: '2021-09-18 18:11:23.873-05',
      updatedAt: '2021-09-18 18:11:23.873-05'
    },
    {
      title: "The Bright Lights of Summer",
      userId: 7,
      url: 'https://drive.google.com/file/d/1r1C91PkChk2ytJlJLlu0oWT-dtLCJSpn/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1OiFGB5b8UQt9uJ9jmxo8ZKQVnoMTnylO/view?usp=sharing',
      createdAt: '2021-03-25 18:11:23.873-05',
      updatedAt: '2021-03-25 18:11:23.873-05'
    },
    {
      title: "The Melody That Flutters Before the Shining Stars and the Sunset",
      userId: 8,
      url: 'https://drive.google.com/file/d/1sj6nGZegpZhRyqpNPNihiV8EA4990kI4/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1odiDAKmUPEtwYv-8kyiwUH8N1_y1yjXK/view?usp=sharing',
      createdAt: '2021-03-14 18:11:23.873-05',
      updatedAt: '2021-03-14 18:11:23.873-05'
    },
    {
      title: "Where There Is No Darkness",
      userId: 9,
      url: 'https://drive.google.com/file/d/1I6vlZkumRYPB6Yom7U4JEO1TkeX29hVa/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1ijOzMgDTj8qTvlfxTKzkCE7-Q3RrXRyC/view?usp=sharing',
      createdAt: '2020-03-21 18:11:23.873-05',
      updatedAt: '2020-03-21 18:11:23.873-05'
    },
    {
      title: "Woven Hands",
      userId: 10,
      url: 'https://drive.google.com/file/d/1J7_BUabivfUkWRfkHlwIu1xGJgr2UHrZ/view?usp=sharing',
      imageUrl: 'https://drive.google.com/file/d/1rNSB7pRiV4VzNRi4cxHixMr3_79F5L_G/view?usp=sharing',
      createdAt: '2020-10-21 18:11:23.873-05',
      updatedAt: '2020-10-21 18:11:23.873-05'
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete("Songs", null, {});
  }
};
