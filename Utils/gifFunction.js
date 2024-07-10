const
  { Colors, EmbedBuilder } = require('discord.js'),
  getTargetMember = require('./getTargetMember.js');

/**
 * @param {import('discord.js').Message}message
 * @param {string[]}gifs
 * @param {string}descriptionMentioned
 * @param {string?}descriptionGeneral*/
module.exports = function gifFunction(message, gifs, descriptionMentioned, descriptionGeneral = descriptionMentioned) {
  // Gets the user who (or who's name) was mentioned
  const member = getTargetMember(message);

  // Get a random number
  const randomIndex = Math.floor(Math.random() * gifs.length);
  // Create the embed
  const embed = new EmbedBuilder().setImage(gifs[randomIndex]).setColor(Colors.DarkGreen);

  // If a user was mentioned, set the description to `descriptionMentioned` and replace all `<user>` with the user's name.
  if (member) embed.setDescription(descriptionMentioned.replaceAll('<user>', member.displayName));
  else embed.setDescription(descriptionGeneral);

  // Send the reply.
  return message.reply({ embeds: [embed] });
};