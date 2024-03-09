const { Colors, EmbedBuilder } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'restart mee ^^',

  run: async function run(message) {
    const embed = new EmbedBuilder().setDescription('Gonna restart now wait a min :t_rex:')
      .setColor(Colors.DarkGreen);
    await message.reply({ embeds: [embed] });

    process.exit();
  }
};