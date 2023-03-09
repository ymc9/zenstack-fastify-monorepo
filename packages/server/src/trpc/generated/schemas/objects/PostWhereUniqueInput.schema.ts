/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const PostWhereUniqueInputObjectSchema = Schema;
