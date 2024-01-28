import type Discord from 'discord.js';
import type DB from '@mephisto5558/mongoose-db';

declare global {
  type command = {
    name: string;
    description?: string;
    category: string;
    run(message: Discord.Message, args: string[]): any;
  };
}

declare module 'discord.js' {
  interface BaseClient {
    db: DB;
    keys: object;
    commands: Discord.Collection<string, command>
  }
}
