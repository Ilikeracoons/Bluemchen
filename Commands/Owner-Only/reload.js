// Credits: https://github.com/Mephisto5558/Teufelsbot/blob/main/Commands/Owner-Only/reload.js

const
  { resolve } = require('node:path'),
  { access } = require('node:fs/promises');

/**
 * @param {import('discord.js').Client}client
 * @param {command}command
 * @param {string[]}reloadedArray gets modified and not returned
 * @throws {Error}if a command file has been found but has an error*/
function reloadCommand(client, command, reloadedArray) {
  delete require.cache[command.filePath];

  /** @type {command}*/
  let file = {};
  try { file = require(command.filePath); }
  catch (err) {
    if (err.code != 'MODULE_NOT_FOUND') throw err;
  }

  file.name = command.name;
  file.filePath = command.filePath;
  file.category = command.category;

  client.commands.delete(command.name);
  client.commands.set(file.name, file);

  reloadedArray.push(file.name);
}

/** @type {command}*/
module.exports = {
  description: 'Reload a command of file',

  run: async function (message, args) {
    console.debug('Reloading files', args);

    const
      msg = await message.reply('Loading...'),
      reloadedArray = [];

    try {
      switch (args[0].toLowerCase()) {
        case 'file': {
          const filePath = resolve(process.cwd(), args[1]);

          try { await access(filePath); }
          catch (err) {
            if (err.code != 'ENOENT') throw err;
            return msg.edit('Invalid file path');
          }

          if (args[1]?.startsWith('Commands/')) {
            /** @type {command}*/
            const cmd = require(filePath);
            cmd.filePath = filePath;
            cmd.category = args[1].split('/')[1].toLowerCase();

            reloadCommand(message.client, cmd, reloadedArray);
          }

          delete require.cache[filePath];
          break;
        }
        case '*': for (const [, command] of message.client.commands) reloadCommand(message.client, command, reloadedArray); break;
        default: {
          const command = message.client.commands.get(args[0]);
          if (!command) return msg.edit('Unknown command');

          reloadCommand(message.client, command, reloadedArray);
        }
      }
    }
    catch (err) {
      msg.reply(`An error occurred: ${err.message}`);
      console.error('Error while trying to reload a command:\n', err);
    }

    let commands = reloadedArray.reduce((acc, e) => acc + (e.startsWith('<') ? e : `\`${e}\``) + ', ', '').slice(0, -2);
    if (commands.length >= 800) commands = commands.slice(0, Math.max(0, commands.slice(0, 800).lastIndexOf('`,') + 1)) + '...';

    if (reloadedArray.length) return msg.edit(`The following \`${reloadedArray.length}\` commands have been reloaded:\n` + commands);
    return msg.edit('No commands were reloaded :<');
  }
};