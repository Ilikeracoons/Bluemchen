const { EmbedBuilder, Colors } = require('discord.js');

module.exports = {
  description: 'Get some help',

  /**@param {import('discord.js').Message}message*/
  run: function run(message) {
    const
      commands = message.client.commands.reduce((acc, v) => {
        if (acc[v.category]) acc[v.category].push(v);
        else acc[v.category] = [v];

        return acc;
      }, {}),
      embeds = [
        new EmbedBuilder({
          title: 'Look at my commands! ^^',
          color: Colors.White,
          thumbnail: { url: message.client.user.avatarURL() }
        }),
        ...Object.values(commands).map(categoryCommands => new EmbedBuilder({
          title: categoryCommands[0].category,
          color: Colors.White,
          fields: categoryCommands.map(e => ({ name: e.name, value: e.description || 'No description available', inline: true }))
        }))
      ];

    return message.reply({ embeds });
  }
};