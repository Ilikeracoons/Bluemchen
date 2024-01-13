const { EmbedBuilder } = require('discord.js');
const gifs = [`https://media.giphy.com/media/l3V0Akmv7LTfIHK6c/giphy.gif`, 
`https://media.giphy.com/media/52dOyY6pGuv1S/giphy.gif`, `https://media.giphy.com/media/NNeyoSjPTDfhe/giphy.gif`, 
`https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif`, `https://media.giphy.com/media/l0HU380owIjSg4ks8/giphy.gif`,
`https://media.giphy.com/media/RdriIl7F0CBQyctX1V/giphy.gif`]

module.exports = {
  /**@param {import('discord.js').Message}message @param {string[]}args*/
  run: async function run(message, args) {
  await message.channel.send('Its Fine you will be fine!')
  const randomIndex = Math.floor(Math.random() * gifs.length);
  let embed = new EmbedBuilder().setImage(gifs[randomIndex]);
  message.channel.send({ embeds: [embed] });
  }
 };