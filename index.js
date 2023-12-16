// Require the necessary discord.js classes
const
  { Client, GatewayIntentBits } = require('discord.js'),
  env = require('./env.json');

// Create a new client instance
(async function main() {
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

  // Log in to Discord with your client's token
  await client.login(client.keys.token);
  console.log(`Logged in to ${client.user.tag}!`)
})()