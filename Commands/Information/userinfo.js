const { EmbedBuilder, Colors, ActivityType } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'Get information about yourself from me :D',

  run: async function run(message) {
    const member = message.mentions.members.first() || message.member;

    if (member.id === message.client.user.id) {
      const botEmbed = new EmbedBuilder()
        .setColor(Colors.DarkGreen)
        .setTitle(`Some Information about ${member.displayName} wait t-that is me! Okay here we go!`)
        .setThumbnail(message.client.user.avatarURL())
        .addFields(
          {
            name: 'my mom and sort of dad', value: 'Okay soo~ most important my Mothers name or just take this here [I_likeracoons](https://discord.com/users/1161364914011648074)\n'
            + 'and her friend [Mephisto5558](https://discord.com/users/691550551825055775)'
          },
          { name: ' I am online ', value: message.client.user.presence?.status },
          { name: 'I was born on the', value: `<t:${Math.round(member.user.createdTimestamp / 1000)}>`, inline: true },
          { name: 'I joined this cute server on', value: `<t:${Math.round(member.joinedTimestamp / 1000)}>`, inline: true }
        );
      await message.reply({ embeds: [botEmbed] });
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(Colors.DarkGreen)
      .setTitle(`Some information about ${member.displayName}`)
      .setThumbnail(member.user.avatarURL())
      .addFields({ name: 'Username', value: `<@${member.id}>`, inline: true },

        { name: 'Status', value: member.presence?.status ?? 'Offline', inline: true },

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
            activityString += `Is watching**${activity.name}**`;
            break;
          case ActivityType.Streaming:
            activityString += `is streaming **${activity.name}**`;
        }
      }

      if (activityString) embed.setDescription(activityString);
    }

    await message.reply({ embeds: [embed] });
  }
};