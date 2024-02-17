const { Colors, EmbedBuilder } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'Will reply with pong and the time I need to reply',

  run: function run(message) {
    const embed = new EmbedBuilder().setDescription(`Pong! \`${message.client.ws.ping}\`ms`).setColor(Colors.DarkGreen);
    return message.reply({ embeds: [embed] });
  }
};