const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://c.tenor.com/xy05so3mD6cAAAAC/.gif',
  'https://c.tenor.com/77NmM3gal6sAAAAC/.gif',
  'https://c.tenor.com/PBdwTKAond0AAAAC/.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Bully someone!!',

  run: function run(message) {
    return gifFunction(message, gifs, 'HAHA get bullied <user>!', 'HAHA get bullied nobody!');
  }
};