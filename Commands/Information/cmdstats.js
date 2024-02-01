const { EmbedBuilder, Colors } = require('discord.js');

/**@type {command}*/
module.exports = {
  description: 'shows you my most used commands :D',

  run: function run(message, args) {
    const
      command = args[0],
      embed = new EmbedBuilder({ title: ('My most used Commands!'), color: Colors.DarkGreen });

    if (command) {
      embed.data.description = `This is my most used command:\nName: \`${command}\`, Uses: ${message.client.db.get('botSettings', 'cmdstats.' + command) ?? 0}`;
    }
    else {
      embed.data.fields = Object.entries(message.client.db.get('botSettings', 'cmdstats') ?? {})
        .filter(([k]) => message.client.commands.has(k))
        .sort(([, a], [, b]) => b - a).slice(0, 10).map(([name, v]) => ({ name, value: `**${v}**`, inline: true }));
    }

    return message.reply({ embeds: [embed] });
  }
};