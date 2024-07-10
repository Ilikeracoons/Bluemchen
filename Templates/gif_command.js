const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [ ];

/** @type {command}*/
module.exports = {
  description: ' ',

  run: function run(message) {
    return gifFunction(message, gifs, 'description1 <user>','description 2');
  }
};