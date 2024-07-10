const gifFunction = require('../../Utils/gifFunction.js');
const gifs = ['https://media1.tenor.com/m/HBmX6ZzfcKYAAAAd/friends-tv-group-hug.gif', 'https://media1.tenor.com/m/Bh1NCACEJvkAAAAd/elias-ainsworth-cuddle.gif',
  'https://media1.tenor.com/m/8e9QI2E7SEMAAAAC/miss-kobayashis-dragon-maid-anime.gif', 'https://media1.tenor.com/m/eskxu088NAUAAAAC/cat-cuddle-cat.gif',
  'https://media1.tenor.com/m/oFarfXCgL90AAAAC/anime-cuddle.gif', 'https://media1.tenor.com/m/Dc5yd05wu_cAAAAC/couple-hug.gif',
  'https://media1.tenor.com/m/GCWKqT1ukt4AAAAC/hold-me-couple.gif', 'https://media1.tenor.com/m/9oKHJBp5Ih4AAAAd/hug.gif',
  'https://media1.tenor.com/m/jAycgzTbAWwAAAAC/cuddle.gif', 'https://media1.tenor.com/m/neUPtGWqYm4AAAAd/hug-anime.gif',
  'https://media1.tenor.com/m/SnZAnKY10gwAAAAd/cat-cuddle.gif', 'https://media1.tenor.com/m/hHY0vqTef_AAAAAC/kawai.gif',
  'https://media1.tenor.com/m/DRgXad_JuuQAAAAC/bobitos-mimis.gif'];

/** @type {command}*/
module.exports = {
  description: 'Cuddle a loved one!',

  run: function run(message) {
    return gifFunction(message, gifs, 'cuddle cuddle <user>!!', 'Cuddles for everyone!!');
  }
};