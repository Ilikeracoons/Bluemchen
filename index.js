// Require the necessary discord.js classes
const
  { Client, AllowedMentionsTypes, GatewayIntentBits, Partials, Events, Collection } = require('discord.js'),
  { readdir, readFile } = require('fs/promises'),
  env = require('./env.json');

(async function main() {
  // Create a new client instance
  const client = new Client({
    shards: 'auto',
    failIfNotExists: false,
    allowedMentions: {
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

  client.keys = env.keys;
  client.commands = new Collection()

  for (const file of await readdir('./Handlers')) {
    const handler = require(`./Handlers/${file}`);
    handler();
  }

  // Log in to Discord with your client's token
  await client.login(client.keys.token);
  console.log(`Logged in to ${client.user.tag}!`);
})();

process
  .on('unhandledRejection', err => console.error(` [Unhandled Rejection]: ${err.stack}`))
  .on('uncaughtExceptionMonitor', err => console.error(` [Unhandled Exception]: ${err.stack}`))
  .on('uncaughtException', err => console.error(` [Unhandled Exception]: ${err.stack}`));