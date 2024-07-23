const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://media1.tenor.com/m/Ko1AOLzUmyEAAAAd/kiss-anime.gif', 'https://media1.tenor.com/m/OjcDtiEDUvMAAAAC/friendly-kiss.gif',
  'https://media1.tenor.com/m/rQ8qlj_oQ-YAAAAC/anime-kiss.gif', 'https://media1.tenor.com/m/xb1sLPwwRScAAAAd/akagi-miria-miria-akagi.gif',
  'https://media1.tenor.com/m/H7ElWf1bKUkAAAAC/anime-kiss-miyamura-kiss.gif', 'https://media1.tenor.com/m/EaU6_8vbbuQAAAAC/love-liebe.gif',
  'https://media1.tenor.com/m/_eP0iWZ2Y5AAAAAC/chibi-cat-mochi-cat.gif', 'https://media1.tenor.com/m/BZyWzw2d5tAAAAAC/hyakkano-100-girlfriends.gif',
  'https://media1.tenor.com/m/PS6medrGxqwAAAAd/cat-kiss.gif', 'https://media1.tenor.com/m/ye6xtORyw_8AAAAC/2.gif',
  'https://media1.tenor.com/m/SZ8-4vDwi6cAAAAC/miyamura-hori.gif', 'https://media1.tenor.com/m/PzTWDtTn_N4AAAAC/kiss-blow-kisses.gif',
  'https://media1.tenor.com/m/WaJl99zHUYIAAAAC/love.gif', 'https://media1.tenor.com/m/1wObtysLtHEAAAAC/aaa-bbb.gif',
  'https://media1.tenor.com/m/Q6rgr_3z9W0AAAAC/kiss.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Gives a user a kiss',

  run: function run(message) {
    return gifFunction(message, gifs, 'Mwuahhh, <user>', `Mwuahhh, ${message.author}`);
  }
};