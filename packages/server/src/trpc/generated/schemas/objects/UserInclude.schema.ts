/* eslint-disable */
import { z } from 'zod';
import { PostSchema } from '../Post.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.UserInclude, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    posts: z.union([z.boolean(), z.lazy(() => PostSchema.findMany)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
