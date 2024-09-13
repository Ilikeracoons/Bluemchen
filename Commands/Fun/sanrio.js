const { Colors, EmbedBuilder } = require('discord.js');
const gifs = [
  'https://c.tenor.com/OOec313ZvlwAAAAC/.gif',
  'https://c.tenor.com/xpXBNg4bnacAAAAC/.gif',
  'https://c.tenor.com/1fyNuX1I4ewAAAAC/.gif',
  'https://c.tenor.com/d-S-rF6ZB_oAAAAd/.gif',
  'https://c.tenor.com/4PHGkHBiMfYAAAAC/.gif'
];

/** @type {command}*/
module.exports = {
  description: 'sends an Sanrio GIF',
  run: function run(message) {
    /* eslint-disable-next-line sonarjs/pseudo-random -- safe here */
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const embed = new EmbedBuilder().setImage(gifs[randomIndex]).setColor(Colors.DarkVividPink);
    return message.reply({ embeds: [embed] });
  }
};