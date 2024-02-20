/**
 * @param {import('discord.js').GuildMember}member
 * @param {import('discord.js').GuildMember}target*/
function checkTargetManageable(member, target) {
  if (member.id == target.id) return "You can't ban yourself silly!";
  if (!target.manageable) return "Well~ I don't have the permission to do that!";
  if (member.guild.ownerId != member.user.id && target.roles?.highest?.position >= member.roles.highest.position)
    return "Silly you, you don't have the permission to do that!";
}

/**
 * @param {import('discord.js').Message}message
 * @param {import('discord.js').GuildMember}target
 * @param {string} reason*/
async function ban(message, target, reason) {
  const err = checkTargetManageable(message.member, target);
  if (err) return message.reply(`Oh nou, **${target.user.tag}** couldn't be banned.\n${err}\n`);

  let noMsg;
  try {
    await target.send(
      `:( You have been banned from \`${target.guild.name}\`.\n`
      + `Moderator: ${message.author.tag}\n`
      + `Reason: ${reason}`
    );
  }
  catch {
    if (err.code != 50_007) throw err; // "Cannot send messages to this user"
    noMsg = true;
  }

  await target.ban({ reason: `Moderator ${message.author.username} | ${reason}`, deleteMessageSeconds: 0 });

  let msg = `**${target.user.tag}** has been successfully banned.\n`;
  if (noMsg) msg += 'Could not msg the target. They did not want to talk to me! D:';
  return message.reply(msg);
}

/** @type {command}*/
module.exports = {
  description: 'Ban an annoying user',

  run: async function run(message, args) {
    const commandUsage = 'Command usage: ban [userId] [reason]';

    if (!Number.parseInt(args[0])) return message.reply(`invalid user id\n${commandUsage}`);

    let target;
    try { target = await message.guild.members.fetch(args[0]); }
    catch { return message.reply('hmmm couldn`t find the user ID'); }

    const reason = args.slice(1).join(' ');
    if (!target) return message.reply(`Uhm? And who should I ban?\n${commandUsage}`);
    if (!reason) return message.reply(`Give me a reason dumby!\n${commandUsage}`);

    return ban(message, target, reason);
  }
};