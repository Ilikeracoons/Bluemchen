/**@type {command}*/
module.exports = {
  description: 'tells User goodbye',
  
  run: function run(message) {
    return message.reply(`Goodbye ${message.author}! See you soon :D`);
  }
};
