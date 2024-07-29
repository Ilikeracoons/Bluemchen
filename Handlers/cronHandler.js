const { Events } = require('discord.js');
const { CronJob } = require('cron');
const { readdir } = require('node:fs/promises');

/** @param {import('discord.js').Client<false>}client*/
function awaitReady(client) {
  return new Promise(res => client.once(Events.ClientReady, () => res(client.application.name ? client.application : client.application.fetch())));
}


/** @param {import('discord.js').Client<false>}client*/
module.exports = async function timeEventsHandler(client) {
  await awaitReady(client);

  for (const file of await readdir('./TimeEvents')) {
    if (!file.endsWith('.js')) continue;

    const job = require(`../TimeEvents/${file}`);

    void new CronJob(job.time, job.onTick.bind(client), job.onComplete?.bind(client), true, job.timeZone, client, job.startNow, job.utcOffset);


    console.log(`Loaded Cron Job ${file}`);
  }
};