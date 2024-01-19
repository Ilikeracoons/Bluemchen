const { EmbedBuilder } = require('discord.js');
const gifs = [
  'https://media.giphy.com/media/l3V0Akmv7LTfIHK6c/giphy.gif', 'https://media.giphy.com/media/52dOyY6pGuv1S/giphy.gif', 'https://media.giphy.com/media/NNeyoSjPTDfhe/giphy.gif'
  , 'https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif', 'https://media.giphy.com/media/l0HU380owIjSg4ks8/giphy.gif', 'https://media.giphy.com/media/RdriIl7F0CBQyctX1V/giphy.gif'
];

module.exports = {
  description: 'Sends an Gif for Comfort if someone feels unwell',
  /**@param {import('discord.js').Message}message*/
  run: async function run(message) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const embed = new EmbedBuilder().setDescription("It's fine you will be fine!").setImage(gifs[randomIndex]);
    return message.reply({ embeds: [embed] });
  }
};