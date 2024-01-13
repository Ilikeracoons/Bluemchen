module.exports = {
  /**@param {import('discord.js').Message}message*/
  run: function run(message) {
    return message.reply(`Pong! \`${message.client.ws.ping}\`ms`);
  }
};
