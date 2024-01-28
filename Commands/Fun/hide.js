const { Colors, EmbedBuilder } = require('discord.js');
const gifs = ['https://c.tenor.com/v1HWDFBQ6IAAAAAd/tenor.gif', 'https://c.tenor.com/nAlJWac_3UoAAAAd/tenor.gif', 'https://c.tenor.com/eBtzvs6BwisAAAAC/tenor.gif'
  , 'https://c.tenor.com/aHLMhy03cKMAAAAC/tenor.gif', 'https://c.tenor.com/H4wn3LEeg1kAAAAC/tenor.gif', 'https://c.tenor.com/_515GtHhQHoAAAAd/tenor.gif'
  , 'https://c.tenor.com/9ECvcdReQ7MAAAAd/tenor.gif', 'https://c.tenor.com/8s4st4cG7sUAAAAd/tenor.gif', 'https://c.tenor.com/8fX-mGi62pEAAAAC/tenor.gif'
  , 'https://media1.tenor.com/m/PBdwTKAond0AAAAC/pokemon-will.gif'
];

/**@type {command}*/
module.exports = {
  description: 'Hide from someone or something!',
  color: Colors.DarkGreen,
  run: async function run(message) {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const embed = new EmbedBuilder().setDescription(`Ooh ${message.author} is hiding!`).setImage(gifs[randomIndex]);
    return message.reply({ embeds: [embed] });
  }
};