module.exports = {
  description: 'tells User goodbye',
  /**@param {import('discord.js').Message}message*/
  run: function run(message) {
    return message.reply(`Goodbye ${message.author}! See you soon :D`);
  }
};
