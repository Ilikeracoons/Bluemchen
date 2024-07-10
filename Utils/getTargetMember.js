// Credits: https://github.com/Mephisto5558/Teufelsbot/tree/main/Utils/getTargetMember.js

/**
 * @type {import('./types').getTargetMember}
 *
 * Function to get the member or user a user mentioned.
 *
 * Returns the mentioned member/user.
 * If none got found, returns the message's author if `returnSelf` is true, otherwise `undefined`.*/
module.exports = function getTargetMember(message, returnSelf) {
  if (message.inGuild()) {
    let target = message.mentions?.members.first();
    if (!target && message.content) {
      target = message.guild.members.cache.find(e => [
        e.user?.id || e.author.id, e.user.username, e.user.globalName, e.nickname
      ].some(e => [...message.args ?? [], message.content].includes(e)));
    }

    if (target) return target;
    if (returnSelf) return message.member;
  }

  const target = message.mentions?.users.first();
  if (target) return target;
  if (returnSelf) return message.user || message.author;
};