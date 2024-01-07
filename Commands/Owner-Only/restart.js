module.exports = {
  /**@param {import('discord.js').Message}message @param {string[]}args*/
  run: async function run(message) {
    await message.reply('I will restart now! gimmie a min');
    process.exit();
  }
};