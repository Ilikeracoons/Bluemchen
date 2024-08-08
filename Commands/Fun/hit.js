const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://c.tenor.com/E4Px9kJOQ5wAAAAC/.gif',
  'https://c.tenor.com/CUy1MDU94xgAAAAC/.gif',
  'https://c.tenor.com/tfu-SnLkaP4AAAAC/.gif',
  'https://c.tenor.com/HNshDeQoEKsAAAAd/.gif',
  'https://c.tenor.com/Jpp7qo6lEHYAAAAd/.gif'
];

/** @type {command}*/
module.exports = {
  description: 'hit someone if they annoy you',

  run: function run(message) {
    return gifFunction(message, gifs, 'Stop now, <user>!', 'Stop now!');
  }
};