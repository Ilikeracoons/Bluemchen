const
  config = require('../config.json'),
  prefix = 'b!';

/**@param {import('discord.js').Message}message*/
module.exports = async function messageCreate(message) {
  // If the message author is a bot or the message doesn't start with the prefix, return.
  if (message.author.bot || !message.content.toLowerCase().startsWith(prefix)) return;

  const
    //remove the prefix from the string and then split the string on whitespaces.
    args = message.content?.slice(prefix.length).split(' '),
    //remove the first arg from the args array and save it to commandName
    commandName = args.shift();

  //get the command from the Collection
  const command = message.client.commands.get(commandName.toLowerCase());
  if (!command) return;

  if (
    //if the category is an owner only folder (if none in config.json set, default to 'owner-only')...
    (config?.ownerOnlyFolders ?? ['owner-only']).includes(command.category.toLowerCase())
    //...and the message author is not in the ownerIds (default: application owner), return.
    && !(config?.ownerIds ?? [message.client.application.owner.id]).includes(message.author.id)
  ) return;

  try { await command.run(message, args); }
  catch (err) { return console.error(` [Error Handling] :: Unhandled Exception on command ${commandName}`, err); }
};
