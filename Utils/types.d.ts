// Credits: https://github.com/Mephisto5558/Teufelsbot/tree/main/Utils/types.d.ts

import type { Message, DMChannel, GuildChannel, GuildMember, Role, User } from 'discord.js';

type MaybeWithUndefined<X, T extends boolean> = T extends true ? X : X | undefined;

export function getTargetChannel<M extends Message, T extends boolean>(
  message: M, returnSelf?: T
): M extends Message<true> ? MaybeWithUndefined<GuildChannel, T> : MaybeWithUndefined<DMChannel, T>;

export function getTargetRole<T extends boolean>(
  message: Message<true>, returnSelf?: T
): MaybeWithUndefined<Role, T>;

export function getTargetMember<M extends Message, T extends boolean>(
  message: M, returnSelf?: T
): M extends Message<true> ? MaybeWithUndefined<GuildMember, T> : MaybeWithUndefined<User, T>;