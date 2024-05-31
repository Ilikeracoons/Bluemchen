const { EmbedBuilder, Colors, ActivityType } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'Get information about yourself from me :D',

  run: async function run(message) {
    const member = message.mentions.members.first() || message.member;

    const embed = new EmbedBuilder()
      .setColor(Colors.DarkGreen)
      .setTitle(`Some information about ${member.displayName}`)
      .setThumbnail(member.user.avatarURL())
      .addFields({ name: 'Username', value: `<@${member.id}>`, inline: true },

        { name: 'Status', value: member.presence?.status || 'Offline', inline: true },

        { name: 'Joined Discord on', value: `<t:${Math.round(member.user.createdTimestamp / 1000)}>`, inline: true },

        { name: 'Joined this great sever on', value: `<t:${Math.round(member.joinedTimestamp / 1000)}>`, inline: true });

    if (member.presence?.activities.length > 0) {
      let activityString = '';
      for (const activity of member.presence.activities) {
        switch (activity.type) {
          case ActivityType.Playing:
            activityString += `Is playing **${activity.name}**`;
            break;
          case ActivityType.Listening:
            activityString += `Is listening to **${activity.name}**`;
            break;
          case ActivityType.Watching:
            activityString += `Is watching**${activity.name}**(porn)`;
            break;
          case ActivityType.Streaming:
            activityString += `is streaming **${activity.name}**`;
        }
      }

      embed.setDescription(activityString);
    }

    await message.reply({ embeds: [embed] });
  }
};