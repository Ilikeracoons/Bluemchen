const gifFunction = require('../../Utils/gifFunction.js');
const gifs = ['https://c.tenor.com/bghWy11m6aEAAAAC/.gif', 'https://c.tenor.com/aRoCgRHHlDEAAAAC/.gif',
    'https://c.tenor.com/m/N2qSCBkdracAAAAC/.gif', 'https://c.tenor.com/Q5GbwjMr1DEAAAAC/.gif',
    'https://c.tenor.com/PHU196vXyJAAAAAC/.gif', 'https://c.tenor.com/bU6dGAk-cs4AAAAC/.gif',
    'https://c.tenor.com/tgVGh4R71MEAAAAC/.gif', 'https://c.tenor.com/7oerRY2yVtwAAAAC/.gif',
    'https://c.tenor.com/JECyRLDr6p0AAAAd/.gif', 'https://c.tenor.com/1gXo-_tu1kMAAAAC/.gif',
    'https://c.tenor.com/pd5vRArcbhcAAAAC/.gif', 'https://c.tenor.com/LeJ3iTQNoxQAAAAd/.gif',
    'https://c.tenor.com/QW3vU0E5gnEAAAAC/.gif', 'https://c.tenor.com/vEcyUvOTLI4AAAAC/.gif',
    'https://c.tenor.com/1ECS-n3fzxIAAAAC/.gif'
]

/** @type {command}*/
module.exports = {
    description: 'show how u feel!',
  
    run: function run(message) {
      return gifFunction(message, gifs, `oh nou ${message.author} is crying :(`);
    }
  };