'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          email: 'deliverator@snowcrash.io',
          username: 'Hiro_Protagonist',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'yt@user.io',
          username: 'Y.T.',
          hashedPassword: bcrypt.hashSync('yoursTruly')
        },
        {
          email: 'console_cowboy@user.io',
          username: 'Console Cowboy',
          hashedPassword: bcrypt.hashSync('console_cowboy')
        },
        {
          email: 'armitage@user.io',
          username: 'Armitage',
          hashedPassword: bcrypt.hashSync('armitage29')
        },
        {
          email: '3Jane@user.io',
          username: '3Jane',
          hashedPassword: bcrypt.hashSync('3Jane29')
        },
        {
          email: 'wintermute@user.io',
          username: 'Wintermute',
          hashedPassword: bcrypt.hashSync('Wintermute29')
        },
        {
          email: 'dixieflatline@user.io',
          username: 'Dixie Flatline',
          hashedPassword: bcrypt.hashSync('Flatline29')
        },
        {
          email: 'raven@user.io',
          username: 'Raven',
          hashedPassword: bcrypt.hashSync('Raven29')
        },
        {
          email: 'rWayne@user.io',
          username: 'Reverend Wayne',
          hashedPassword: bcrypt.hashSync('Reverend29')
        },
        {
          email: 'da5id@user.io',
          username: 'Da5id',
          hashedPassword: bcrypt.hashSync('Da5id29')
        },
        {
          email: 'hackworth@user.io',
          username: 'John Percival Hackworth',
          hashedPassword: bcrypt.hashSync('Hackworth29')
        },
        {
          email: 'alice@user.io',
          username: 'Alice',
          hashedPassword: bcrypt.hashSync('Alice29')
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
