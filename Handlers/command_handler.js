const { readdir } = require('fs/promises');

async function getDirectories(path) {
  // Get all files and dirs in a path
  const dirsAndFiles = await readdir(path, { withFileTypes: true });
  // Use the reduce method to only get the directory names
  const dirs = dirsAndFiles.reduce((acc, e) => e.isDirectory() ? [...acc, e.name] : acc, []);
  // Return the directory names (Array)
  return dirs;
}

let commandCount = 0;

/**@param {import('discord.js').Client}client*/
module.exports = async function commandHandler(client) {
  // Loop through all the files in the Commands directory
  for (const subFolder of await getDirectories('./Commands')) {
    // Loop through all the files in the subdirectory
    for (const file of await readdir(`./Commands/${subFolder}`)) {
      // If the file is not a JavaScript file, skip it
      if (!file.endsWith('.js')) continue;

      // Import the event
      const command = require(`../Commands/${subFolder}/${file}`);
      // Skip the file if it doesn't have a run property
      if (!command?.run) continue;

      // add a category property, useful for eg. help command
      command.category = subFolder;

      // Get the command name by removing the file extension
      const commandName = file.split('.')[0];
      // add the command to the collection with its name as key
      client.commands.set(commandName, command);

      // Log that the event has been loaded
      console.log(`Loaded Prefix Command ${commandName}`);
      // Increment the command counter
      commandCount++;
    }
  }

  console.log(`Loaded ${commandCount} Prefix Commands`);
};