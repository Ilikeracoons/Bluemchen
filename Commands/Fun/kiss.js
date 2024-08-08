const gifFunction = require('../../Utils/gifFunction.js');
const gifs = ['https://c.tenor.com/Ko1AOLzUmyEAAAAd/.gif',
  'https://c.tenor.com/rQ8qlj_oQ-YAAAAC/.gif',
  'https://c.tenor.com/H7ElWf1bKUkAAAAC/.gif',
  'https://c.tenor.com/_eP0iWZ2Y5AAAAAC/.gif',
  'https://c.tenor.com/PS6medrGxqwAAAAd/.gif',
  'https://c.tenor.com/SZ8-4vDwi6cAAAAC/.gif',
  'https://c.tenor.com/WaJl99zHUYIAAAAC/.gif',
  'https://c.tenor.com/Q6rgr_3z9W0AAAAC/.gif'];

/** @type {command}*/
module.exports = {
  description: 'Gives a user a kiss',

  run: function run(message) {
    return gifFunction(message, gifs, 'Mwuahhh, <user>', `Mwuahhh, ${message.author}`);
  }
};