module.exports = {
 discription: 'Get information about yourself from me :D',
  /**@param {import('discord.js').Message}message*/
  run: async function run(message) {
    const userMention = message.mentions.users.first() || message.author;

    message.channel.send('User Information:\n\n' +
      `Username: ${userMention.username}\n` +
      `Tag: ${userMention.tag}\n` +
      `Is Bot: ${userMention.bot}\n` +
      `Account Created At: ${userMention.createdAt}\n` +
      `Avatar URL: ${userMention.avatarURL()}`);
  }
};
