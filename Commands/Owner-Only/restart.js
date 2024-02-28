const { Colors, EmbedBuilder } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'restart mee ^^',

  run: function run(message) {
    const embed = new EmbedBuilder().setDescription('Gonna restart now wait a min :t_rex:')
      .setColor(Colors.DarkGreen);
    return message.reply({ embeds: [embed] });
  }
};