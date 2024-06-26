const { ActivityType } = require('discord.js');

/** @type {command}*/
module.exports = {
  description: 'set my activity',

  run: function (message, args) {
    let type = args.shift();
    const activity = args.join(' ');

    // Searching the list of valid activities
    type = type ? ActivityType[Object.keys(ActivityType).find(e => e.toLowerCase() == type.toLowerCase())] : ActivityType.Playing;

    if (Number.isNaN(Number.parseInt(type))) type = ActivityType[type];

    if (!type && type != 0) return message.reply(`Invalid activity type, valid types: ${Object.keys(ActivityType).filter(e => !Number.parseInt(e)).join('`, `')}`);

    message.client.user.setActivity({ name: activity, type });

    if (activity) return message.reply(`Set activity to ${activity} of type ${ActivityType[type]}`);
    return message.reply('Reset activity');
  }
};