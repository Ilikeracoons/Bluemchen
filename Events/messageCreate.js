const
  config = require('../config.json'),
  prefix = 'b!';

/** @param {import('discord.js').Message}message*/
module.exports = async function messageCreate(message) {
  // If the message author is a bot or the message doesn't start with the prefix, return.
  if (message.author.bot || !message.content.toLowerCase().startsWith(prefix)) return;
  const
    args = message.content?.slice(prefix.length).trim().split(' '), // remove the prefix from the string and then split the string on whitespaces.
    commandName = args.shift(); // remove the first arg from the args array and save it to commandName

  // get the command from the Collection
  const command = message.client.commands.get(commandName.toLowerCase());
  if (!command) return;

  if (

    // if the category is an owner only folder (if none in config.json set, default to 'owner-only')...
    (config?.ownerOnlyFolders ?? ['owner-only']).includes(command.category.toLowerCase())

    // ...and the message author is not in the ownerIds (default: application owner), return.
    && !(config?.ownerIds ?? [message.client.application.owner.id]).includes(message.author.id)
  ) return;

  try {
    await command.run(message, args); // execute the command with the message and args as arguments
    // increment the cmdstats for this command
    await message.client.db.update('botSettings', `cmdstats.${command.name}`, message.client.db.get('botSettings', `cmdstats.${command.name}`) + 1 || 1);
  }
  catch (err) { return console.error(` [Error Handling] :: Unhandled Exception on command ${commandName}`, err); }
};