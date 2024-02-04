const { Colors, EmbedBuilder } = require('discord.js');
const gifs = [
  'https://media1.tenor.com/m/xy05so3mD6cAAAAC/please-dont-bully-me-nagatoro-san-anime.gif', 'https://media1.tenor.com/m/fdvjUM36k8oAAAAd/super_mario_3d_world-bully.gif',
  'https://media1.tenor.com/m/77NmM3gal6sAAAAC/kitten-cute.gif', 'https://media1.tenor.com/m/Yv3P2LUfeLsAAAAC/nelson-simpsons.gif',
  'https://media1.tenor.com/m/PBdwTKAond0AAAAC/pokemon-will.gif'
];

/**@type {command}*/
module.exports = {
  description: 'Bully someone!!',
  color: Colors.DarkGreen,

  run: async function run(message) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const firstUserMentioned = message.mentions.users.first();
    let userMentioned = 'nobody';
    if (firstUserMentioned) {
      userMentioned = firstUserMentioned.username;
    }
    const embed = new EmbedBuilder().setDescription(`HAHA get bullied ${userMentioned}!`).setImage(gifs[randomIndex]);
    return message.reply({ embeds: [embed] });
  }
};