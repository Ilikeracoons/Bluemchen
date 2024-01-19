const { ActivityType } = require('discord.js');

module.exports = {
  discription: 'set my activity',
  /**@param {import('discord.js').Message}message @param {string[]}args*/
  run: async function (message, args) {
    let type = args.shift();
    const activity = args.join(' ');

    // Searching the list of valid activities
    if (type) type = ActivityType[Object.keys(ActivityType).find(e => e.toLowerCase() == type.toLowerCase())];
    else type = ActivityType.Playing;

    if (isNaN(type)) type = ActivityType[type];

    if (!type && type != 0) return message.reply(`Invalid activity type, valid types: ${Object.keys(ActivityType).filter(e => isNaN(e)).join('`, `')}`);

    message.client.user.setActivity(activity, { type });

    if (activity) return message.reply(`Set activity to ${activity} of type ${ActivityType[type]}`);
    return message.reply('Reset activity');
  }
};