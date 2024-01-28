/**@type {command}*/
module.exports = {
  description: 'Says Hello',
  
  run: function run(message) {
    return message.reply('Hello! ^^');
  }
};
