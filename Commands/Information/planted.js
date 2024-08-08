const { EmbedBuilder, Colors } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'get some information about my private Life :3',

  run: function run(message) {
    const embed = new EmbedBuilder().setDescription(
      'Hello :sauropod:! My name is Blümchen as you all know :3 \n'
      + `I am ${new Date().getFullYear() - message.client.user.createdAt.getFullYear()} years old, pretty old huh?\n\n\n`
      + 'My mother is called Marin she has a friend called Mephisto who sometimes looks out for me! His son is my Best friend he is called Teufelsbot!\n'
      + 'We already have been on many adventures. Like invading Hell with his dad. or saving my people from some gnomes. He is a really nice guy like his dad.\n'
      + 'So much to me! I am glad you read this thank you and now some more little facts about me!\n\n\n'
      + `I have a multitude of ${message.client.commands.size} commands!\n`
      + 'My favorite food is Soup and I love the game Cult of the Lamb'

    ).setImage('https://c.tenor.com/termX5OvksIAAAAC/.gif')
      .setColor(Colors.Fuchsia);

    message.reply({ embeds: [embed] });
  }
};