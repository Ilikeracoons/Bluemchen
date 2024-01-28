/**@type {command}*/
module.exports = {
  description:'Will reply with pong and the time I need to reply',
  
  run: function run(message) {
    return message.reply(`Pong! \`${message.client.ws.ping}\`ms`);
  }
};
