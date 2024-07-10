const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://media1.tenor.com/m/E4Px9kJOQ5wAAAAC/anime-kid.gif', 'https://media1.tenor.com/m/CawKRw6kPtoAAAAd/tokyo-revengers-anime.gif',
  'https://media1.tenor.com/m/CUy1MDU94xgAAAAC/froakie-hit.gif', 'https://media1.tenor.com/m/qfq-agI9GNkAAAAC/smack.gif',
  'https://media1.tenor.com/m/tfu-SnLkaP4AAAAC/alarm-clock.gif', 'https://media1.tenor.com/m/vn7TxqOl-ugAAAAC/slap-hit.gif',
  'https://media1.tenor.com/m/HNshDeQoEKsAAAAd/psyduck-hit-smash.gif', 'https://media1.tenor.com/m/y4Z5Gsjc3VEAAAAC/kick-drop.gif',
  'https://media1.tenor.com/m/Jpp7qo6lEHYAAAAd/mochi-cat.gif'
];

/** @type {command}*/
module.exports = {
  description: 'hit someone if they annoy you',

  run: function run(message) {
    return gifFunction(message, gifs, 'Stop now, <user>!', 'Stop now!');
  }
};