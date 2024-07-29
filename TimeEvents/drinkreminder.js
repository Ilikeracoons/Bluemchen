const { Colors, EmbedBuilder } = require('discord.js');
module.exports = {
  time: '0 0 8-20 * * * ',
  startNow: false,


  /** @this {import('discord.js').Client<false>}*/
  onTick: async function () {
    const guild = await this.guilds.fetch('1209582491619295253');
    const channel = await guild.channels.fetch('1209924955068702800');
    const member = await guild.members.fetch('1161364914011648074');
    const embed = new EmbedBuilder().setDescription('It is time to drink something!').setColor(Colors.DarkGreen)
      .setImage('https://c.tenor.com/qPtcE6FtZ5MAAAAC/.gif');
    channel.send({ embeds: [embed], content: member.toString() });
  }
};