const { Colors, EmbedBuilder } = require('discord.js');
const gifs = [
  'https://media1.tenor.com/m/OOec313ZvlwAAAAC/my-melody-hello-kitty.gif', 'https://media1.tenor.com/m/Fg2sywkrfw8AAAAC/cinnamoroll-cinnamon-roll.gif',
  'https://media1.tenor.com/m/xpXBNg4bnacAAAAC/sanrio-hello-kitty.gif', 'https://media1.tenor.com/m/VXKFzyXFJRcAAAAC/sanrio-my.gif',
  'https://media1.tenor.com/m/1fyNuX1I4ewAAAAC/my-sweet-piano-sanrio.gif', 'https://media1.tenor.com/m/Vozidckt_q8AAAAC/smooches-hearts.gif',
  'https://media1.tenor.com/m/d-S-rF6ZB_oAAAAd/pompompurin-sanrio.gif', 'https://media1.tenor.com/m/AMm9lIfrxTAAAAAC/sanrio-my-melody.gif',
  'https://media1.tenor.com/m/4PHGkHBiMfYAAAAC/kuromi-sanrio.gif', 'https://media1.tenor.com/m/YmQnzITYoTkAAAAC/kuromi-sanrio.gif'
];

/** @type {command}*/
module.exports = {
  description: 'sends an Sanrio GIF',
  run: function run(message) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const embed = new EmbedBuilder().setImage(gifs[randomIndex]).setColor(Colors.Pink);
    return message.reply({ embeds: [embed] });
  }
};