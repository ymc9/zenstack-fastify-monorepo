/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.PostCountAggregateInputType,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    title: z.literal(true).optional(),
    published: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PostCountAggregateInputObjectSchema = Schema;
