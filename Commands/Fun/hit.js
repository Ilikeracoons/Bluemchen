const { Colors, EmbedBuilder } = require('discord.js');
const gifs = [
  'https://media1.tenor.com/m/E4Px9kJOQ5wAAAAC/anime-kid.gif', 'https://media1.tenor.com/m/CawKRw6kPtoAAAAd/tokyo-revengers-anime.gif',
  'https://media1.tenor.com/m/CUy1MDU94xgAAAAC/froakie-hit.gif', 'https://media1.tenor.com/m/qfq-agI9GNkAAAAC/smack.gif',
  'https://media1.tenor.com/m/tfu-SnLkaP4AAAAC/alarm-clock.gif', 'https://media1.tenor.com/m/vn7TxqOl-ugAAAAC/slap-hit.gif',
  'https://media1.tenor.com/m/HNshDeQoEKsAAAAd/psyduck-hit-smash.gif', 'https://media1.tenor.com/m/y4Z5Gsjc3VEAAAAC/kick-drop.gif',
  'https://media1.tenor.com/m/Jpp7qo6lEHYAAAAd/mochi-cat.gif'
];

/**@type {command}*/
module.exports = {
  description: 'hit someone if they annoy you',
  color: Colors.DarkGreen,
  run: async function run(message) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const firstUserMentioned = message.mentions.users.first();
    let userMentioned = 'nobody';
    if (firstUserMentioned) {
      userMentioned = firstUserMentioned.username;
    }
    const embed = new EmbedBuilder().setDescription(`Stop now ${userMentioned}!`).setImage(gifs[randomIndex]);
    return message.reply({ embeds: [embed] });
  }
};
