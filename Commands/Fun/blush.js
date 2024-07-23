const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://i.giphy.com/VVh7txo37uooM.gif', 'https://i.giphy.com/pPkXCRcslKzLO.gif', 'https://i.giphy.com/hOrsk8I7TWRXy.gif',
  'https://i.giphy.com/ODECD7W3dzk5y.gif', 'https://i.giphy.com/BkqSYWqv8Zfva.gif', 'https://i.giphy.com/VpcYdQpElriNy.gif',
  'https://i.giphy.com/KhhXPUPHlzfBS.gif', 'https://i.giphy.com/klmpEcFgXzrYQ.gif', 'https://i.giphy.com/T3Vvyi6SHJtXW.gif',
  'https://i.giphy.com/36vZ9fy5nK0HS.gif', 'https://i.giphy.com/3IQsGPmOK8s4U.gif', 'https://i.giphy.com/cmB0ts2FBhPx9q3ZBY.gif',
  'https://i.giphy.com/Q7MImfRX28tJ5uNkDX.gif', 'https://i.giphy.com/QzBXeaTZtg99PH9z6S.gif', 'https://i.giphy.com/VpcYdQpElriNy.gif',
  'https://i.giphy.com/dkvGrfQ6ryIAU.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Sends an Gif to show user is Blushing!',

  run: function run(message) {
    return gifFunction(message, gifs, `awww ${message.author} is bushing!`);
  }
};