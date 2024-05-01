const { Colors, EmbedBuilder } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'tells you my uptime',

  run: function run(message) {
    let totalSeconds = message.client.uptime / 1000;
    const days = Math.floor(totalSeconds / 86_400);
    totalSeconds %= 86_400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);


    let msg = 'I am online since: ';
    if (days) msg += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    else if (hours) msg += `${hours} hours, ${minutes} minutes and ${seconds} seconds!`;
    else if (minutes) msg += `${minutes} minutes and ${seconds} seconds!`;
    else msg += `${seconds} seconds!`;
    const embed = new EmbedBuilder().setDescription(msg).setColor(Colors.DarkGreen);
    return message.reply({ embeds: [embed] });
  }
};