module.exports = {
  description:'Will reply with pong and the time I need to Reply',
  /**@param {import('discord.js').Message}message*/
  run: function run(message) {
    return message.reply(`Pong! \`${message.client.ws.ping}\`ms`);
  }
};
