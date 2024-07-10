const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://media.giphy.com/media/VVh7txo37uooM/giphy.gif', 'https://media.giphy.com/media/pPkXCRcslKzLO/giphy.gif', 'https://media.giphy.com/media/hOrsk8I7TWRXy/giphy.gif',
  'https://media.giphy.com/media/ODECD7W3dzk5y/giphy.gif', 'https://media.giphy.com/media/BkqSYWqv8Zfva/giphy.gif', 'https://media.giphy.com/media/VpcYdQpElriNy/giphy.gif',
  'https://media.giphy.com/media/KhhXPUPHlzfBS/giphy.gif', 'https://media.giphy.com/media/klmpEcFgXzrYQ/giphy.gif', 'https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif',
  'https://media.giphy.com/media/36vZ9fy5nK0HS/giphy.gif', 'https://media.giphy.com/media/3IQsGPmOK8s4U/giphy.gif', 'https://media.giphy.com/media/cmB0ts2FBhPx9q3ZBY/giphy.gif',
  'https://media.giphy.com/media/Q7MImfRX28tJ5uNkDX/giphy.gif', 'https://media.giphy.com/media/QzBXeaTZtg99PH9z6S/giphy.gif', 'https://media.giphy.com/media/VpcYdQpElriNy/giphy.gif',
  'https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Sends an Gif to show user is Blushing!',

  run: function run(message) {
    return gifFunction(message, gifs, `awww ${message.author} is bushing!`);
  }
};