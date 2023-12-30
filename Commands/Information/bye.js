module.exports = {
    /**@param {import('discord.js').Message}message*/
    run: function run(message) {
      return message.reply(`Good bye ${message.author}! See you soon :D `);
    }
  };
  