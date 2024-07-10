const gifFunction = require('../../Utils/gifFunction.js');
const gifs = [
  'https://media1.tenor.com/m/xy05so3mD6cAAAAC/please-dont-bully-me-nagatoro-san-anime.gif', 'https://media1.tenor.com/m/fdvjUM36k8oAAAAd/super_mario_3d_world-bully.gif',
  'https://media1.tenor.com/m/77NmM3gal6sAAAAC/kitten-cute.gif', 'https://media1.tenor.com/m/Yv3P2LUfeLsAAAAC/nelson-simpsons.gif',
  'https://media1.tenor.com/m/PBdwTKAond0AAAAC/pokemon-will.gif'
];

/** @type {command}*/
module.exports = {
  description: 'Bully someone!!',

  run: function run(message) {
    return gifFunction(message, gifs, 'HAHA get bullied <user>!', 'HAHA get bullied nobody!');
  }
};