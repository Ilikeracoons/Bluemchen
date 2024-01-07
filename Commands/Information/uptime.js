module.exports = {
  /**@param {import(discord.js).Message}message*/
  run: function run(message) {
    let totalSeconds = (message.client.uptime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);


    let msg = 'I am online since: ';
    if (days) msg += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    else if (hours) msg += `${hours} hours, ${minutes} minutes and ${seconds} seconds!`;
    else if (minutes) msg += `${minutes} minutes and ${seconds} seconds!`;
    else msg += `${seconds} seconds!`;

    return message.reply(msg);
  }
};