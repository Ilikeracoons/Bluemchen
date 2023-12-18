const { readdir } = require('fs/promises');

/**@param {import('discord.js').Client<false>}client*/
module.exports = async function eventHandler(client) {
  let eventCount = 0;
  for (const file of await readdir('./Events')) {
    if (!file.endsWith('js')) continue;
    
    const eventName = file.split('.')[0];
    const event = require(`../Events/${file}`);

    client.on(eventName, (...args) => { // das gleiche wie client.addListener
      if (args.length == 1 && args[0] instanceof client.constructor) event(client);
      else event(...args, client);
    });

    console.log(`Loaded Event ${eventName}`);
    eventCount++;
  }

  console.log(`Loaded ${eventCount} Events\n`);
};