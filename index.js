console.time('Initializing time');
console.info('Starting...');

const
  { Client, AllowedMentionsTypes, GatewayIntentBits, Partials, Collection } = require('discord.js'), // Importing necessary classes from discord.js
  { readdir } = require('fs/promises'), // Importing readdir function from fs/promises to read directories
  http = require('http'), // Importing http module to create a server
  { DB } = require('@mephisto5558/mongoose-db'), // Importing mongoose-db module to communicate with MongoDB
  env = require('./env.json'), // Importing environment variables from env.json
  gitpull = require('./Utils/gitpull'); // Importing gitpull function from Utils/gitpull

console.timeEnd('Initializing time');
console.time('Starting time');

// Main function
(async function main() {
  // Create a new client instance
  const client = new Client({
    shards: 'auto',
    failIfNotExists: false,
    allowedMentions: {
      repliedUser: false,
      // Makes sure the bot cannot mention @everyone or @here
      parse: [
        AllowedMentionsTypes.User,
        AllowedMentionsTypes.Role
      ]
    },
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ],
    partials: [
      Partials.Channel,
      Partials.Message
    ]
  });

  client.db = await new DB().init(env.keys.connectionstring, 'db-collections');
  client.keys = env.keys; // Assigning keys from environment variables to client
  client.commands = new Collection(); // Creating a new collection for client commands

  // Loop through all the files in the Handlers directory
  for (const file of await readdir('./Handlers')) {
    const handler = require(`./Handlers/${file}`); // Importing each handler
    handler(client); // Running each handler with the client as parameter
  }

  await client.login(client.keys.token); // Logging in to Discord with the client's token
  console.log(`Logged in to ${client.user.tag}!`);
})();

// Create a webserver
http
  .createServer((req, res) => {
    if (req.url == '/gitpull') gitpull(); // If the request URL is '/gitpull', run the gitpull function
    res.end('OK'); // End the response with 'OK'
  })
  .listen(process.env.PORT ?? process.env.SERVER_PORT ?? 8000); // Listen on the specified port

// Error handling
process
  .on('unhandledRejection', err => console.error(' [Error Handling] :: Unhandled Rejection', err.stack)) // Log unhandled promise rejections
  .on('uncaughtExceptionMonitor', err => console.error(' [Error Handling] :: Unhandled Exception', err.stack)) // Log uncaught exceptions
  .on('uncaughtException', err => console.error(' [Error Handling] :: Unhandled Exception', err.stack)); // Log uncaught exceptions

console.timeEnd('Starting time');