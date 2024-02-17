// Credits: https://github.com/Mephisto5558/Teufelsbot/blob/main/Commands/Owner-Only/eval.js

const
  { codeBlock } = require('discord.js'),
  vars = ['message', '__dirname', '__filename', 'exports', 'module', 'require'],
  /* eslint-disable-next-line func-names, no-empty-function */
  BoundAsyncFunction = async function () { }.constructor.bind(null, ...vars),
  /* eslint-disable-next-line no-new-func */
  BoundFunction = Function.bind(null, ...vars);

/** @type {command}*/
module.exports = {
  description: 'eval code with me',

  run: async function run(message, args) {
    if (!args.length) return;

    const code = args.join(' ');
    const msg = `Code:\n${codeBlock('js', code)}\n`;

    try {
      await (code.includes('await') ? new BoundAsyncFunction(code) : new BoundFunction(code)).call(this, message, __dirname, __filename, exports, module, require);
      await message.reply(`${msg} wurde fehlerlos ausgeführt.`);
    }
    catch (err) {
      message.reply(`${msg} wurde mit dem folgenden Fehler ausgeführt:\n${codeBlock(err.name + ': ' + err.message)}`);
    }

    return console.debug(`evaluated command '${code}'`);
  }
};