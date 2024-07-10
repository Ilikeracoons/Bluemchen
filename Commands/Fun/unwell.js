const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://media.giphy.com/media/l3V0Akmv7LTfIHK6c/giphy.gif', 'https://media.giphy.com/media/52dOyY6pGuv1S/giphy.gif', 'https://media.giphy.com/media/NNeyoSjPTDfhe/giphy.gif',
  'https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif', 'https://media.giphy.com/media/l0HU380owIjSg4ks8/giphy.gif', 'https://media.giphy.com/media/RdriIl7F0CBQyctX1V/giphy.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Sends an Gif for Comfort if someone feels unwell',

  run: function run(message) {
    return gifFunction(message, gifs, "It's fine you will be fine!");
  }
};