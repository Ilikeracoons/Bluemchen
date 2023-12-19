const prefix = 'b!';

/**@param {import('discord.js').Message}message*/
module.exports = async function messageCreate(message) {
  // If the message author is a bot or the message doesn't start with the prefix, return.
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const
    //remove the prefix from the string and then split the string on whitespaces.
    args = message.content?.slice(prefix.length).split(' '),
    //remove the first arg from the args array and save it to commandName
    commandName = args.shift();

  //get the command from the Collection
  const command = message.client.commands.get(commandName);
  if (!command) return;

  try { await command.run(message, args); }
  catch (err) { return console.error(` [Error Handling] :: Unhandled Exception on command ${commandName}`, err); }
};
