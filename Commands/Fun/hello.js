module.exports = {
 description: 'Says Hello',
  /**@param {import('discord.js').Message}message*/
  run: function run(message) {
    return message.reply('Hello! ^^');
  }
};
