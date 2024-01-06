module.exports = {
  /** @param {import(discord.js).message}message*/
  run: function run(message) {
    let totalSeconds = (message.client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    return message.reply(`Ich bin online seit: ${days} Tagen, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden!  `);
  }
};