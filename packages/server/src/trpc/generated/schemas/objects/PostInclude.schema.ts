/* eslint-disable */
import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostInclude> = z
  .object({
    author: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const PostIncludeObjectSchema = Schema;
