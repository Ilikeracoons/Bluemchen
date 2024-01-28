const
  { EmbedBuilder, Colors } = require('discord.js'),
  config = require('../../config.json');

/**@type {command}*/
module.exports = {
  description: 'Get some help',

  run: function run(message) {
    const
      commands = message.client.commands.reduce((acc, command) => {
        if (
          !(config?.ownerOnlyFolders ?? ['owner-only']).includes(command.category.toLowerCase())
          || (config?.ownerIds ?? [message.client.application.owner.id]).includes(message.author.id)
        ) {
          if (acc[command.category]) acc[command.category].push(command);
          else acc[command.category] = [command];
        }
        return acc;
      }, {}),
      embeds = [
        new EmbedBuilder({
          title: 'Look at my commands! ^^',
          color: Colors.DarkGreen,
          thumbnail: { url: message.client.user.avatarURL() }
        }),
        ...Object.values(commands).map(categoryCommands => new EmbedBuilder({
          title: categoryCommands[0].category,
          color: Colors.DarkGreen,
          fields: categoryCommands.map(e => ({ name: e.name, value: e.description || 'No description available', inline: true }))
        }))
      ];

    return message.reply({ embeds });
  }
};