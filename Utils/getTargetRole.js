// Credits: https://github.com/Mephisto5558/Teufelsbot/tree/main/Utils/getTargetRole.js

/**
 * @type {import('./types').getTargetRole}
 *
 * Function to get the role a user mentioned.
 *
 * Returns the mentioned role.
 * If none got found, returns the message author's hightest role if `returnSelf` is true, otherwise `undefined`.*/
module.exports = function getTargetRole(message, returnSelf) {
  let target = message.mentions?.roles.first();
  if (!target && message.content) target = message.guild.roles.cache.find(e => [e.id, e.name].some(e => [...message.args ?? [], message.content].includes(e)));

  if (target) return target;
  if (returnSelf) return message.member.roles.highest;
};