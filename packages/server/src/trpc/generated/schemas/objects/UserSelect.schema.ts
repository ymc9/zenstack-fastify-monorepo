/* eslint-disable */
import { z } from 'zod';
import { PostSchema } from '../Post.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.UserSelect, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    posts: z.union([z.boolean(), z.lazy(() => PostSchema.findMany)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
