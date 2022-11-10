const { User } = require('../models');

const userData = [
  {
    username: 'foobar',
    email: 'foo@bar.com',
    password: 'foofoobarbar',
  },
  {
    username: 'numberletter',
    email: 'number@letter.com',
    password: '1a2b3c4d',
  },
  {
    username: 'patrickstar',
    email: 'patrick@star.com',
    password: 'starpatrick',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;