/** @type {command}*/
module.exports = {
  description: 'restart mee ^^',

  run: async function run(message) {
    await message.reply('I will restart now! gimmie a min');
    process.exit();
  }
};