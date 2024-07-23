// Import the readdir function from fs/promises module to read directories
const { readdir } = require('node:fs/promises');

/** @param {import('discord.js').Client<false>}client*/
// Export an asynchronous function that handles events
module.exports = async function eventHandler(client) {
  let eventCount = 0; // Initialize a counter for the number of events

  // Loop through all the files in the Events directory
  for (const file of await readdir('./Events')) {
    // If the file is not a JavaScript file, skip it
    if (!file.endsWith('js')) continue;

    // Get the event name by removing the file extension
    const eventName = file.split('.')[0];

    // Import the event
    const event = require(`../Events/${file}`);

    // Add an event listener to the client
    client.on(eventName, (...args) => { // same as client.addListener
      // If the event has one argument and it's an instance of the Client class, call the event with only the client as the argument
      if (args.length == 1 && args[0] instanceof client.constructor) event(client);

      // Otherwise, call the event with the original arguments and the client as the last argument
      else event(...args, client);
    });

    // Log that the event has been loaded
    console.log(`Loaded Event ${eventName}`);
    eventCount++; // Increment the event counter
  }

  // Log the total number of loaded events
  console.log(`Loaded ${eventCount} Events\n`);
};