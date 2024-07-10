// Credits: https://github.com/Mephisto5558/Teufelsbot/tree/main/Utils/getTargetChannel.js

/**
 * @type {import('./types').getTargetChannel}
 *
 * Function to get the channel a user mentioned.
 *
 * Returns the mentioned channel.
 * If none got found, returns the message's channel if `returnSelf` is true, otherwise `undefined`.*/
module.exports = function getTargetChannel(message, returnSelf) {
  let target = message.mentions?.channels.first();
  if (!target && message.content) target = message.guild.channels.cache.find(e => [e.id, e.name].some(e => [...message.args ?? [], message.content].includes(e)));

  if (target) return target;
  if (returnSelf) return message.channel;
};