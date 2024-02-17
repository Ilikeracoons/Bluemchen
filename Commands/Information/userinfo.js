const { Colors, EmbedBuilder } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'Get information about yourself from me :D',

  run: function run(message) {
    const userMention = message.mentions.users.first() || message.author;
    const embed = new EmbedBuilder().setDescription(`Username: ${userMention.username}\n`
      + `Tag: ${userMention.tag}\n`
      + `Is Bot: ${userMention.bot}\n`
      + `Account Created At: ${userMention.createdAt}\n`
      + `Avatar URL: ${userMention.avatarURL()}`).setColor(Colors.DarkGreen)
      .setImage(userMention.avatarURL());
    return message.reply({ embeds: [embed] });
  }
};