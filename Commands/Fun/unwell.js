const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://i.giphy.com/l3V0Akmv7LTfIHK6c.gif', 'https://i.giphy.com/52dOyY6pGuv1S.gif', 'https://i.giphy.com/NNeyoSjPTDfhe.gif',
  'https://i.giphy.com/SHyuhBtRr8Zeo.gif', 'https://i.giphy.com/l0HU380owIjSg4ks8.gif', 'https://i.giphy.com/RdriIl7F0CBQyctX1V.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Sends an Gif for Comfort if someone feels unwell',

  run: function run(message) {
    return gifFunction(message, gifs, "It's fine you will be fine!");
  }
};