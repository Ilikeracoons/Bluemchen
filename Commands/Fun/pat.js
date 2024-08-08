const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://c.tenor.com/2vFAxyl6cI8AAAAd/.gif',
  'https://c.tenor.com/ngpifLa9ieQAAAAC/.gif',
  'https://c.tenor.com/BybOb1gHKLoAAAAC/.gif',
  'https://c.tenor.com/bDtpaQDU8JYAAAAC/.gif',
  'https://c.tenor.com/mecnd_qE8p8AAAAd/.gif',
  'https://c.tenor.com/PQwn1C3Yv2YAAAAC/.gif',
  'https://c.tenor.com/Dbg-7wAaiJwAAAAC/.gif',
  'https://c.tenor.com/KyGPQuYCdYkAAAAd/.gif',
  'https://c.tenor.com/c7GxCIVEy-gAAAAC/.gif'
];

/** @type {command}*/
module.exports = {
  description: 'pat someone!!',
  run: function run(message) {
    return gifFunction(message, gifs, 'pat pat <user>', `${message.member.displayName} is patting somebody! (uuii)`);
  }
};