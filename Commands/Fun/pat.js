const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://media1.tenor.com/m/2vFAxyl6cI8AAAAd/mai-headpats.gif', 'https://media1.tenor.com/m/7s9GHzaidu0AAAAC/cat-patting.gif',
  'https://media1.tenor.com/m/ngpifLa9ieQAAAAC/pat-patting.gif', 'https://media1.tenor.com/m/Wrr4rxTqrrkAAAAC/futeki-fearless.gif',
  'https://media1.tenor.com/m/BybOb1gHKLoAAAAC/demonslayer-patting.gif', 'https://media1.tenor.com/m/WNgHw8BmL5wAAAAC/nanana-scared.gif',
  'https://media1.tenor.com/m/bDtpaQDU8JYAAAAC/tokyo-mew-mew-anime-cat-pat.gif', 'https://media1.tenor.com/m/2iQbqC7NsJsAAAAC/lawine-frieren.gif',
  'https://media1.tenor.com/m/mecnd_qE8p8AAAAd/anime-pat.gif', 'https://media1.tenor.com/m/Mjyd8s7XLkYAAAAd/neko-pat.gif',
  'https://media1.tenor.com/m/PQwn1C3Yv2YAAAAC/menhera-chan-anime.gif', 'https://media1.tenor.com/m/lznDFmlyFa0AAAAC/eromanga-sensei-pat-pat-pat.gif',
  'https://media1.tenor.com/m/Dbg-7wAaiJwAAAAC/aharen-aharen-san.gif', 'https://media1.tenor.com/m/f5asRSsfl-wAAAAC/good-boy-pat-on-head.gif',
  'https://media1.tenor.com/m/KyGPQuYCdYkAAAAd/pat-garrys-mod.gif', 'https://media1.tenor.com/m/x36w4wZx1JcAAAAC/pikachu-sadness.gif',
  'https://media1.tenor.com/m/c7GxCIVEy-gAAAAC/malpat-truepat.gif', 'https://media1.tenor.com/m/1I1pGUd3xWkAAAAC/mala-mishra-jha-pat-head.gif'
];

/** @type {command}*/
module.exports = {
  description: 'pat someone!!',
  run: function run(message) {
    return gifFunction(message, gifs, 'pat pat <user>', `${message.member.displayName} is patting somebody! (uuii)`);
  }
};