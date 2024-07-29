const gifFunction = require('../../Utils/gifFunction.js');
const gifs = ['https://c.tenor.com/HBmX6ZzfcKYAAAAd/.gif',
  'https://c.tenor.com/8e9QI2E7SEMAAAAC/.gif',
  'https://c.tenor.com/oFarfXCgL90AAAAC/.gif',
  'https://c.tenor.com/GCWKqT1ukt4AAAAC/.gif',
  'https://c.tenor.com/jAycgzTbAWwAAAAC/.gif',
  'https://c.tenor.com/SnZAnKY10gwAAAAd/.gif',
  'https://c.tenor.com/DRgXad_JuuQAAAAC/.gif'];

/** @type {command}*/
module.exports = {
  description: 'Cuddle a loved one!',

  run: function run(message) {
    return gifFunction(message, gifs, 'cuddle cuddle <user>!!', 'Cuddles for everyone!!');
  }
};